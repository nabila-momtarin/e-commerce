import Product from "../model/product.model";
import { addProduct } from "../service/product.service";
import { Request, Response } from "express";

export const createProductController = async (req: Request, res: Response) => {
  try {
    console.log("Entered in PRODUCT CONTROLLER");
    console.log("\n\n\n\n\n");
    console.log(req.body);
    console.log("\n\n\n\n\n");
    const newProductC = await addProduct(req.body);

    return res.json({
      status: 200,
      message: "Product created successfully",
      data: newProductC,
    });
  } catch (err: any) {
    console.log("Error in PRODUCT SERVICE: ", err);
    return res.status(500).json({
      status: 500,
      message: "Error creating product",
      error: err.message,
    });
  }
};
