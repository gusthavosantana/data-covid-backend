require('dotenv').config();

import * as expressWinston from 'express-winston';
import loggerOptions from './infra/logger/config';
import { VacinaRoutes } from './vacina/routes/vacina.routes.config';
import { Application, Request, Response } from 'express';
import { sequelize } from './infra/database/sequelize';
import { CasosRoutes } from './casos/routes/casos.routes.config';
import { RangesMapaRoutes } from './ranges-mapa/routes/ranges-mapa.routes.config';

import express = require('express');
import cors = require('cors');

const app: Application = express();

app.use(express.json());
app.use(cors());
app.use(expressWinston.logger(loggerOptions));

sequelize.authenticate();

export const routes = [];
routes.push(new VacinaRoutes(app));
routes.push(new CasosRoutes(app));
routes.push(new RangesMapaRoutes(app));

app.get('/', (req: Request, res: Response) => {
  res.status(200).send('Server is running.');
});

export default app;
