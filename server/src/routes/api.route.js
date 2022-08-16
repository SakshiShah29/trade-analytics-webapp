"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const router = require('express').Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
// Getting All the Trades
router.get('/trades', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const Trades = yield prisma.Trades.findMany({
            // include All the post in particular Trades
            include: { Post: true }
        });
        // const Post = await prisma.Post.findMany({
        //   // Include All The Trades in the particular post
        //   // include : {Trades : true}
        // }) 
        res.json(Trades);
    }
    catch (error) {
        next(error);
    }
}));
// Getting Trade By Id 
router.get('/trades/:id', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    res.send({ message: 'Ok api is working 🚀' });
}));
// Creating a Trade
router.post('/trades', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const post = yield prisma.Post.create({
            data: req.body
        });
        res.json(post);
    }
    catch (error) {
        next(error);
    }
}));
module.exports = router;
