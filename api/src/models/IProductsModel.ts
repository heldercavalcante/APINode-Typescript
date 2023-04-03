
export interface IProductsModel {
  getAll(): Promise<Product[]>;
  create(product: Product): Promise<any>;
  delete(id: number): Promise<any>;
  update(id: number, product: Product): Promise<any>;
  getById(id: number): Promise<Product[]>;
}

export interface Product {
  pro_id: number;
  pro_cat_id: number;
  pro_name: string;
  pro_price: number;
  pro_description: string;
}