import encryptjs from "encryptjs";
import Products from "../Modals/Products.js";

export const mainmiddleware = async (req,res,next) =>
{
    try{
        const{email,password,pin} = req.body
        if(!email) return res.send("Email is required");
        if(!password) return res.send("password is required")
        if(!pin) return res.send ("pin is required")

        var secretkey ='kunal'
        var plaintext = password
        var plaintextforpin = pin;
        var deciphertext = encrypt.decrypt(plaintext,secretkey,256)
        var decipherfropin = encrypt.decrypt(plaintextforpin,secretkey,256)

        const response = await Products.find({email:email}).exec()

        if(deciphertext == password || decipherfropin == pin)
        {
            return res.send(response[0].password||response[0].pin,secretkey,256)
            next();
        }
        else{
            return req.send("Incorrect password and pin");
        }
    }
    catch(err)
    {
        return res.send(err)
    }
}
