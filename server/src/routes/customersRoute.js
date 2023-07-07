import express from 'express';
import knex from 'knex';
import config from '../knexfile.js';

const db = knex(config);
const router = express.Router();

router.get('/', (req, res) => {
  db('customers')
    .select('*')
    .then(customers => {
      res.json(customers);
    });
});

export default router;
