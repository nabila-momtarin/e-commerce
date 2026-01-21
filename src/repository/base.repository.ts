import { Model } from "mongoose";

export class BaseRepository<T> {
  private model: Model<T>;

  constructor(model: Model<T>) {
    this.model = model;
  }

  async createProduct(data: Partial<T>): Promise<T> {
    const createData = data;
    console.log(`data in REPOSITORY : ${data}`);

    const result = await this.model.create(createData);
    console.log(`result in REPOSITORY : ${result}`);
    return result;
  }

  async getAll(): Promise<T[]> {
    const result = await this.model.find();
    console.log(`result in REPOSITORY : ${result}`);
    return result;
  }
}
