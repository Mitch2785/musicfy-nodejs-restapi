import  express  from 'express';
import albumsRoutes from './routes/albums.routes.js'
import indexRoutes from './routes/index.routes.js'
import {PORT} from'./config.js'

const app = express();

app.use(express.json())

app.use(indexRoutes);
app.use('/api',albumsRoutes);
app.use((req, res, next) => {
    res.status(404).json({
        message: 'No encontrado'
    })
})

export default app