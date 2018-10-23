const TAG = '[Filenet]';
const ajax = require('../../Common/services/Ajax');
const url = process.env.FILENET_URL;

module.exports.getDocs = (args)=>{
  const ACTION = '[getDocs]';
  return new Promise((resolve, reject) =>{ 
    // resolve(`${process.env.FILENET_URL}/Filenet/listPolicyDocByAppNumber`);
    ajax.setOptions({
      uri: `${process.env.FILENET_URL}/Filenet/listPolicyDocByAppNumber`
    }).post(args).then(res=>{
      if(res.body){
        resolve(res.body);
      }else{
        reject({
          status: 400,
          error: {
            msg: 'No documents found.'
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