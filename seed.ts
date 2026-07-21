import dbConnect from './src/lib/db';
import Topic from './src/lib/models/Topic';
import { TOPICS } from './src/data/topics';

async function seed() {
  console.log('Connecting to db...');
  await dbConnect();
  console.log('Clearing old topics...');
  await Topic.deleteMany({});
  console.log('Inserting new topics with updated visualParams...');
  await Topic.insertMany(TOPICS);
  console.log(`Successfully seeded ${TOPICS.length} topics!`);
  process.exit(0);
}

seed().catch(console.error);
