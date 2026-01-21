import { IProduct } from "../model/interface/product.interface";
import Product from "../model/product.model";
import { BaseRepository } from "./base.repository";
import { injectable } from "tsyringe";

@injectable()
export class ProductRepository extends BaseRepository<IProduct> {
  constructor() {
    super(Product);
  }
}
