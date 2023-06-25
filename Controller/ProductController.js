import axios from "axios";
import { UUID } from "bson";
import Awdiztokens from "../Modals/AwdizToken.js";
import { CronJob } from "cron";
import Products from "../Modals/Products.js";

const accesstoken = UUID

export const check = async (req,res) =>
{
    try{
        const {accesstoken} = req.body

        const response = await Awdiztokens.find({id}).exec()
        const Awdiztoken = new Awdiztokens
        ({
            accesstoken:UUID
        })
        await Awdiztoken.save();
    }catch(err)
    {
        return res.send(err)
    }
}

export const addproduct = async (req,res) =>
{
    try{
    const{title,price,description,image,category} = req.body
    if(!title) return res.send("title is Required");
    if(!price) return res.send("Price is Required");
    if(!description) return res.send("description is Required");
    if(!image) return res.send("image is Required");
    if(!category) return res.send("Category is Required");

    const product = new Products    
    ({
        title:title,
        price:price,
        description:description,
        image:image,
        category:category
    })
    await product.save()
    return res.send("Product Added successfully")
}
catch(err)
{
    return res.send(err)
}
}


export const getproduct = async (req,res) =>
{
        const{id} = req.body
        if(!id) return res.send("id is required");

        const response = await Products.find({_id:id}).exec();

      return res.send()
}

export const deleteProduct = async (req,res) =>
{
    const{id} =req.body
    if(!id)return res.send("id is required")

    const response = await Products.find(id).exec();

    return res.send("product deleted")
}






const job = new CronJob
('0 */1 * * * *',function(){
console.log("update every minute")
})
job.start