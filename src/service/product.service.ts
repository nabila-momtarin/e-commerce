import Product from "../model/product.model";
import { IProduct } from "../model/interface/product.interface";

export const addProduct = async (product: IProduct) => {
  try {
    console.log("Entered in PRODUCT SERVICE");

    const newProduct = await Product.create(product);
    console.log("newProduct: ", newProduct);  
    console.log(`newProduct ${newProduct}`);


    return newProduct;
  } catch (err) {
    console.log("Error in PRODUCT SERVICE: ", err);
    throw err;
  }
};
