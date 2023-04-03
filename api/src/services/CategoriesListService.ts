import { ICategoriesModel, Category } from '../models/ICategoriesModel';

class CategoriesListService {
  private categoriesModel: ICategoriesModel;

  constructor(categoriesModel: ICategoriesModel) {
    this.categoriesModel = categoriesModel;
  }

  public async getAll(): Promise<Category[]> {
    return await this.categoriesModel.getAll();
  }
}

export default CategoriesListService;