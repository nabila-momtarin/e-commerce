import { Request, Response } from "express";
// import { IProduct } from "../model/interface/product.interface";
import { ProductService } from "../service/product.service";

export class ProductController {
  private productService: ProductService;
  constructor() {
    this.productService = new ProductService();
  }

  createProduct = async (req: Request, res: Response) => {
    try {
      console.log("Entered in PRODUCT CONTROLLER");

      const data = req.body;

      const product = await this.productService.createProduct(data);
      res.status(201).json(product);
    } catch (err: any) {
      console.log(err);
    }
  };
}
