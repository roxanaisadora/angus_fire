const {Router} = require('express');
const router = Router();

const Purchas = require('../models/Purchas')

router.get('/', async (req, res) => {
    const Purchass = await Purchas.find();
    res.json(Purchass);
});

router.post ('/', async (req, res)=> {
    const {product,code,email,cant,description,imagePath} = req.body;
    const newPurchas = new Purchas({product,code,email,cant,description,imagePath});
    await newPurchas.save();
    res.json({message:'Purchas saved'})
})

router.delete('/:id', async (req, res)=> {
    const Purchasdelete = await Purchas.findByIdAndDelete(req.params.id);
    //console.log(Purchasdelete);
    res.json({message: 'Purchas Deleted'});
})

module.exports = router;