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
        const {
            ArtistName,
            PackageName,
            ImageURL,
            ReleaseDate,
            SampleURL,
            Price
        } = req.body;
        const musics = await Music.create({
            ArtistName,
            PackageName,
            ImageURL,
            ReleaseDate,
            SampleURL,
            Price
        });
        res.redirect('/')

    } catch (error) {
        console.log(error.message);
    }
}


export const showUpdate = async (req, res) => {
    try {
        const {
            id
        } = req.params;
        const musics = await Music.findByPk(id);

        res.render('update', {
            data: musics,

        });
    } catch (error) {
        console.error(error);
    }
}

export const updateMusic = async (req, res) => {
    try {
        const {
            id
        } = req.params;
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
                id
            }
        });
        res.redirect('/')
    } catch (error) {
        console.log(error);
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