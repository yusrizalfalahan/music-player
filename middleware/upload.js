import multer from "multer"



const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads")
    },
    filename: (req, file, cb) => {
        const name = `${Date.now()}-${file.originalname}`
        req.body.SampleURL = name
        cb(null, name)
    }



})
const fileFilter = (req, file, cb) => {
    if (file.mimetype === mp3) {

        cb(null, true)
    } else {
        cb(null, false)
    }
}


const uploadFile = multer({
    storage: storage,
    fileFilter: fileFilter

}).single('mp3');
export default uploadFile;