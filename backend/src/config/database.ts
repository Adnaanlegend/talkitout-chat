import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const mongoUri = process.env.MONGODB_URI;
    if (!mongoUri) {
      throw new Error("MONGODB_URI environment variable is not defined");
    }

    await mongoose.connect(mongoUri);
    console.log("✅ MongoDB connected successfully");
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    console.error("❌ MongoDB connection error:", error);

    if (message.includes("querySrv ECONNREFUSED")) {
      console.error(
        "\nHint: Node/Bun could not resolve the Atlas SRV record (common on Windows).\n" +
          "In MongoDB Atlas → Connect → Drivers, copy the standard connection string\n" +
          "(mongodb://... not mongodb+srv://) and set MONGODB_URI in backend/.env.\n" +
          "Or fix DNS (e.g. use 8.8.8.8 / 1.1.1.1) so SRV lookups succeed.\n"
      );
    }

    process.exit(1); // exit with failure
    // status code 1 means failure
    // status code 0 means success
  }
};