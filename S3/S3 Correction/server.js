import express from 'express'; //ekma js
import UserRouter from './Routes/Users.route.js';
import GameRouter from './Routes/Games.route.js';
import AchatRouter from './Routes/Achats.route.js';


const app = express();

const hostname = '127.0.0.1';
const port = process.env.port || 3000;

app.use(express.json())
app.use('/user',UserRouter)
app.use('/game',GameRouter)
app.use('/achat',AchatRouter)

app.listen(port, hostname, () => {
    console.log(`Server running at https://${hostname}:${port}/`);
});