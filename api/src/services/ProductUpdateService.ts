import { IProductsModel, Product } from '../models/IProductsModel';

class ProductUpdateService {
  private productsModel: IProductsModel;

  constructor(productsModel: IProductsModel) {
    this.productsModel = productsModel;
  }

  public async update(id: number, product: Product): Promise<any> {
    if (!product.pro_cat_id) {
      throw new Error("the field pro_cat_id is required");
    }
    if (!product.pro_name) {
      throw new Error("the field pro_name is required");
    }
    if (!product.pro_price) {
      throw new Error("the field pro_price is required");
    }
    if (!product.pro_description) {
      throw new Error("the field pro_description is required");
    }

    return await this.productsModel.update(id, product);
  }
}

export default ProductUpdateService;