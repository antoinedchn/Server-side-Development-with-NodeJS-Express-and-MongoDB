const express = require('express');
const bodyParser = require('body-parser');

const promoRouter = express.Router();

promoRouter.use(bodyParser.json());

//route = url + method

promoRouter.route('/')
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req,res,next) => {
    res.end('Will email you your new promotion!');
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


promoRouter.route('/promold')
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req,res,next) => {
    res.end(`Will send the promotion ${req.params.promold} to you!`);
})
.post((req, res, next) => {
    res.end('Will add the promotion ' + req.params.promold + ' with details: ' + req.body.description);
})
.put((req, res, next) => {
    res.write('Updating the promotion: ' + req.params.promold + '\n');
    res.end('We will update the promotion: ' + req.params.promold +' with details: ' + req.body.description)
})
.delete((req, res, next) => {
    res.end('We will delete the promotion : ' + req.params.promold);
});


module.exports = promoRouter;
