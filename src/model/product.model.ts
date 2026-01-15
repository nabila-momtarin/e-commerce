import { model, Schema } from "mongoose";
import { IProduct } from "./interface/product.interface";

const productSchema = new Schema<IProduct>(
  {
    name: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: false,
    },
    price: {
      type: Number,
      required: true,
    },
    quantity: {
      type: Number,
      required: false,
    },

    isDeleted: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

productSchema.set("toJSON", {
  transform: (doc, ret) => {
    delete (ret as any).__v;
    return ret;
  },
});

const Product = model("Product", productSchema);
export default Product;
