import axios from 'axios';
import { Request, Response } from 'express';
import logger from './logger';

const getAdress = async (req: Request, res: Response) => {
    if ((Math.random() * 10) > 5) {
      logger.add(new Error(`Error aleatório ${(Math.random() * 100000).toFixed()}`));
      return res.status(400).json();
    }

    return await axios.get(`http://viacep.com.br/ws/${req.params.cep}/json/`)
      .then(result => {
        console.log('Sucesso');
        res.status(200).json(result.data);
      })
      .catch(err => {
        logger.add(err);
        return res.status(400).json();
      });
}

export default getAdress;
