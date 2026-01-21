import { Model } from "mongoose";

export class BaseRepository<T> {

    private model : Model<T>;

    constructor(model: Model<T>) {
        this.model = model; 
    }

    async create(data: Partial<T>): Promise<T> {

        const createData = data;

        const result = await this.model.create(createData);
        return result;
    }
}