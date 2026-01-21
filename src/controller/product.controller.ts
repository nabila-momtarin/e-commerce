import { Request, Response } from "express";
import { ProductService } from "../service/product.service";
import { injectable } from "tsyringe";

@injectable()
export class ProductController {
  // private productService: ProductService;
  constructor(private productService: ProductService) {
    // this.productService = new ProductService();
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
