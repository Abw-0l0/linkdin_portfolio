import mongoose from 'mongoose';

const sampleSchema = mongoose.Schema({
  message: {
    type: String,
  },
});

export default mongoose.model('sampleModel', sampleSchema);