const mongoose = require('mongoose');

const uri = 'mongodb+srv://Amrin:Amrin@cluster0.zyx4san.mongodb.net/?appName=Cluster0';

async function testConnection() {
  try {
    await mongoose.connect(uri);
    console.log('Connection successful!');
    process.exit(0);
  } catch (error) {
    console.error('Connection failed:', error.message);
    process.exit(1);
  }
}

testConnection();
