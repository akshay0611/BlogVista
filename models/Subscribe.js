import mongoose from "mongoose";

const subscribeSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true, // Ensure no duplicate emails
      trim: true, // Remove extra spaces
      lowercase: true, // Store emails in lowercase
      match: [/\S+@\S+\.\S+/, "Please provide a valid email address."], // Validate email format
    },
  },
  {
    timestamps: true, // Automatically add `createdAt` and `updatedAt` fields
  }
);

// Create the model
const Subscribe = mongoose.models.Subscribe || mongoose.model("Subscribe", subscribeSchema);

export default Subscribe;