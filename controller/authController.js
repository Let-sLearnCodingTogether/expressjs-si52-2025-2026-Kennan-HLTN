import UserModel from "../models/UserModel.js"
import { compare,hash } from "../utils/hashUtil.js"
import { jwtSignUtil } from "../utils/jwtSignUtil.js"

export const register = async (req, res) => {
    try {
        //Untuk mengambil body atau data dari request
        const registerData = req.body

        console.log(registerData)
        
        const hashPassword = hash(registerData.password)

        await UserModel.create({
            username : registerData.username,
            email: registerData.email,
            password: hashPassword
        })

        res.status(201).json({
            message: "Successfully Registered, Please Login",
            data : null
        })
    } catch(e){
        res.status(500).json({
            message: e.message,
            data : null
        })
    }
}

export const login = async(req,res) =>{
    try{
        const loginData = req.body

        //mencari user berdasarkan email
        const user = await UserModel.findOne({
            email : loginData.email
        })

        // jika user tidak ditemukan
        if (!user){
            return res.status(404).json({
                message : "User not found",
                data : null
            })
        }

        //membandingkan password yang ada di dalam db dengan request
        if(compare(loginData.password, user.password)){
            return res.status(200).json({
            message: "login success",
            data : {
                username : user.username,
                email : user.email,
                token : jwtSignUtil(user)
            }
        })
    }
        return res.status(401).json({
            message: "login failed",
            data : {
                username : user.username,
                email : user.email,
            }
        })
    } catch (error){
        res.status(500).json({
            message: e.message,
            data : null
        })
    }
}