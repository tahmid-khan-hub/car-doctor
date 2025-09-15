"use server"

import dbConnect from "@/lib/dbConnect";
import bcrypt from "bcrypt"

export const loginUser =  async(payload) => {

    const {email, password} = payload;

    const userCollection = dbConnect("users");
    const user = await userCollection.findOne({email});
    if(!user) return null;

    const isPassword = await bcrypt.compare(password, user.password);
    if(!isPassword) return null;

    return user;
}