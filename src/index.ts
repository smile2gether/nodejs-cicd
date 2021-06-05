import chalk from 'chalk';
import { app } from './app';

const server = app.listen(app.get('port'), app.get('host'), () => {
    console.log(`${chalk.green('(✓)')} App is running at http://${app.get('host')}:${app.get('port')} in ${app.get('env')} mode'`);
    console.log('  Press CTRL-C to stop\n');
    console.log('App is running');
});
