import mongoose from "mongoose";

const URL = 'mongodb+srv://Rohit-WAD:oeOCnPDwbArJB3vg@cluster0.nq1mdcw.mongodb.net/'

export const connectToDB = () =>{
    mongoose.connect(URL)
    console.log("Connected to DB")
}