import { ICategoriesModel, Category } from '../models/ICategoriesModel';

class CategoryCreateService {
  private categoriesModel: ICategoriesModel;

  constructor(categoriesModel: ICategoriesModel) {
    this.categoriesModel = categoriesModel;
  }

  public async create(category: Category): Promise<any> {
    if (!category.cat_name) {
      throw new Error("the field cat_name is required");
    }

    return await this.categoriesModel.create(category);
  }
}

export default CategoryCreateService;