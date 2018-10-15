const nodemailer = require('nodemailer');
const Errors = require('./Errors');
const Logger = require('./Logger');
const fs = require('fs');
const path = require('path');

const TAG = '[MAILER]';

const cfenv = require('cfenv');
const appEnv = cfenv.getAppEnv();

const templates = {
  VERIFY_EMAIL : {
    subject: `Welcome to Talent Block $name!`,
    html: (name, token)=>{  //Editted to .html
      let file = fs.readFileSync(path.join(__dirname, '../../../views/verify_email.html')).toString();
      file = file.replace(/\$name/g, name);
      file = file.replace(/\$appEnv/g, appEnv.url);
      file = file.replace(/\$token/g, token);
      return file;
    }
  },
  RESET_PASSWORD: {
    subject: `Reset your Password`,
    html: (name, token)=>{
      let file = fs.readFileSync(path.join(__dirname, '../../../views/resetPassword.html')).toString();
      file = file.replace(/\$name/g, name);
      file = file.replace(/\$appEnv/g, appEnv.url);
      file = file.replace(/\$token/g, token);
      return file;
    }
  }
};

function sendEmail(to, template, data){
  const ACTION = '[sendEmail]';
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
           user: process.env.MAILER_USER,
           pass: process.env.MAILER_PASS
       }
   });

   let tmp = templates[template];
  
   const mailOptions = {
    from: process.env.MAILER_USER, // sender address
    to: to, // list of receivers
    subject: tmp.subject.replace(/\$name/gi, data.name), // Subject line
    html: tmp.html(data.name, data.token)// plain text body
  };
  console.log('MAILOPTIONS', mailOptions);
  Logger.log('info', `${TAG}${ACTION} - mailOptions`, mailOptions);
  return new Promise((resolve, reject)=>{
    transporter.sendMail(mailOptions, function (err, info) {
      if(err){
        Logger.log('error', `${TAG}${ACTION} - ERROR`, err);
        reject(Errors.raise('SEND_MAIL_ERROR', err)); 
      }else
        resolve(info);
    });
  });
}

module.exports.sendEmailVerification = (to, payload)=>{
  const ACTION = '[sendEmailVerification]';
  Logger.log('info', `${TAG}${ACTION} - payload`, {to, payload});
  return sendEmail(to, 'VERIFY_EMAIL', payload);
};

module.exports.sendResetPassword = (to, payload)=>{
  const ACTION = '[sendEmailVerification]';
  Logger.log('info', `${TAG}${ACTION} - payload`, {to, payload});
  return sendEmail(to, 'RESET_PASSWORD', payload);
};