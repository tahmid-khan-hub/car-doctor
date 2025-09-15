"use server"
import bcrypt from "bcrypt"
import dbConnect from "@/lib/dbConnect"

export const registerUser = async(payload) => {
    const userCollection = dbConnect("users");

    const {email, password} = payload;
    if(!email || !password) return null;

    // validation
    const user = await userCollection.findOne({email: payload.email});
    if(!user){
        const hashedPassword = await bcrypt.hash(password,10);
        payload.password = hashedPassword;
        const result = await userCollection.insertOne(payload);
        return result;
    }
    
    return null;
}