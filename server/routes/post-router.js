const postRouter = require('express').Router()
const {getPosts, getPostById, addPost, updatePost, deletePost} = require('../controllers/post-ctrl');

postRouter.get('/', getPosts);
postRouter.get('/byId/:id', getPostById);
postRouter.post('/add', addPost);
postRouter.put('/update/:id', updatePost);
postRouter.delete('/delete/:id', deletePost);

module.exports = postRouter;