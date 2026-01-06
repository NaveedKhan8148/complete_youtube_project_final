const multer = require('multer')

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // Set the destination folder for uploaded files
    cb(null, './public/temp')
  },
  filename: function (req, file, cb) {
    
    const filename = file.originalname

    cb(null, filename)
  },
})

export const upload = multer({ storage })