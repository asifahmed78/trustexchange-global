const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  await prisma.post.create({
    data: {
      title: 'Welcome to Trust Exchange',
      excerpt: 'The start of our journey.',
      content: 'Detailed content here.',
      slug: 'welcome',
      published: true
    }
  });
  
  await prisma.event.create({
    data: {
      title: 'Unlikely Encounters: London Summit',
      date: new Date('2024-10-24'),
      location: 'Shoreditch High St, London',
      type: 'location_on',
      label: 'OCT'
    }
  });
  
  await prisma.event.create({
    data: {
      title: 'The X-Changers Workshop: Network Dynamics',
      date: new Date('2024-11-12'),
      location: 'Digital Encounter',
      type: 'videocam',
      label: 'NOV'
    }
  });

  console.log('Seed completed.');
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
