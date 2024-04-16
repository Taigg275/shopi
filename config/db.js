import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        await mongoose.connect(
           process.env.MONGO_URL
        );

        console.log('Thanh cong');
    } catch (error) {
        console.log('F');
    }
};

export default connectDB;
