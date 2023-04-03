import { IProductsModel } from '../models/IProductsModel';

class ProductDeleteService {
  private productsModel: IProductsModel;

  constructor(productsModel: IProductsModel) {
    this.productsModel = productsModel;
  }

  public async delete(id: number): Promise<any> {
    return await this.productsModel.delete(id);
  }
}

export default ProductDeleteService;