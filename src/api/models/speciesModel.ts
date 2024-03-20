// speciesModel.ts
import CustomError from '../../classes/CustomError';
import promisePool from '../../database/db';
import {Species} from '../../types/DBTypes';
import {RowDataPacket} from 'mysql2';

const getAllSpecies = async () => {
  const [rows] = await promisePool.execute<RowDataPacket[] & Species[]>(
    'SELECT * FROM species'
  );
  if (!rows) {
    throw new Error('No species found');
  }
  return rows as Species[];
};

const getSpeciesById = async (id: number) => {
  const sql = promisePool.format(
    'SELECT * FROM species WHERE species_id = ?',
    [id]
  );
  console.log(sql);
  const [rows] = await promisePool.execute<RowDataPacket[] & Species[]>(sql);
  if (rows.length == 0) {
    throw new CustomError('No species found', 404);
  }
  return rows[0] as Species;
};

export {getAllSpecies, getSpeciesById};
