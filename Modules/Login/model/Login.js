const TAG = '[Login]';
const ajax = require('../../Common/services/Ajax');

module.exports.authenticate = (username)=>{
  const ACTION = '[authenticateAdmin]';
  return new Promise((resolve, reject) =>{ 
    ajax.setOptions({
      uri: `${process.env.BPM_URL}/login`
    }).post({username: username}).then(res=>{
      if(res.body){
        resolve(res.body);
      }else{
        reject({
          status: 400,
          error: {
            msg: 'User not found'
          }
        });
      }
    }).catch(error=>{
      reject({
        status: 400,
        error: error
      });
    });
  });
};