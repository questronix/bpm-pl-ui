const TAG = '[LifeAsia]';
const ajax = require('../../Common/services/Ajax');
const url = process.env.LIFE_ASIA_URL;

module.exports.getDocs = (args)=>{
  const ACTION = '[getDocs]';
  return new Promise((resolve, reject) =>{ 
    // resolve(`${process.env.FILENET_URL}/Filenet/listPolicyDocByAppNumber`);
    ajax.setOptions({
      uri: `${process.env.FILENET_URL}/requestDetailstoLifeAsia`
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