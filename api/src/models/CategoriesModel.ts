import { ICategoriesModel, Category } from './ICategoriesModel';
import { Pool } from 'mysql2/promise';


class CategoriesModel implements ICategoriesModel {

  private con: Pool;

  constructor(con: Pool) {
    this.con = con;
  }
  
  async getAll(): Promise<Category[]> {
    const [rows] = await this.con.execute('SELECT * FROM categories');
    return rows as Category[];
  }

  async create(category: Category): Promise<any> {
    const query = 'INSERT INTO categories(cat_name) VALUES (?)';
    const [createdCategory] = await this.con.execute(query, [category.cat_name]);
    return createdCategory;
  }

  async delete(id: number): Promise<any> {
    await this.con.execute('DELETE FROM categories WHERE ID = ?', [id]);
  }

  async update(id: number, category: Category): Promise<any> {
    const query = 'UPDATE categories SET cat_name = ? WHERE id = ?';
    const [updatedCategory] = await this.con.execute(query, [category.cat_name, id]);
    return updatedCategory;
  }

  async getById(id: number): Promise<Category[]> {
    const [category] = await this.con.execute('SELECT * FROM categories WHERE id = ?', [id]);
    return category as Category[];
  }
}

export default CategoriesModel;