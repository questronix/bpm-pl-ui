const TAG = ['FileNet'];
const ajax = require('../Common/services/Ajax');
const express = require('express');
const router = express.Router();
// const sharp = require('sharp');
const fn = require('./model/FileNet');

// const fileRes = require('../../tiff.json');
router.post('/', (req, res) => {
  const ACTION = '[getDocs]';
  fn.getDocs(req.body)
  .then(async(fileRes)=>{
    // res.success(fileRes);
    const decoded = new Buffer(fileRes.result.images[0], 'base64');
    try {
      const data = await sharp(decoded)
        .png()
        .toBuffer();
      const a = data.toString('base64');
      res.success(`data:image/tiff;base64, ${a}`);
    } catch (error) {
      console.log(error);
      res.error(error);
    }
  })
  .catch(error=>{
    res.error(error);
  });

  

  // return new Promise(async(resolve, reject) => {
  //   const decoded = new Buffer(fileRes.result.images[0], 'base64');
  //   try {
  //     const data = await sharp(decoded)
  //       .png()
  //       .toBuffer();
  //     const a = data.toString('base64');
  //     resolve(`data:image/tiff;base64, ${a}`);
  //   } catch (error) {
  //     console.log(error);
  //     reject(error);
  //   }
  // })
  //   .then(result => {
  //     res.send(result);
  //   })
  //   .catch(err => {
  //     res.error(err);
  //   });

  // ajax
  //   .setOptions({
  //     uri: `${url}/Filenet/listPolicyDocByAppNo`
  //   })
  //   .post(req.body)
  //   .then(async (res) => {
  //     const decoded = new Buffer(res.result.images[0], 'base64');
  //     try {
  //       const data = await sharp(decoded)
  //         .png()
  //         .toBuffer();
  //       const a = data.toString('base64');
  //       res.send(`data:image/tiff;base64, ${a}`);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   })
  //   .catch(err => {
  //     console.log(err);
  //     res.error(err);
  //   });
});

module.exports = router;
