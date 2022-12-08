import express from 'express';
import bodyParser from 'body-parser';
import ejs from 'ejs';
import * as dotenv from 'dotenv';
import {films} from './images.js';

dotenv.config()

const app = express();

// app configurations
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", 'ejs');

app.get("/",(req,res)=>{res.render("index")});
app.get("/product/:id",(req,res)=>{
    const id = req.params.id;
    const product = films[id];
        const details = {
            size: 'S/M',
            qty:'1',
            name:'MONO SHIRT',
            price:'R.S. 6,500.00',
        };
        
        res.render("product",{src:product,details});
})

app.listen(8001);