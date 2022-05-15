import { ICategory } from "../interfaces/ICategory";
import mongoose from "mongoose";
const Schema = mongoose.Schema;
const CategorySchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: false,
    trim: true,
  },
  products: [{ type: Schema.Types.ObjectId, required: false, ref: "products" }],
  image: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    default: "active",
  },
});
export default mongoose.model<ICategory & mongoose.Document>("category", CategorySchema);
