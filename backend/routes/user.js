const {Router} = require('express');
const router = Router();

const User = require('../models/User')

router.get('/', async (req, res) => {
    const users = await User.find();
    res.json(users);
});

router.post ('/', async (req, res)=> {
    const {name,password,email} = req.body;
    const newUser = new User({name,password,email});
    await newUser.save();
    res.json({message:'User saved'})
})

router.delete('/:id', async (req, res)=> {
    const userdelete = await User.findByIdAndDelete(req.params.id);
    console.log(userdelete);
    res.send('deleting');
})

module.exports = router;