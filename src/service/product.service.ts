import { IProduct } from "../model/interface/product.interface";
import { Model } from "mongoose";
import Product from "../model/product.model";

export class ProductService {
  constructor() {}

  async createProduct(data: Partial<IProduct>) {
    const product = await Product.create(data);
    return product;
  }
}

//roductModel: Model<IProduct>: যখন আপনি ডাটাবেস লাইব্রেরির
// (যেমন Mongoose) Model টাইপ ব্যবহার করেন,
// তখন টাইপস্ক্রিপ্ট বুঝতে পারে যে এই অবজেক্টটির ভেতরে
// .create(), .find(), .delete() মেথডগুলো আছে।
