const router = require('express').Router();
const {PrismaClient}  = require('@prisma/client')
// import {NextFunction , Request , Response } from 'express';

const prisma = new PrismaClient()
// Getting All the Trades
router.get('/trades', async (req , res , next) => {
  try{
    const Trades = await prisma.Trades.findMany({
      // include All the post in particular Trades
      include : {Post : true}
    });

    // const Post = await prisma.Post.findMany({
    //   // Include All The Trades in the particular post
    //   // include : {Trades : true}
    // }) 

    res.json(Trades)

  }catch(error){
    next(error)
  }
});


// Getting Trade By Id 
router.get('/trades/:id', async (req , res, next ) => {
  res.send({ message: 'Ok api is working 🚀' });
});

// Creating a Trade
router.post('/trades', async (req, res, next ) => {
  try{
    const post = await prisma.Post.create({
      data : req.body
    })

    res.json(post)
  }catch(error){
    next(error)
  }
});

module.exports = router;
