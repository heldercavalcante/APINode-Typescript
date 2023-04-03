import { Request, Response } from 'express';
import CategoriesModel from '../models/CategoriesModel';
import CategoriesListService from '../services/CategoriesListService';
import CategoryCreateService from '../services/CategoryCreateService';
import CategoryDeleteService from '../services/CategoryDeleteService';
import CategoryUpdateService from '../services/CategoryUpdateService';
import CategoryGetService from '../services/CategoryGetService';
import connection from '../DB/connection';

class CategoriesController {

  public async getAll(request: Request, response: Response): Promise<Response> {
    const categoriesModel = new CategoriesModel(connection);
    const categoriesListService = new CategoriesListService(categoriesModel);
    try {

      const data = await categoriesListService.getAll();
      return response.status(200).json(data);

    } catch (error: unknown) {

      return response.status(500).json('Error: ' + (error as Error).message);
    }
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const categoriesModel = new CategoriesModel(connection);
    const categoryCreateService = new CategoryCreateService(categoriesModel);

    try {

      const createdCategory = await categoryCreateService.create(request.body);
      return response.status(200).json('Created with success with id: ' + createdCategory.insertId);

    } catch (error: unknown) {
      return response.status(500).json('Error: ' + (error as Error).message);
    }
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const categoriesModel = new CategoriesModel(connection);
    const categoryDeleteService = new CategoryDeleteService(categoriesModel);
    const { id } = request.params;

    try {

      await categoryDeleteService.delete(parseInt(id,10));

    } catch (error: unknown) {
      
      return response.status(500).json('Error: ' + (error as Error).message);
    }
    return response.status(200).json('Deleted with success with');
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const categoriesModel = new CategoriesModel(connection);
    const categoryUpdateService = new CategoryUpdateService(categoriesModel);
    const { id } = request.params;

    try {

      await categoryUpdateService.update(parseInt(id,10),request.body);

    } catch (error) {

      return response.status(500).json('Error: ' + (error as Error).message);
    }

    return response.status(200).json('Updated with success with id: ' + id);
  }

  public async getById(request: Request, response: Response): Promise<Response> {
    const categoriesModel = new CategoriesModel(connection);
    const categoryGetService = new CategoryGetService(categoriesModel);
    const { id } = request.params;

    try {

      const category = await categoryGetService.getById(parseInt(id,10));
      return response.status(200).json(category);

    } catch (error) {

      return response.status(500).json('Error: ' + (error as Error).message);
    }
  }
}

export default CategoriesController;