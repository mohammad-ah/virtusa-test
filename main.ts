import * as http from 'http';
import App from './app';
import * as dotenv from "dotenv";

// initialize configuration
dotenv.config();

// port is now available to the Node.js runtime
// as if it were an environment variable
const port = process.env.SERVER_PORT;


App.set('port', port);

//create a server and pass our Express app to it.
const server = http.createServer(App);
server.listen(port);
server.on('listening', onListening);

//function to note that Express is listening
function onListening(): void {
    console.log(`Listening on port `+port);
}
