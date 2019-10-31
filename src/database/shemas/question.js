import mongoose from 'mongoose';

const questionSchema = new mongoose.Schema({
  title: {
    type: String,
    unique: true,
    required: true
  },
  qstnbody: {
    type: String,
    required: true
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },
  tags: {
    type: Array
  },
  createdDate: {
    type: Date,
    default: Date.now
  }
});

const Question = new mongoose.model('Question', questionSchema);
export default Question;
