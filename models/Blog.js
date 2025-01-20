const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const BlogSchema = new Schema(
  {
    head: {
      title: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
      keywords: {
        type: String,
        required: true,
      },
      author: {
        type: String,
        required: true,
      },
    },
    image: {
      type: Object,
    },
    category: {
      type: String,
      required: true,
    },
    pageSlug: {
      type: String,
      unique: true,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    isActive: {
      type: Boolean,
      required: true,
      default: true,
    },
    postContent: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Blog || mongoose.model("Blog", BlogSchema);
