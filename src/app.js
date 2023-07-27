import  express  from 'express';
import albumsRoutes from './routes/albums.routes.js'
import indexRoutes from './routes/index.routes.js'

import  cors from "cors";

const app = express();
app.use(cors({
    origin: '*'
}));
app.use(cors({
    methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH']
}));

app.use(express.json('dev'))

app.use(indexRoutes);
app.use('/api',albumsRoutes);



app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.status(404).json({
        message: 'No encontrado'
    })
})




export default app