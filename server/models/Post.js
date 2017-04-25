import mongoose from 'mongoose';

// way of defining the model
const { Schema } = mongoose;

mongoose.Promise = global.Promise;

const postSchema = new Schema({
  title: { type: String, required: true },
  link: String,
  text: String,
  isDeleted: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
  _creator: { type: Schema.ObjectId, ref: 'User'},
  // now has direct reference to user
});

const Post = mongoose.model('Post', postSchema);
export default Post;
