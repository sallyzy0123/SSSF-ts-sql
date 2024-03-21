import {Request, Response, NextFunction} from 'express';
import {getAllCategories, getCategoryById, postCategory} from '../models/categoryModel';
import {Category} from '../../types/DBTypes';
import {MessageResponse} from '../../types/MessageTypes';

const categoryListGet = async (
  req: Request,
  res: Response<Category[]>,
  next: NextFunction
) => {
  try {
    const categories = await getAllCategories();
    res.json(categories);
  } catch (error) {
    next(error);
  }
};

const categoryGet = async (
  req: Request<{id: string}, {}, {}>,
  res: Response<Category>,
  next: NextFunction
) => {
  try {
    const id = Number(req.params.id);
    const category = await getCategoryById(id);
    res.json(category);
  } catch (error) {
    next(error);
  }
};

const categoryPost = async (
  req: Request<{}, {}, Pick<Category, 'category_name'>>,
  res: Response<MessageResponse>,
  next: NextFunction) => {
    try {
      const result = await postCategory(req.body)
      res.json(result);
    } catch (error) {
      next(error);
    }
  };

export {categoryListGet, categoryGet, categoryPost};
