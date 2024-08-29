import mongoose, { Document, Schema } from 'mongoose';

interface IBook extends Document {
  title: string;
  author: string;
  publicationDate: Date;
  isbn: string;
  genre: string;
}

const BookSchema: Schema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  publicationDate: { type: Date, required: true },
  isbn: { type: String, required: true },
  genre: { type: String, required: true },
});

export default mongoose.model<IBook>('Book', BookSchema);
