import Music from "../models/musicModel.js";

// index all data
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

// form create
export const showCreate = async (req, res) => {

    res.render('create', {

    });

}

// create
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

// form update
export const showId = async (req, res) => {
    try {
        const musicId = await Music.findByPk(req.params.id)
        res.render('update', {
            musicId
        })
    } catch (err) {
        console.error(err)
        res.status(404).send('Music Not Found')

    }
}
//update
export const updateMusic = async (req, res) => {
    try {
        const {
            ArtistName,
            PackageName,
            ImageURL,
            ReleaseDate,
            SampleURL,
            Price
        } = req.body;

        await Music.update({
            ArtistName,
            PackageName,
            ImageURL,
            ReleaseDate,
            SampleURL,
            Price
        }, {
            where: {
                id: req.params.id
            }
        }).then(() => {

            res.redirect('/')

        })

    } catch (err) {
        console.error(err)
        res.status(202).send('Not Update Data')
    }
}

//delete
export const deleteMusic = async (req, res) => {
    try {
        await Music.destroy({
            where: {
                id: req.params.id
            }
        }).then(() => {

            res.redirect('/')
        })

    } catch (error) {
        console.log(error.message);
    }
}