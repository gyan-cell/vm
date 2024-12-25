import mongoose from "mongoose";

const connectDB = async () => {
  try {
    console.log(process.env.DB_URL);
    const connection = await mongoose.connect(process.env.DB_URL, {
      dbName: "vbox",
    });

    console.log(`MongoDB Connected: ${connection.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
