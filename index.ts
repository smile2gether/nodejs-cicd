import express from 'express';
const chalk = require('chalk');

/**
 * Create Express server.
 */
const app = express();

app.get('/', (req, res) => res.status(200).json('Test')); // testing route

/**
 * Express configuration.
 */
app.set('host', process.env.HOST || '0.0.0.0');
app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), app.get('host'), () => {
    console.log(`${chalk.green('(✓)')} App is running at http://${app.get('host')}:${app.get('port')} in ${app.get('env')} mode'`);
    console.log('Press CTRL-C to stop\n');
    console.log('App is running');

    console.log('\n\nHello typescript !')
});
