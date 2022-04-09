import mongoose from "mongoose";

const schema = mongoose.Schema({
    profile_picture: String,
    postedBy: {
        userName: String,
        handle: String
    },
    tuit: String,
    time: String,
    title: String,
    card_image: String,
    stats: {
        retuits: Number,
        likes: Number,
        replies: Number,
        dislikes: Number
    },
    liked: Boolean,
    disliked: Boolean
}, {collection: 'tuits'});
export default schema;