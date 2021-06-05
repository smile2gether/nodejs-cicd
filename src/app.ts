import express from 'express';
import * as bodyParser from 'body-parser';

/**
 * Create Express server.
 */
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(bodyParser.json({
    limit: '50mb',
    verify(req: any, res, buf, encoding) {
        req.rawBody = buf;
    }
}));
app.get('/', (req, res) => res.status(200).json('Test')); // testing route


/**
 * Express configuration.
 */
app.set('env', process.env.ENV || 'development');
app.set('host', process.env.HOST || '0.0.0.0');
app.set('port', process.env.PORT || 3000);

export { app };
