const router = require('express').Router();
const Category = require("../models/Category");

//add category
router.post("/", async (req, res) => {
    const newCategory = new Category(req.body);
    try{
        const savedCategory = await newCategory.save();
        res.status(200).json(savedCategory);
    }catch(err){
        res.status(500).json(err)
    }
});

//get all cats
router.get("/", async (req, res) => {

    try{
        const category = await Category.find();
        res.status(200).json(category);
    }catch(err){
        res.status(500).json(err)
    }
});


module.exports = router;