import express, {Express, Request, Response} from "express";
import mongoose from "mongoose";
import customerController from "./controllers/customerController";
import deviceController from "./controllers/deviceController";
import usageController from "./controllers/usageController";


const app: Express = express();
app.use(express.json());

mongoose.connect("mongodb+srv://ronaldandero:oR2k0mlnerzHkjsJ@tsorm.swtx3xo.mongodb.net/test");
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})

app.get('/', (req: Request, res: Response) => {
    res.send('Express + TypeScript Server');
});

app.use('/customer', customerController);
app.use('/device', deviceController);
app.use('/usage', usageController);


app.listen(8888, () => {
    console.log(`[server]: Server is running at http://localhost:8888`);
});