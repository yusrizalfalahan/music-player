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
        console.log(req.files.File[0])
        const create = {
            ArtistName: req.body.ArtistName,
            PackageName: req.body.PackageName,
            ImageURL: req.files.FileImage[0].filename,
            ReleaseDate: req.body.ReleaseDate,
            SampleURL: req.files.File[0].filename,
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
            ReleaseDate,
            Price
        } = req.body;

        let data = {
            ArtistName,
            PackageName,
            ReleaseDate,
            Price
        }

        console.log("file : ", req.files)

        if (req.files.FileImage && req.files.FileImage.length > 0) {
            data["ImageURL"] = req.files.FileImage[0].filename
        }
        if (req.files.File && req.files.File.length > 0) {
            data["SampleURL"] = req.files.File[0].filename
        }
        console.log(data)
        await Music.update(data, {
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

        })
        res.redirect('/')

    } catch (error) {
        console.log(error.message);
    }
}

// //upload music
// export const uploadMusic = async (req, res) => {
//     try {

//         await uploadFile(req, res)
//         if (req.file == undefined) {
//             return res.status(400).send({
//                 message: "Please upload a file"
//             })
//         }
//         res.status(200).send({
//             message: " Uploades the file succesfully: " + req.file.originalname,

//         })
//     } catch (err) {
//         res.status(500).send({
//             message: `Could not upload the file: ${req.file.originalname}. ${err}`,
//         })
//     }
// }

// const getListFiles = (req, res) => {
//     const directoryPath = __basedir + "/uploads"

//     fs.readdir(directoryPath, function (err, files) {
//         if (err) {
//             res.status(500).send({
//                 message: "Unable to scan files"
//             })
//         }
//         let fileInfos = []

//         files.forEach((file) => {
//             fileInfos.push({
//                 name: file,
//                 url: baseUrl + file,
//             })
//         })
//         res.status(200).send(fileInfos)
//     })
// }