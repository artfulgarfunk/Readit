import mongoose from 'mongoose';

// way of defining the model
const { Schema } = mongoose;

mongoose.Promise = global.Promise;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    minlength: [6, 'username isnt long enough'],
  },
  password: {
    type: String,
    required: true,
    minlength: [6, 'password isnt long enough'],
  },
  createdAt: { type: Date, default: Date.now },
  isDeleted: { type: Boolean, default: false },
});

const User = mongoose.model('User', userSchema);
export default User;
