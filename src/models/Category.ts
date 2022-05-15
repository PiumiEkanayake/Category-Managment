import { ICategory } from "../interfaces/ICategory.js";
import mongoose from "mongoose";
import mongooseAutoPopulate from "mongoose-autopopulate";

const Schema = mongoose.Schema;
const productConn = await mongoose.createConnection("mongodb+srv://admin:admin2233@cluster0.pkbpj.mongodb.net/Cluster0?retryWrites=true&w=majority");
const productSchema = new Schema({});
const Product = productConn.model("products", productSchema);
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
  products: [
    {
      type: Schema.Types.ObjectId,
      required: false,
      ref: Product,
      autopopulate: true,
    },
  ],
  image: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    default: "active",
  },
});
CategorySchema.plugin(mongooseAutoPopulate);

export default mongoose.model<ICategory & mongoose.Document>("categories", CategorySchema);
