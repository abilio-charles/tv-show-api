import mongoose, { Document, Schema } from 'mongoose';

export interface IShow extends Document {
  title: string;
  premiere: Date;
  isRunning?: boolean;
  language: string;
  mainGenre: string;
  posterUrl?: string;
}

const ShowSchema: Schema = new Schema({
  title: { type: String, required: true },
  premiere: { type: Date, required: true },
  isRunning: Boolean,
  language: { type: String, required: true },
  mainGenre: { type: String, required: true },
  posterUrl: String
});

export default mongoose.model<IShow>('Show', ShowSchema);
