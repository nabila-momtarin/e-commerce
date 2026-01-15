import { model, Schema } from "mongoose";
import { IProduct } from "./interface/product.interface";

const productSchema = new Schema<IProduct>({
    name: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    price: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        required: false
    },
  isDeleted: { type: Boolean, default: false }
});

 const Product = model("Product", productSchema);
 export default Product;