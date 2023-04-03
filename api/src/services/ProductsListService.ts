import { IProductsModel, Product } from '../models/IProductsModel';

class ProductsListService {
  private productsModel: IProductsModel;

  constructor(productsModel: IProductsModel) {
    this.productsModel = productsModel;
  }

  public async getAll(): Promise<Product[]> {
    return await this.productsModel.getAll();
  }
}

export default ProductsListService;