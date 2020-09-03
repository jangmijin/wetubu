// const express = require('express');
import express from "express";
import morgan from "morgan";//logger은 morgan nickname으로 불린다
import { restart } from "nodemon";
const app = express();

const PORT = 4000;

const handleListening = () => 
    console.log(`Listening on: http://localhost:${PORT}`);

const handleHome = (req,res) => res.send('hello from ringgu');

const handleProfile = (req,res) => res.send('you are on my profile');

const betweenHome = (req, res, next) => {
    console.log("Between");
    next();
};

app.use(betweenHome);

app.get("/", handleHome);

app.get("/profile",handleProfile);

app.listen(PORT, handleListening);