const TAG = ['FileNet'];
const express = require('express');
const router = express.Router();
const Logger = require('../Common/services/Logger');
const fn = require('./model/FileNet');
const { exec } = require('child_process');
const mw = require('../Common/middleware/Authentication');

router.post('/v2', mw.isAuthenticated, (req, res) => {
  const ACTION = '[getDocsV2]';
  Logger.log('debug', `${TAG}${ACTION} - request parameters`, req.params);
  Logger.log('debug', `${TAG}${ACTION} - request body`, req.body);

  fn.getDocs(req.body)
    .then(async fileRes => {
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
    .catch(error => {
      res.error(error);
    });
});

router.post('/', mw.isAuthenticated, (req, res) => {
  const ACTION = '[getDocs]';
  Logger.log('debug', `${TAG}${ACTION} - request parameters`, req.params);
  Logger.log('debug', `${TAG}${ACTION} - request body`, req.body);

  fn.getDocs(req.body)
    .then(fileRes => {
      const base64Tiff = fileRes.result.images;
      let idx = [];
      let pdf = [];

      const convert = new Promise((resolve, reject) => {
        base64Tiff.forEach((tiff, index) => {
          const decoded = new Buffer(tiff, 'base64');
          idx.push(index);
          fs.writeFile(`./temp/file${index}.tif`, decoded);
          exec(
            `magick ./temp/file${index}.tif ./temp/out${index}.pdf`,
            (error, stdout, stderr) => {
              if (error) {
                console.error(`exec error: ${error}`);
                reject({ error });
              }
              resolve(true);
              console.log(`stdout: ${stdout}`);
              console.log(`stderr: ${stderr}`);
            }
          );
        });
      }).then(result => {
        console.log('asd');
        if (result) {
          return new Promise((resolve, reject) => {
            idx.forEach(i => {
              console.log(`./temp/out${i}.pdf`);
              fs.readFile(`./temp/out${i}.pdf`, (err, data) => {
                console.log(`./temp/out${i}.pdf`);
                if (err) {
                  reject(err);
                }
                pdf.push(
                  `data:application/pdf;base64, ${data.toString('base64')}`
                );
                console.log('LD', idx.lastIndexOf(i));
                console.log(i);
                if (idx.lastIndexOf(i) === 0) {
                  resolve({ pdf });
                }
              });
            });
          });
        }
      });

      convert
        .then(result => {
          res.send(result.pdf[0]);
        })
        .catch(err => {
          res.send(err);
        });
    })
    .catch(err => {
      res.error(err);
    });
});

module.exports = router;
