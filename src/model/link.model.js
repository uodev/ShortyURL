import mongoose from "mongoose";

const linkSchema = mongoose.Schema(
  {
    longUrl: {
      type: String,
      required: true,
    },
    shortUrl: {
      type: String,
      unique: true,
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
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
        return ret;
      },
    },
  }
);

const Link = mongoose.model("Link", linkSchema);

export default Link;
