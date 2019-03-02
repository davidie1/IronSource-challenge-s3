import express from 'express';
import {Server} from 'http';
import { API } from './entry-ponits/api';


const app = express();
const server = new Server(app);

app.set('port', process.env.PORT || 8080);

new API(app);

/**
 * Start Express server.
 */
server.listen(app.get('port'), () => {
    console.log('App is running at 127.0.0.1:%s', app.get('port'));
});


  
