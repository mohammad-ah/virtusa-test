import * as express from 'express';
import { parserRouter as parserRouterV1 } from './api/v1/routes/parse';
import { parserRouter as parserRouterV2} from './api/v2/routes/parse';
import expressApiVersioning from 'express-api-versioning';
const path = require('path');
const bodyParser = require('body-parser');

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

// Create and configure an ExpressJS web server.
class App {
    // ref to Express instance
    public express: express.Application;
    //Run configuration methods on the Express instance.
    constructor() {
        this.express = express();
        this.middleware();
        this.routes();
    }

    // Configure Express middleware.
    private middleware(): void {
        // configure bodyParser middleware
        this.express.use(bodyParser.urlencoded());
        this.express.use(bodyParser.json());
    }

    // Configure API endpoints.
    private routes(): void {
        let router = express.Router();

        /**
         * Routing
         */
        // the swagger API endpoint
        this.express.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

        // using expressApiVersioning to do the versioning routing
        const config = {
            apiPath: path.join(__dirname, './api'),
            test: /\/api\/(v[0-9]+).*/,
            entryPoint: 'index.ts',
            instance: this.express
        };
        this.express.use(expressApiVersioning(config, (error, req, res, next) => {
            next();
        }));

        // use the versions of routes that we have
        this.express.use('/', parserRouterV1);
        this.express.use('/', parserRouterV2);

        // default route
        this.express.use('/', router);
    }
}
export default new App().express;
