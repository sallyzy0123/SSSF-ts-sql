// speciesModel.ts
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

export {getAllSpecies};
