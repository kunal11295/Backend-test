import express from "express";
import {  login, register } from "../Controller/UserController.js";
import { addproduct, check, getproduct } from "../Controller/ProductController.js";
 

var router = express.Router();

router.post('/Registeration',register)
router.post('/Login',login)
router.post('/check',check)
router.get('/addproduct',addproduct)
router.get('/getproduct',getproduct)



export default router;