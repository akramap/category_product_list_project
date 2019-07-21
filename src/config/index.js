import express from 'express';
import bodyParser from 'body-parser';
import routes from '../../route';

const app = express()
app.use(express.static('src/app'))
// parse body params and attach them to req.body
app.use(bodyParser.json());

// mount all routes on /api path
app.use('/api', routes);


export default app;