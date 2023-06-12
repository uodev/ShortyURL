import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true, // no two users can have the same email
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    JSON: {
      virtuals: false,
      transform: (doc, ret) => {
        const id = ret._id;
        ret.id = id;

        delete ret._id;
        delete ret.__v;
        delete ret.password;

        return ret;
      },
    },
  }
);

const User = mongoose.model("User", userSchema);

export default User;
