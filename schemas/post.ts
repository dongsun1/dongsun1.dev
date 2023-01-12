import { models, model, Schema } from 'mongoose';

const postsSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
});

const Posts = model('Posts', postsSchema);
// const Posts = models.Posts || model('Posts', postsSchema);

export default Posts;
