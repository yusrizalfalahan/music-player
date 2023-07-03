import Music from "../models/musicModel.js";


export const getMusic = async(req, res) =>{
    try {
        const response = await Music.findAll();
        musicModel.getMusic((result) =>{
            res.render('index', {data: res})
        })
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
        
    }
    
}

export const getMusicById = async(req, res) =>{
    try {
        const response = await Music.findOne({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const createMusic = async(req, res) =>{
    try {
        await Music.create(req.body);
        res.status(201).json({msg: "Music Created"});
    } catch (error) {
        console.log(error.message);
    }
}

export const updateMusic = async(req, res) =>{
    try {
        await Music.update(req.body,{
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Music Updated"});
    } catch (error) {
        console.log(error.message);
    }
}

export const deleteMusic = async(req, res) =>{
    try {
        await Music.destroy({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Music Deleted"});
    } catch (error) {
        console.log(error.message);
    }
}
