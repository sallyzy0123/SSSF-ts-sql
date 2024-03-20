// animalController.ts
import {Request, Response, NextFunction} from 'express';
import {getAllAnimals} from '../models/animalModel';
import {Animal} from '../../types/DBTypes';

const animalListGet = async (
  req: Request,
  res: Response<Animal[]>,
  next: NextFunction
) => {
  try {
    const animals = await getAllAnimals();
    res.json(animals);
  } catch (error) {
    next(error);
  }
};

export {animalListGet};
