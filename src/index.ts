import debug, { IDebugger } from 'debug';
import winstonLogger from 'winston';
import * as http from 'http';
import app, { routes } from "./app";
import { CommonRoutesConfig } from './common/routes/common.routes.config';

const debugLog: IDebugger = debug('app');

const port = process.env.PORT || 5000;
const server: http.Server = http.createServer(app);

server.listen(port, () => {
  routes.forEach((route: CommonRoutesConfig) => {
    debugLog(`Routes configured for ${route.getName()}`);
  });
  winstonLogger.debug(`Server running at http://localhost:${port}`);
});