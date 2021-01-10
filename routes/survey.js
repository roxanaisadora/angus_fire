const {Router} = require('express');
const router = Router();

const Survey = require('../models/Survey')

router.get('/', async (req, res) => {
    const Surveys = await Survey.find();
    res.json(Surveys);
});

router.post ('/', async (req, res)=> {
    const {name,email,age,comments} = req.body;
    const newSurvey = new Survey({name,email,age,comments});
    await newSurvey.save();
    res.json({message:'Survey saved'})
})


module.exports = router;