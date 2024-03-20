// animalModel.ts
import promisePool from '../../database/db';
import {Animal} from '../../types/DBTypes';
import {RowDataPacket} from 'mysql2';

const getAllAnimals = async () => {
  const [rows] = await promisePool.execute<RowDataPacket[] & Animal[]>(
    'SELECT * FROM animals'
  );
  if (!rows) {
    throw new Error('No animal found');
  }
  return rows as Animal[];
};

export {getAllAnimals};
