const TAG = '[Task]';
const ajax = require('../Common/services/Ajax');
const express = require('express');
const router = express.Router();
const url = process.env.BPM_URL;

// Get all tasks
router.get('/', (req, res) => {
  ajax.setOptions({
    uri: `${url}/tasks?username=${req.query.username}`,
  }).get().then(data=>{
    res.send(JSON.parse(data.body));
    resolve(data.body)
  }).catch(err=>{
    console.log(err);
  });
});

// Get task by instance ID
router.get('/:instanceId', (req, res) => {
  ajax.setOptions({
    uri: `${url}/${req.params.instanceId}`,
  }).get().then(data=>{
    res.send(JSON.parse(data.body));
    resolve(data.body)
  }).catch(err=>{
    console.log(err);
  });
});

// Get task details
router.get('/:taskId', (req, res) => {
  ajax.setOptions({
    uri: `${url}/${req.params.taskId}?username=${req.query.username}`,
  }).get().then(data=>{
    res.send(JSON.parse(data.body));
    resolve(data.body)
  }).catch(err=>{
    console.log(err);
  });
});

// Submit task
router.post('/:taskId', (req, res) => {
  ajax.setOptions({
    uri: `${url}/${req.params.taskId}?username=${req.query.username}`,
  }).post(req.body).then(data=>{
    res.send(JSON.parse(data.body));
    resolve(data.body)
  }).catch(err=>{
    console.log(err);
  });
});

router.post('/', (req, res) => {
  ajax.setOptions({
    uri: `${url}/process/start?username=${req.query.username}`,
  }).post(req.body).then(data=>{
    res.send(JSON.parse(data.body));
    resolve(data.body)
  }).catch(err=>{
    console.log(err);
  });
});

module.exports = router;
