import cors from 'cors';
import express, { Application } from 'express';

const app: Application = express();

// parser 
app.use(express.json())
app.use(cors())

// application routes

app.get('/', (req, res) => {
    res.send('Welcome to L-2 Assignmet-3')
})

export default app;