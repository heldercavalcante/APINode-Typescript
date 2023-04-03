import { ICategoriesModel, Category } from '../models/ICategoriesModel';

class CategoryGetService {
  private categoriesModel: ICategoriesModel;

  constructor(categoriesModel: ICategoriesModel) {
    this.categoriesModel = categoriesModel;
  }

  public async getById(id: number): Promise<Category[]> {
    return await this.categoriesModel.getById(id);
  }
}

export default CategoryGetService;