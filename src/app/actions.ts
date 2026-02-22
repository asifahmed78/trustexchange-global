'use server';

import { PrismaClient } from '@prisma/client';
import { revalidatePath } from 'next/cache';
import { writeFile, unlink } from 'fs/promises';
import { join } from 'path';
import { randomBytes } from 'crypto';

// Use a global variable to persist the Prisma instance across hot reloads in dev mode
const globalForPrisma = global as unknown as { prisma: PrismaClient };
const prisma = globalForPrisma.prisma || new PrismaClient();
if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

// --- Posts Actions ---

export async function getPosts() {
    return await prisma.post.findMany({
        orderBy: { createdAt: 'desc' },
    });
}

export async function createPost(formData: FormData) {
    const title = formData.get('title') as string;
    const excerpt = formData.get('excerpt') as string;
    const content = formData.get('content') as string;
    const slug = formData.get('slug') as string;
    const published = formData.get('published') === 'true';
    const externalUrl = (formData.get('externalUrl') as string) || null;

    let imageUrl: string | null = null;
    const imageFile = formData.get('image') as File | null;

    if (imageFile && imageFile.size > 0) {
        const bytes = await imageFile.arrayBuffer();
        const buffer = Buffer.from(bytes);

        // Generate unique filename
        const uniqueSuffix = randomBytes(8).toString('hex');
        const extension = imageFile.name.split('.').pop();
        const filename = `${uniqueSuffix}.${extension}`;

        const path = join(process.cwd(), 'public/uploads', filename);
        await writeFile(path, buffer);
        imageUrl = `/uploads/${filename}`;
    }

    let finalSlug = slug;
    const existing = await prisma.post.findUnique({ where: { slug: finalSlug } });
    if (existing) {
        finalSlug = `${slug}-${randomBytes(4).toString('hex')}`;
    }

    await prisma.post.create({
        data: { title, excerpt, content, slug: finalSlug, published, externalUrl, imageUrl },
    });

    revalidatePath('/admin/posts');
    revalidatePath('/updates');
}

export async function deletePost(id: number) {
    const post = await prisma.post.findUnique({ where: { id } });
    if (post?.imageUrl) {
        try {
            const filename = post.imageUrl.replace('/uploads/', '');
            const path = join(process.cwd(), 'public/uploads', filename);
            await unlink(path);
        } catch (error) {
            console.error('Failed to delete associated image file:', error);
        }
    }

    await prisma.post.delete({ where: { id } });
    revalidatePath('/admin/posts');
    revalidatePath('/updates');
}

// --- Events Actions ---

export async function getEvents() {
    return await prisma.event.findMany({
        orderBy: { date: 'asc' },
    });
}

export async function createEvent(formData: FormData) {
    const title = formData.get('title') as string;
    const location = formData.get('location') as string;
    const type_ = formData.get('type') as string;
    const label = formData.get('label') as string;
    const dateStr = formData.get('date') as string;
    const link = (formData.get('link') as string) || null;

    let featuredImage: string | null = null;
    const imageFile = formData.get('image') as File | null;

    if (imageFile && imageFile.size > 0) {
        const bytes = await imageFile.arrayBuffer();
        const buffer = Buffer.from(bytes);

        const uniqueSuffix = randomBytes(8).toString('hex');
        const extension = imageFile.name.split('.').pop();
        const filename = `${uniqueSuffix}.${extension}`;

        const path = join(process.cwd(), 'public/uploads', filename);
        await writeFile(path, buffer);
        featuredImage = `/uploads/${filename}`;
    }

    const dateObj = new Date(dateStr);

    await prisma.event.create({
        data: {
            title,
            location,
            type: type_,
            label,
            date: dateObj,
            link,
            featuredImage
        },
    });

    revalidatePath('/admin/events');
    revalidatePath('/');
    revalidatePath('/updates');
}

export async function updatePost(id: number, formData: FormData) {
    const title = formData.get('title') as string;
    const excerpt = formData.get('excerpt') as string;
    const content = formData.get('content') as string;
    const slug = formData.get('slug') as string;
    const published = formData.get('published') === 'true';
    const externalUrl = (formData.get('externalUrl') as string) || null;

    const post = await prisma.post.findUnique({ where: { id } });
    let imageUrl = post?.imageUrl || null;

    const imageFile = formData.get('image') as File | null;
    if (imageFile && imageFile.size > 0) {
        // Delete old image if it exists
        if (imageUrl) {
            try {
                const oldFilename = imageUrl.replace('/uploads/', '');
                const oldPath = join(process.cwd(), 'public/uploads', oldFilename);
                await unlink(oldPath);
            } catch (error) {
                console.error('Failed to delete old image file:', error);
            }
        }

        const bytes = await imageFile.arrayBuffer();
        const buffer = Buffer.from(bytes);

        const uniqueSuffix = randomBytes(8).toString('hex');
        const extension = imageFile.name.split('.').pop();
        const filename = `${uniqueSuffix}.${extension}`;

        const path = join(process.cwd(), 'public/uploads', filename);
        await writeFile(path, buffer);
        imageUrl = `/uploads/${filename}`;
    }

    await prisma.post.update({
        where: { id },
        data: { title, excerpt, content, slug, published, externalUrl, imageUrl },
    });

    revalidatePath('/admin/posts');
    revalidatePath('/updates');
}

export async function deleteEvent(id: number) {
    const event = await prisma.event.findUnique({ where: { id } });
    if (event?.featuredImage && event.featuredImage.startsWith('/uploads/')) {
        try {
            const filename = event.featuredImage.replace('/uploads/', '');
            const path = join(process.cwd(), 'public/uploads', filename);
            await unlink(path);
        } catch (error) {
            console.error('Failed to delete associated event image file:', error);
        }
    }

    await prisma.event.delete({ where: { id } });
    revalidatePath('/admin/events');
    revalidatePath('/');
    revalidatePath('/updates');
}

export async function updateEvent(id: number, formData: FormData) {
    const title = formData.get('title') as string;
    const location = formData.get('location') as string;
    const type_ = formData.get('type') as string;
    const label = formData.get('label') as string;
    const dateStr = formData.get('date') as string;
    const link = (formData.get('link') as string) || null;
    const dateObj = new Date(dateStr);

    const event = await prisma.event.findUnique({ where: { id } });
    let featuredImage = event?.featuredImage || null;

    const imageFile = formData.get('image') as File | null;
    if (imageFile && imageFile.size > 0) {
        // Delete old image if it exists and is an uploaded file
        if (featuredImage && featuredImage.startsWith('/uploads/')) {
            try {
                const oldFilename = featuredImage.replace('/uploads/', '');
                const oldPath = join(process.cwd(), 'public/uploads', oldFilename);
                await unlink(oldPath);
            } catch (error) {
                console.error('Failed to delete old event image file:', error);
            }
        }

        const bytes = await imageFile.arrayBuffer();
        const buffer = Buffer.from(bytes);

        const uniqueSuffix = randomBytes(8).toString('hex');
        const extension = imageFile.name.split('.').pop();
        const filename = `${uniqueSuffix}.${extension}`;

        const path = join(process.cwd(), 'public/uploads', filename);
        await writeFile(path, buffer);
        featuredImage = `/uploads/${filename}`;
    }

    await prisma.event.update({
        where: { id },
        data: {
            title,
            location,
            type: type_,
            label,
            date: dateObj,
            link,
            featuredImage
        },
    });

    revalidatePath('/admin/events');
    revalidatePath('/');
    revalidatePath('/updates');
}

export async function getSettingAction(key: string) {
    const setting = await prisma.setting.findUnique({ where: { key } });
    return setting?.value || null;
}

export async function updateSettingAction(key: string, value: string) {
    await prisma.setting.upsert({
        where: { key },
        update: { value },
        create: { key, value },
    });
    revalidatePath('/privacy');
    revalidatePath('/admin/privacy');
}
