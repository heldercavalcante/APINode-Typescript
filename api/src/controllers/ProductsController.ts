import { Request, Response } from 'express';
import ProductsModel from '../models/ProductsModel';
import ProductsListService from '../services/ProductsListService';
import ProductCreateService from '../services/ProductCreateService';
import ProductDeleteService from '../services/ProductDeleteService';
import ProductUpdateService from '../services/ProductUpdateService';
import ProductGetService from '../services/ProductGetService';
import connection from '../DB/connection';

class ProductsController {

  public async getAll(request: Request, response: Response): Promise<Response> {
    const productsModel = new ProductsModel(connection);
    const productsListService = new ProductsListService(productsModel);
    try {

      const data = await productsListService.getAll();
      return response.status(200).json(data);

    } catch (error: unknown) {

      return response.status(500).json('Error: ' + (error as Error).message);
    }
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const productsModel = new ProductsModel(connection);
    const productCreateService = new ProductCreateService(productsModel);

    try {

      const createdProduct = await productCreateService.create(request.body);
      return response.status(200).json('Created with success with id: ' + createdProduct.insertId);

    } catch (error: unknown) {
      return response.status(500).json('Error: ' + (error as Error).message);
    }
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const productsModel = new ProductsModel(connection);
    const productDeleteService = new ProductDeleteService(productsModel);
    const { id } = request.params;

    try {

      await productDeleteService.delete(parseInt(id,10));

    } catch (error: unknown) {
      
      return response.status(500).json('Error: ' + (error as Error).message);
    }
    return response.status(200).json('Deleted with success with');
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const productsModel = new ProductsModel(connection);
    const productUpdateService = new ProductUpdateService(productsModel);
    const { id } = request.params;

    try {

      await productUpdateService.update(parseInt(id,10),request.body);

    } catch (error) {

      return response.status(500).json('Error: ' + (error as Error).message);
    }

    return response.status(200).json('Updated with success with id: ' + id);
  }

  public async getById(request: Request, response: Response): Promise<Response> {
    const productsModel = new ProductsModel(connection);
    const productGetService = new ProductGetService(productsModel);
    const { id } = request.params;

    try {

      const product = await productGetService.getById(parseInt(id,10));
      return response.status(200).json(product);

    } catch (error) {

      return response.status(500).json('Error: ' + (error as Error).message);
    }
  }
}

export default ProductsController;