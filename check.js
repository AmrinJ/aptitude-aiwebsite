const mongoose = require('mongoose');

async function run() {
  await mongoose.connect('mongodb+srv://Amrin:Amrin05@cluster0.zyx4san.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
  const Topic = mongoose.models.Topic || mongoose.model('Topic', new mongoose.Schema({ questions: Array }, { strict: false }));
  const topic = await Topic.findOne({ id: 'train-problems' });
  if (topic && topic.questions && topic.questions.length > 0) {
    console.log('Q1 visualParams:', topic.questions[0].visualParams);
    console.log('Keys of Q1:', Object.keys(topic.questions[0]));
  } else {
    console.log('No topic or questions found');
  }
  process.exit(0);
}
run();
