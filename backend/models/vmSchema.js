import mongoose from "mongoose";

const vmSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  status: {
    type: String,
    enum: ["creating", "running", "stopped", "error"],
    default: "creating",
  },
  specs: {
    cores: Number,
    memory: Number,
    storage: Number,
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const vm = mongoose.Schema.vm || mongoose.model("vm", vmSchema);

export default vm;
