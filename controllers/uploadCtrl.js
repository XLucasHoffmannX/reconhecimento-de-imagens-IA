const multer = require('multer');
const path = require('path')

const storage = multer.diskStorage({
  //destination for files
  destination: function (request, file, callback) {
    callback(null, '');
  },

  //add back the extension
  filename: function (request, file, callback) {
    callback(null, "image1" + path.extname(file.originalname));
  },
});

const upload = multer({
  storage: storage,
  limits: {
    fieldSize: 1024 * 1024 * 3,
  },
});

const uploadCtrl = {
  viewPageUpload: (req, res)=>{ res.render('index') },
  insertImagePost: (req, res)=>{ res.redirect('/run') },
  uploadMethod: upload,
  resultGet: (req, res) =>{ res.render('imageAnalise') }
}

module.exports = uploadCtrl;