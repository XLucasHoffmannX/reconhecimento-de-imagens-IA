const router = require('express').Router();
const uploadCtrl = require('../controllers/uploadCtrl')

router.route('/')
  .get(uploadCtrl.viewPageUpload)
  .post(uploadCtrl.uploadMethod.single("file"), uploadCtrl.insertImagePost);

router.get('/result', uploadCtrl.resultGet)
module.exports = router;