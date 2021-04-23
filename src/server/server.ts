import * as express from 'express';
import * as morgan from 'morgan';
import routes from './routes';
import { CLIENT_ROUTES, clientHandler } from './middlewares/client-handlers';
import { globalErrors, notFoundHandler } from './middlewares/error-handlers';

const app = express();

app.use(express.static('public'));
app.use(morgan('dev'));
app.use(express.json());
app.use('/api', routes);
app.get(CLIENT_ROUTES, clientHandler);

// catch, handle, and forward any 404 errors
app.use(notFoundHandler);

// global error handler
app.use(globalErrors);


const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on port: ${port}`));