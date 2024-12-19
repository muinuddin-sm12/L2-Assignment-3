import cors from 'cors';
import express, { Application } from 'express';
import router from './app/router';
import notFound from './app/middlewares/notFound';

const app: Application = express();

// parser 
app.use(express.json())
app.use(cors())

// application routes
app.use('/api', router)

app.get('/', (req, res) => {
    res.send('Welcome to L-2 Assignmet-3')
})
// global error handle 


// not found 
app.use(notFound);

export default app;