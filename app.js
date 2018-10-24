const path = require('path');
const fs = require('fs');


//express
const express = require('express');

const cfenv = require('cfenv');
const appEnv = cfenv.getAppEnv();

console.log(appEnv);

//create instance
const app = express();

// implement standard security from helmet
const helmet = require('helmet');
app.use(helmet());

//middleware to process POST data
const bodyParser = require('body-parser');

//set the template engine into ejs
app.set('views', path.join(__dirname, 'public'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({
    extended: true
})); // for parsing application/x-www-form-urlencoded

// setup success/error handler
app.use(function (req, res, next) {
    res.success = function (body) {
        console.log('debug', res.req.method + ' ' + req.originalUrl + ' response', body);
        res.status(200);
        res.json(body);
    };

    res.error = function (error) {
        console.log('error', res.req.method + ' ' + req.originalUrl + ' response', error);
        res.status(error.status);
        res.json(error.error);
    };

    next();
});

// serve the files out of ./public as our main files
// app.use(express.static(path.join(__dirname, 'dist')));
app.use('/static/', express.static(path.join(__dirname, 'dist')));
app.use('/dashboard/static/', express.static(path.join(__dirname, 'dist')));
app.use('/tasks/static/', express.static(path.join(__dirname, 'dist')));
// app.use('/processor/static/', express.static(path.join(__dirname, 'dist')));

//session
const session = require('express-session');

app.use(session({
    secret: 'session.secret.key',
    saveUninitialized: false,
    resave: false
}));

//for CORS
// app.use(function (req, res, next) {
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     res.setHeader('Access-Control-Allow-Credentials', 'true');
//     res.setHeader(
//         'Access-Control-Allow-Methods',
//         'GET,HEAD,OPTIONS,POST,PUT,DELETE'
//     );
//     res.setHeader(
//         'Access-Control-Allow-Headers',
//         'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers'
//     );
//     next();
// });

// app.use('/', (req, res, next)=>{
//   const init = {
//     PORT: process.env.PORT,
//     CONFIG: process.env.CONFIG
//   };
//   res.render('index.html', init);
// });
// app.get('/*', function response(req, res) {
  // console.log('Requested');
  // res.write(fs.readFileSync(path.join(__dirname, 'dist/index.html')));
  // res.end();
  // res.redirect('/#');
// });

let task = require('./Modules/Task');
let fileNet = require('./Modules/FileNet');
let login = require('./Modules/Login');
let lifeasia = require('./Modules/LifeAsia');

app.use('/api/tasks', task);
app.use('/api/filenet', fileNet);
app.use('/api/login', login);
app.use('/api/lifeasia', lifeasia);

app.get('/api', function response(req, res) {
    // task
  res.send({sample: 'API GOES HERE'});
});


const fileRes = require('./tiff.json');

app.get('/api/fr', async(req, res) => {

    fs.readFile('./temp/out2.pdf', (err, data) => {
        if (err) res.error(err);
        const a = data.toString('base64');
        console.log(data);
        res.contentType("application/pdf");
        res.send(data);
    });

    // const link = `data:application/pdf;base64, ${a}`;
    
    
    // const decoded = new Buffer(fileRes.result.images[0], 'base64');
    // ifds = utif.decode(decoded);
    // utif.decodeImages(decoded, ifds);
    // // res.send({decoded});
    // try {
    //     const data = await sharp(decoded)
    //     .png()
    //     .toBuffer();

    //     // res.send(data);
        
    //     const a = data.toString('base64');
    //     res.send(`${decoded}.tif`);
    //     // res.send(`data:image/tiff;base64, ${a}`);
    //     // res.send(`<html> <body> <img src=`data:image/tiff;base64, ${a}"></body>  </html>`);
    // } catch (error) {
    //     console.log(error);
    // }
});


app.get('/api/fr2',(req, res) => {
    const { exec } = require('child_process');
    const base64Tiff = fileRes.result.images;
    const decoded = new Buffer(fileRes.result.images[0], 'base64');
    let idx = [];
    let pdf = [];
    let cnt = 0;

    const convert = new Promise((resolve, reject) => {
        base64Tiff.forEach((tiff, index) => {
            
            const decoded = new Buffer(tiff, 'base64');
            idx.push(index);
            fs.writeFile(`./temp/file${index}.tif`, decoded);
            exec(`magick ./temp/file${index}.tif ./temp/out${index}.pdf`, (error, stdout, stderr) => {
                if (error) {
                    console.error(`exec error: ${error}`);
                    reject({error});
                }
                resolve(true);
                console.log(`stdout: ${stdout}`);
                console.log(`stderr: ${stderr}`);
            });
        });
    }).then((result) => {
        console.log('asd')
        if (result) {
            return new Promise((resolve, reject) => {
                idx.forEach((i) => {
                    console.log(`./temp/out${i}.pdf`);
                    fs.readFile(`./temp/out${i}.pdf`, (err, data) => {
                        console.log(`./temp/out${i}.pdf`);
                        if (err) {
                            reject(err);
                        }
                        pdf.push(`data:application/pdf;base64, ${data.toString('base64')}`);
                        console.log('LD', idx.lastIndexOf(i));
                        console.log(i);
                        if (idx.lastIndexOf(i) === 0) {
                            resolve({pdf});
                        }
                    });
                });
            });
        }
    });

    convert.then((result) => {
        res.send(result.pdf[0]);
    }).catch((err) => {
        res.send(err);
    });

    // let pdf = [];

    // if (isConverted) {
    //     // res.send('yea');
    //     const pdf = await 
    //     res.send({pdf});
    // }

    // if (convert) {
    //     res.send('asd');
    // }

    // convert.then((result) => {
    //     if (result) {
            // res.send(idx);
            // pdf.forEach((i) => {
            //     fs.readFile(`./temp/out${i}.pdf`, (err, data) => {
            //         if (err) res.error(err);
            //         const base64Pdf = data.toString('base64');
            //         pdf.push(base64Pdf);
            //     });
            //     res.send({pdf});
            // });
            // fs.readFile(`./temp/out2.pdf`, (err, data) => {
            // if (err) res.send(err);
            // const base64Pdf = data.toString('base64');
            // pdf.push(base64Pdf);
            // console.log(data);
            // res.contentType("application/pdf");
            // res.send(data);

            // res.send('PASOK');
        //     pdf.forEach(i => {
        //         fs.readFile(`./temp/out${i}.pdf`, (err, data) => {
        //             if (err) res.error(err);
        //             const base64Pdf = data.toString('base64');
        //             pdf.push(base64Pdf);
        //             console.log(data);
        //             res.contentType("application/pdf");
        //             res.send(data);
        //         });
        //     });
    //     } 
    // }).catch((err) => {
    //     res.send(err);
    // });

    // res.send({pdf});

    
     // Readfile
    //  pdf.forEach(i => {
    //     fs.readFile(`./temp/out${i}.pdf`, (err, data) => {
    //         if (err) res.error(err);
    //         const base64Pdf = data.toString('base64');
    //         pdf.push(base64Pdf);
    //         console.log(data);
    //         // res.contentType("application/pdf");
    //         // res.send(data);
    //     });
    //  });

    // res.send({isConverted});

    // res.send(r);

    // const fileRes = require('./tiff.json');
    // const decoded = new Buffer(fileRes.result.images[0], 'base64');
    // ifds = utif.decode(decoded);
    // utif.decodeImages(decoded, ifds);
    // const a = utif.toRGBA8(ifds[0]);
    // res.send(a);
    // b = new Blob(a, {'type': 'image/png'});
    // const b = new Blob(['hi', 'constructing', 'a', 'blob']);
    // res.send(`<html> <body onload="UTIF.replaceIMG()">` + 
    // `<canvas id="imgs"> </canvas>` +
    // `<script>` + 
    // `var canvas = document.getElementById('#imgs');` +
    // `var context = canvas.getContext('2d');` +
    // `context.putImageData(${a}, ${ifds[0].width}, ${ifds[0].height});` +
    //  `</script>` +
    // '</body> </html>');
});

app.get('*', (req,res) =>{
  // res.sendFile(path.join(__dirname+'/public/index.html'));
  res.render('index.html', {});
});

module.exports = app;