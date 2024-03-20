// speciesController.ts
import {Request, Response, NextFunction} from 'express';
import {getAllSpecies} from '../models/speciesModel';
import {Species} from '../../types/DBTypes';

const speciesListGet = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const species = await getAllSpecies();
    res.json(species);
  } catch (error) {
    next(error);
  }
};

export {speciesListGet};
