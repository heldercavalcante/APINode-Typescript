import { ICategoriesModel, Category } from '../models/ICategoriesModel';

class CategoryUpdateService {
  private categoriesModel: ICategoriesModel;

  constructor(categoriesModel: ICategoriesModel) {
    this.categoriesModel = categoriesModel;
  }

  public async update(id: number, category: Category): Promise<any> {
    if (!category.cat_name) {
      throw new Error("the field cat_name is required");
    }

    return await this.categoriesModel.update(id, category);
  }
}

export default CategoryUpdateService;