import {parserRouter} from './routes/parse';

export default (app) => {
    // bootstrap api routes
    app.use('/api/v1', parserRouter);
};
