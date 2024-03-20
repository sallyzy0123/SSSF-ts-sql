// animalModel.ts
import CustomError from '../../classes/CustomError';
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

const getAnimalById = async (id: number) => {
  const sql = promisePool.format(
    'SELECT * FROM animals WHERE animal_id = ?',
    [id]
  );
  console.log(sql);
  const [rows] = await promisePool.execute<RowDataPacket[] & Animal[]>(sql);
  if (rows.length === 0) {
    throw new CustomError('No categories found', 404);
  }
  return rows[0] as Animal;
};

export {getAllAnimals, getAnimalById};
