
export interface ICategoriesModel {
  getAll(): Promise<Category[]>;
  create(category: Category): Promise<any>;
  delete(id: number): Promise<any>;
  update(id: number, category: Category): Promise<any>;
  getById(id: number): Promise<Category[]>;
}

export interface Category {
  id: number;
  cat_name: string
}