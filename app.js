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
// app.engine('html', require('ejs').renderFile);

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
app.use('/api/auth', login);
app.use('/api/lifeasia', lifeasia);

const fileRes = require('./tiff.json');

app.get('/api/fr2',(req, res) => {
    const { exec } = require('child_process');
    const base64Tiff = fileRes.result.images;
    // const decoded = new Buffer(fileRes.result.images[0], 'base64');
    let idx = [];
    let pdf = [];

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
});

app.get('*', (req,res) =>{
  // res.sendFile(path.join(__dirname+'/public/index.html'));
  res.render('index.ejs', { isLoggedIn: req.session.user ? true : false });
});

module.exports = app;