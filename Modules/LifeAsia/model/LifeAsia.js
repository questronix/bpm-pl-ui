const TAG = '[LifeAsia]';
const ajax = require('../../Common/services/Ajax');
const url = process.env.LIFE_ASIA_URL;

module.exports.getPolicy = (args)=>{
  const ACTION = '[gwtPolicy]';
  return new Promise((resolve, reject) =>{ 
    // resolve(`${url}/requestDetailstoLifeAsia`);
    ajax.setOptions({
      uri: `${url}/requestDetailstoLifeAsia`
    }).post(args).then(res=>{
      if(res.body){
        resolve(res.body);
      }else{
        reject({
          status: 400,
          error: {
            msg: 'Policy not found.'
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