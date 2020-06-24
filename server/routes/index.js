/*const express = require('express');
const bodyParser = require('body-parser');
const unitDB = require('../Controllers/UnitController');
const recordDB = require('../Controllers/RecordController');
const employeeDB = require('../Controllers/EmployeeController');
const applicationUserDB = require('../Controllers/ApplicationUserController');
var Unit = require('../models/Unit');

const router = express.Router();


//unit get router
router.get('/units', async (req, res,next)=>{
    try{
        let results = await unitDB.all();
        res.json(results);
    } catch(e){
        console.log(e);
res.sendStatus(500);
    }
});
router.get('/units/:id', async (req, res,next)=>{
    try{
        let results = await unitDB.one(req.params.id);
        res.json(results);
    } catch(e){
        console.log(e);
res.sendStatus(500);
    }
});
// create route for units
router.post('/units'), async (req, res)=>{
//var unit = Unit(req.body)
//const {error} = unit.validateUnit(unit);
//if(error) return res.status(400).send({message: error.details[0].message})
let results = await unitDB.post(req.body);
res.json(results);
res.send('insert sucess');
}

// unit update
router.put('/units/:id'), async (req, res)=>{
    let results = await unitDB.put(req.params);
res.end(JSON.stringify(results));
}
// unit delete
router.delete('/units/:id', async (req, res, next)=>{
    try{
        let results = await unitDB.delete(req.params.id);
        res.json(results);
    } catch(e){
        console.log(e);
res.sendStatus(500);
    }
});
//records router
router.get('/records', async (req, res,next)=>{
    try{
        let results = await recordDB.all();
        res.json(results);
    } catch(e){
        console.log(e);
res.sendStatus(500);
    }
});
router.get('/records/:id', async (req, res,next)=>{
    try{
        let results = await recordDB.one(req.params.id);
        res.json(results);
    } catch(e){
        console.log(e);
res.sendStatus(500);
    }
});

//records create


//records delete
router.delete('/units/:id', async (req, res, next)=>{
    try{
        let results = await recordDB.delete(req.params.id);
        res.json(results);
    } catch(e){
        console.log(e);
res.sendStatus(500);
    }
});

// employee router
router.get('/employees', async (req, res,next)=>{
    try{
        let results = await employeeDB.all();
        res.json(results);
    } catch(e){
        console.log(e);
res.sendStatus(500);
    }
});
router.get('/employees/:id', async (req, res,next)=>{
    try{
        let results = await employeeDB.one(req.params.id);
        res.json(results);
    } catch(e){
        console.log(e);
res.sendStatus(500);
    }
});

//create employees


//delete employee
router.delete('/units/:id', async (req, res, next)=>{
    try{
        let results = await employeeDB.delete(req.params.id);
        res.json(results);
    } catch(e){
        console.log(e);
res.sendStatus(500);
    }
});
// application user router
router.get('/applicationUsers', async (req, res,next)=>{
    try{
        let results = await applicationUserDB.all();
        res.json(results);
    } catch(e){
        console.log(e);
res.sendStatus(500);
    }
});
router.get('/applicationUsers/:id', async (req, res,next)=>{
    try{
        let results = await applicationUserDB.one(req.params.id);
        res.json(results);
    } catch(e){
        console.log(e);
res.sendStatus(500);
    }
});

//create application user


//application user delete
router.delete('/units/:id', async (req, res, next)=>{
    try{
        let results = await applicationUserDB.delete(req.params.id);
        res.json(results);
    } catch(e){
        console.log(e);
res.sendStatus(500);
    }
});

//account routes
//get all and get one accounts
router.get('/accounts', async (req, res,next)=>{
    try{
        let results = await accountDB.all();
        res.json(results);
    } catch(e){
        console.log(e);
res.sendStatus(500);
    }
});
router.get('/accounts/:id', async (req, res,next)=>{
    try{
        let results = await accountDB.one(req.params.id);
        res.json(results);
    } catch(e){
        console.log(e);
res.sendStatus(500);
    }
});
//create account

//update account

//delete account
router.delete('/accounts/:id', async (req, res, next)=>{
    try{
        let results = await aaccountsDB.delete(req.params.id);
        res.json(results);
    } catch(e){
        console.log(e);
res.sendStatus(500);
    }
});

//export

module.exports =router;*/
