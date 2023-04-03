import { IProductsModel, Product } from '../models/IProductsModel';

class ProductGetService {
  private productsModel: IProductsModel;

  constructor(productsModel: IProductsModel) {
    this.productsModel = productsModel;
  }

  public async getById(id: number): Promise<Product[]> {
    return await this.productsModel.getById(id);
  }
}

export default ProductGetService;