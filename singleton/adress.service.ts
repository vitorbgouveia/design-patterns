import axios from 'axios';
import { Request, Response } from 'express';
import logger from './logger';

const getAdrres = async (req: Request, res: Response) => {
    if ((Math.random() * 10) > 5) {
      return logger.add(new Error(`Error aleatório ${(Math.random() * 100000).toFixed()}`).message);
    }

    return await axios.get(`http://viacep.com.br/ws/${req.params.cep}/json/`)
      .then(result => {
        console.log('Sucesso');
        res.status(200).json(result.data);
      })
      .catch(err => logger.add(err.message));
}

export default getAdrres;
