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
        logger.log('debug', res.req.method + ' ' + req.originalUrl + ' response', body);
        res.status(200);
        res.json(body);
    };

    res.error = function (error) {
        logger.log('error', res.req.method + ' ' + req.originalUrl + ' response', error);
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
app.use('/api/tasks', task);

app.get('/api', function response(req, res) {
    // task
  res.send({sample: 'API GOES HERE'});
});

const sharp = require('sharp');
const fileRes = require('./tiff.json');

app.get('/api/fr', async(req, res) => {
    
    const decoded = new Buffer(fileRes.result.images[0], 'base64');
    // res.send({decoded});
    try {
        const data = await sharp(decoded)
        .png()
        .toBuffer();

        // res.send(data);
        
        const a = data.toString('base64');
        res.send(`data:image/tiff;base64, ${a}`);
        // res.send(`<html> <body> <img src="data:image/tiff;base64, ${a}"></body>  </html>`);
    } catch (error) {
        console.log(error);
    }

    // sharp(decoded)
    // .toFile('output.tiff')
    // .then(info => { res.send({info}) })
    // .catch(err => { res.send(err.stack) });

    // res.send()   
    // try {
    //     sharp(tiffFile)
    //     // .tiff({
    //     //     compression: 'lzw',
    //     //     squash: true
    //     // })
    //     // .background('white')
    //     // .embed()
    //     .toBuffer()
    //     .then(data_img => {
    //         //  tiff image data
    //     });
    // } catch (error) {
    //     console.log(error);
    // }
    // try {
    //     const data = await sharp(decode)
    //     .jpeg({
    //         quality: 100,
    //         chromaSubsampling: '4:4:4'
    //     })
    //     .toBuffer();
    // } catch (error) {
    //     console.log(error);
    // }
    // res.send(data);
    // const base64Data = new Buffer(str);
    // try {
    //     const {data, info} = await sharp(str).tiff({
    //         compression: 'lzw',
    //         squash: true
    //     })
    //     .toFile('sampleout.tiff');
    // } catch (error) {
    //     console.log(error);
    // }
    // .then(data_img => {
    //     //  tiff image data
    //     res.send(data_img);
    //  });
    // res.send(`<html> <body> <img src="data:image/tiff;base64, ${str}"></body>  </html>`);
});

app.get('*', (req,res) =>{
  // res.sendFile(path.join(__dirname+'/public/index.html'));
  res.render('index.html', {});
});

module.exports = app;