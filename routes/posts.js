const express = require('express')
const router = express.Router()
const Post = require('../models/Post')

// get back all the post 
router.get('/', async (req, res) => {
    try {
        const posts = await Post.find();
        res.json(posts)
    } catch (err) {
        res.json({ message: err })
    }
})

// submit a post
router.post('/', async (req, res) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    });

    try {
        const savedPost = await post.save()
        res.json(savedPost)
    }
    catch (err) {
        res.json({ message: err })
    }
})

//specific post
router.get('/:postId', async (req, res) => {
    try {
        const post = await Post.findById(req.params.postId)
        res.json(post)
    }
    catch (err) {
        res.json({ message: err })
    }
})

//Delete Post
router.delete('/:postId', async (req, res) => {
    try { 
        const removedPost = await Post.deleteOne({ _id: req.params.postId })
        res.json(removedPost)
    } catch (error) {
        res.json({ message: error })
    }
})

//update a post
router.patch('/:postId', async (req, res) =>{
    try {
        const updatePost = await Post.updateOne({_id : req.params.postId}, 
            {$set : {title : req.body.title}})

      res.json(updatePost)
    } catch (err) {
        res.json({msg : err})
    }
})

module.exports = router