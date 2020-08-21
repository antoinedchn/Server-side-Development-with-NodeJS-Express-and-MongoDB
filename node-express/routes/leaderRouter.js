const express = require('express');
const bodyParser = require('body-parser');

const leaderRouter = express.Router();

leaderRouter.use(bodyParser.json());

//route = url + method

leaderRouter.route('/')
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req,res,next) => {
    res.end('Will send all the leaders to you!');
})
.post((req, res, next) => {
    res.end('Will add the promotion: ' + req.body.name + ' with details: ' + req.body.description);
})
.put((req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /dishes');
})
.delete((req, res, next) => {
    res.end('Deleting all promotions');
});


leaderRouter.route('/leaderId')
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req,res,next) => {
    res.end(`Will send the leader ${req.params.leaderId} to you!`);
})
.post((req, res, next) => {
    res.end('Will add the leader: ' + req.params.leaderId + ' with details: ' + req.body.description);
})
.put((req, res, next) => {
    res.write('Updating the leader: ' + req.params.leaderId + '\n');
    res.end('We will update the leader: ' + req.params.leaderId +' with details: ' + req.body.description)
})
.delete((req, res, next) => {
    res.end('We will delete the leader : ' + req.params.leaderId);
});


module.exports = leaderRouter;
