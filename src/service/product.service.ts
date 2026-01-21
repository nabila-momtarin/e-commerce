import { IProduct } from "../model/interface/product.interface";
import { ProductRepository } from "../repository/product.repository";
import { injectable } from "tsyringe";

@injectable()
export class ProductService {
//   private productRepository: ProductRepository;
  constructor(private productRepository: ProductRepository) {
    // this.productRepository = new ProductRepository();
  }

  async createProduct(data: Partial<IProduct>) {
    const product = await this.productRepository.createProduct(data);
    return product;
  }
}

//roductModel: Model<IProduct>: যখন আপনি ডাটাবেস লাইব্রেরির
// (যেমন Mongoose) Model টাইপ ব্যবহার করেন,
// তখন টাইপস্ক্রিপ্ট বুঝতে পারে যে এই অবজেক্টটির ভেতরে
// .create(), .find(), .delete() মেথডগুলো আছে।
