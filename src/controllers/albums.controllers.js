import {pool} from '../db.js';

export const getAlbums = async(req, res) => {
    try{
        const [rows] = await pool.query("SELECT * FROM album")
        res.json(rows)
    }catch(error){
        return res.status(500).json({
            message: 'error al conectar'
        })
    }
}

export const getAlbum = async(req, res) => {
    try{
        const [rows] = await pool.query('SELECT * FROM album WHERE id = ? ',[req.params.id])

        if(rows.length <= 0) return res.status(404).json({message:'Album no encontrado'})

        res.json(rows[0])
    }catch(error){
        return res.status(500).json({
            message: 'error al conectar'
        })
    }
    
}

export const createAlbums = async (req, res) => {

    try{
        const { nombre, artista, year, imagen }  = req.body;
        const [rows] = await pool.query (
            'INSERT INTO album (`nombre`, `artista`, `year`, `imagen`) values(?, ? ,? ,?)',
            [ nombre, artista, year, imagen]
        )
        
        res.send({
            id: rows.insertId,
            nombre,
            artista,
            year,
            imagen
        });
    }catch(error){
        return res.status(500).json({
            message: 'error al conectar'
        })
    }
    
}

export const updateAlbums = async (req, res) => {
    const {id} = req.params
    const { nombre, artista, year, imagen }  = req.body
    try{
        const [result] = await pool.query(
            'UPDATE album SET `nombre` = IFNULL(?, nombre),`artista` = IFNULL(?, artista),`year` = IFNULL(?, year),`imagen` = IFNULL(?, imagen) WHERE `id` = ? ',
            [nombre, artista, year, imagen, id]
        )
        if (result.affectedRows === 0) {
            return res.status(404).json({message: 'Album no encontrado'})
        }

        const [ rows ] =  await pool.query('SELECT * FROM album WHERE id = ? ',[id])
        res.json(rows[0])
    }catch(error){
        return res.status(500).json({
            message: 'error al conectar'
        })
    }
    
};

export const deleteAlbums = async(req, res) => {
    try{
        const [result] = await pool.query('DELETE FROM album WHERE id = ? ',[req.params.id])

        if (result.affectedRows <= 0) { return res.status(404).json({message:'Album no encontrado'})}
        else{res.sendStatus(204)}
    
    }catch(error){
        return res.status(500).json({
            message: 'error al conectar'
        })
    }
   
    
};


 