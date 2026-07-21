const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const uri = 'mongodb+srv://Amrin:Amrin05@cluster0.zyx4san.mongodb.net/test?appName=Cluster0';

async function resetPassword() {
  try {
    await mongoose.connect(uri);
    console.log('Connected to DB...');
    const db = mongoose.connection.db;
    
    // Hash the new password
    const hashedPassword = await bcrypt.hash('admin123', 10);
    
    // Update the user document
    const result = await db.collection('users').updateOne(
      { email: 'amrinjameer@gmail.com' },
      { $set: { password: hashedPassword } }
    );
    
    console.log(`Matched ${result.matchedCount} document(s) and modified ${result.modifiedCount} document(s).`);
    console.log('Password has been successfully reset to: admin123');
    process.exit(0);
  } catch (error) {
    console.error('Error resetting password:', error);
    process.exit(1);
  }
}

resetPassword();
