import Product from "../model/product.model";
import { IProduct } from "../model/interface/product.interface";


export const addProductService = async (product: IProduct) => {
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


export const getAllProduct = async () => {
    try{
        console.log("Entered in PRODUCT CONTROLLER\n");

        const allProduct = await Product.find();

        console.log("allProduct in SERVICE : ", allProduct);
        
        return allProduct;
    }catch(err){
        console.log("Error in PRODUCT SERVICE: ", err);
        throw err;
    }
};