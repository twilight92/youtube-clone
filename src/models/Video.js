import mongoose from "mongoose";

export const formatHashtags = (hashtags) => {
    return hashtags.split(",").map((word) => (word.startsWith("#") ? word : `#${word}`));
}

const videoSchema = new mongoose.Schema({
    title: { type: String, required: true, trim: true, maxLength: 10  },
    fileUrl: { type: String, required: true },
    description: { type: String, required: true, trim: true, minLength: 10 },
    createdAt: { type: Date, required: true, default: Date.now },
    hashtags: [{ type: String, trim: true }],
    meta: {
        views: { type: Number, required: true, default: 0 },
        rating: { type: Number, required: true, default: 0 },
    },
    owner: { type:mongoose.Schema.Types.ObjectId, required: true, ref: "User" }
});

videoSchema.static('formatHashtags', function(hashtags) {
    return hashtags.split(",").map((word) => (word.startsWith("#") ? word : `#${word}`));
});

const Video = mongoose.model("Video", videoSchema);
export default Video;