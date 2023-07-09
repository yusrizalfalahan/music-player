import Music from "../models/musicModel.js";




export const getMusic = async (req, res) => {
    try {
        const musics = await Music.findAll();
        res.render('index', {
            data: musics,
            title: "Music Player"
        });
    } catch (error) {
        console.error(error);
    }
}


export const showCreate = async (req, res) => {

    res.render('create', {

    });

}

export const createMusic = async (req, res) => {
    try {
        const create = {
            ArtistName: req.body.ArtistName,
            PackageName: req.body.PackageName,
            ImageURL: req.body.ImageURL,
            ReleaseDate: req.body.ReleaseDate,
            SampleURL: req.body.SampleURL,
            Price: req.body.Price
        }
        console.log(create)
        await Music.create(create).then(() => {

            res.redirect('/')
        })

    } catch (error) {
        res.status(201).json({
            error: error.message
        });
    }
}


export const showId = async (req, res) => {

    await Music.findByPk(req.params.id).then(music => {
        if (!music) {
            res.render('update', {
                data: id
            })
            return res.status(404).send({
                message: 'Music Not Found'
            })
        }
    })

}

export const updateMusic = async (req, res) => {
    try {
        await Music.update({
            where: {
                id: req.params.id
            }
        })
        const update = {
            ArtistName: req.body.ArtistName || updateMusic.ArtistName,
            PackageName: req.body.PackageName || updateMusic.PackageName,
            ImageURL: req.body.ImageURL || updateMusic.ImageURL,
            ReleaseDate: req.body.ReleaseDate || updateMusic.ReleaseDate,
            SampleURL: req.body.SampleURL || updateMusic.SampleURL,
            Price: req.body.Price || updateMusic.Price
        }
        console.log(update)
        await Music.update(update).then(() => {

                res.redirect('/')
            })
            .then(() => res.status(200).send(update))
    } catch (error) {
        res.status(202).json({
            error: error.message
        })
    }
}

export const deleteMusic = async (req, res) => {
    try {
        await Music.destroy({
            where: {
                id: req.params.id
            }
        });
        res.status(200).json({
            msg: "Music Deleted"
        });
    } catch (error) {
        console.log(error.message);
    }
}