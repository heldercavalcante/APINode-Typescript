import { ICategoriesModel } from '../models/ICategoriesModel';

class CategoryDeleteService {
  private categoriesModel: ICategoriesModel;

  constructor(categoriesModel: ICategoriesModel) {
    this.categoriesModel = categoriesModel;
  }

  public async delete(id: number): Promise<any> {
    return await this.categoriesModel.delete(id);
  }
}

export default CategoryDeleteService;