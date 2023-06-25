import encrypt from "encryptjs"
import Users from "../Modals/UserModal.js"

export const register = async (req,res) =>
{
    try{
        const {name,email,password,role,pin,number} = req.body
        if(!name) return res.send("name is Required");
        if(!email) return res.send("email is required");
        if(!password) return res.send("Password is required");
        if(!role) return res.send("role is required"); 
        if(!pin) return res.send("pin is required"); 
        if(!number) return res.send("number is required");
       
        var secretkey = 'kunal';
        var plaintext = password;
        var plaintextforpin = pin;
        var ciphertext = encrypt.encrypt(plaintext,secretkey,256);
        var ciphertextfropin = encrypt.encrypt(plaintextforpin,secretkey,256);


        
        const response = await Users.find({email:email}).exec();

        const user = new Users
        ({
            name:name,
            email:email,
            password:ciphertext,
            role:role,
            pin:ciphertextfropin,
            number:number
        })
        await user.save();
        return res.send("Registeration Sucessfull");
    }
    catch(err)
    {
        return res.send(err)
    }
}


export const login = async (req,res) =>
{
    try{
        const{email,password} = req.body
        if(!email) return res.send("Email is Required");
        if(!password) return res.send("password is required")

        var secretkey ='kunal'
        var plaintext = password;
        var decipher = encrypt.decrypt(plaintext,secretkey,256);
        // console.log(decipher)
        const response = await Users.find({password}).exec();
        if(decipher == password)
        {
            return res.send(response[0].password,secretkey,256)
        }
        else{
            return res.send("password is incorrect")
        }
    }
    catch(err)
    {
        return res.send(err)
    }
}