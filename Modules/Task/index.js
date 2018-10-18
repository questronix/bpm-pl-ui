const TAG = '[Task]';
const ajax = require('../Common/services/Ajax');
const express = require('express');
const router = express.Router();
const url = process.env.BPM_URL;

// Get all tasks
router.get('/', (req, res) => {
  ajax.setOptions({
    uri: `${url}/tasks?uid=${req.query.uid}`,
  }).get().then(data=>{
    res.send(JSON.parse(data.body));
  }).catch(err=>{
    console.log(err);
  });
});

// Get task by instance ID
// router.get('/:instanceId', (req, res) => {
//   ajax.setOptions({
//     uri: `${url}/${req.params.instanceId}`,
//   }).get().then(data=>{
//     res.send(JSON.parse(data.body));
//     resolve(data.body)
//   }).catch(err=>{
//     console.log(err);
//   });
// });

// Get task details
router.get('/:taskId', (req, res) => {
  ajax.setOptions({
    uri: `${url}/tasks/${req.params.taskId}?uid=${req.query.uid}`,
  }).get().then(data=>{
    res.send(JSON.parse(data.body));
  }).catch(err=>{
    console.log(err);
  });
});

// Submit task
router.post('/:taskId', (req, res) => {
  // res.send(`${url}/tasks/${req.params.taskId}?uid=${req.query.uid}`);
  ajax.setOptions({
    uri: `${url}/tasks/${req.params.taskId}?uid=${req.query.uid}`,
  }).post(req.body).then(data=>{
    res.send(data.body);
  }).catch(err=>{
    console.log(err);
  });
});

router.post('/', (req, res) => {
  ajax.setOptions({
    uri: `${url}/process/start`,
  }).post(req.body).then(data=>{
    res.send(data.body);
  }).catch(err=>{
    console.log(err);
  });
});

module.exports = router;
