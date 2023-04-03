import { IProductsModel, Product } from './IProductsModel';
import { Pool } from 'mysql2/promise';


class ProductsModel implements IProductsModel {

  private con: Pool;

  constructor(con: Pool) {
    this.con = con;
  }
  
  async getAll(): Promise<Product[]> {
    const sql = `SELECT pro_id,cat_name,pro_name,pro_price,pro_description FROM products 
                  inner join categories on categories.id = products.pro_cat_id`;
    const [rows] = await this.con.execute(sql);
    return rows as Product[];
  }

  async create(product: Product): Promise<any> {
    const query = 'INSERT INTO products(pro_cat_id, pro_name, pro_price, pro_description) VALUES (?, ?, ?, ?)';
    const [createdProduct] = await this.con.execute(query, 
      [product.pro_cat_id,product.pro_name,product.pro_price,product.pro_description]);
    return createdProduct;
  }

  async delete(id: number): Promise<any> {
    await this.con.execute('DELETE FROM products WHERE pro_id = ?', [id]);
  }

  async update(id: number, product: Product): Promise<any> {
    const query = 'UPDATE products SET pro_cat_id = ?, pro_name = ?, pro_price = ?, pro_description = ? WHERE pro_id = ?';
    const [updatedProduct] = await this.con.execute(query, 
      [product.pro_cat_id, product.pro_name, product.pro_price, product.pro_description, id]);
    return updatedProduct;
  }

  async getById(id: number): Promise<Product[]> {
    const sql = `SELECT cat_name,pro_name,pro_price,pro_description FROM products 
                  inner join categories on categories.id = products.pro_cat_id 
                  WHERE pro_id = ?`;
    const [product] = await this.con.execute(sql, [id]);
    return product as Product[];
  }
}

export default ProductsModel;