import { Router } from "express";
import {Prisma, PrismaClient} from "@prisma/client";
import jwt from "jsonwebtoken";
import { appendFile } from "fs";

export const auth = Router();
const prisma = new PrismaClient();

auth.post('./signin' , async (req , res) => {

    const { id , email , name } = req.body;
    const users = await prisma.users.findUnique({
        where : {
            email : email,
        },
    });

    // If user does not exist
    if(!users) {
        return res.status(400).send({success : false , error : "User does not exist."});
    }

    try{
        if(email == users.email){
            const accessToken = jwt.sign({userId : users.id}, "secret");

            return res.status(200).json({success : true ,  accessToken : accessToken})
        }else{
            return res.status(400).json({success : false , error : "Invalid Credentials."});
        }
    }catch(err){
        return res
            .status(400)
            .json({success : false , error: "Internal Server Error."});
    }
   
});

auth.post('/signup' , async (req , res) => {
    const {email , name} = req.body;

    // To check if the user already exists
    const result = await prisma.users.findUnique({
        where : {
            email : email,
        },
    });

    if(result){
        return res
            .status(400)
            .json({success : false , error:"User Already Exists."});
    }

    // If the user does not exist , 
    // -----Create a new User in the database

    const user = await prisma.users.create({
        data : {
            email : email,
            name : name
        },
    });

    // Generating the access token
    const accessToken = jwt.sign({userId : user.id}, "secret");

    return res.status(200).json({success : true , accessToken : accessToken});
});