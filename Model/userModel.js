import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
  },
  userEmail: {
    type: String,
    required: true,
  },
  userPassword: {
    type: String,
    required: true,
  },
  userImage: {
    type: String,
    default: "",
  },
});

const userModel = mongoose.model("User", userSchema);

export default userModel;
