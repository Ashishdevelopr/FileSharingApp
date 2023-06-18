import File from "../model/filemodel.js"
import dotenv from "dotenv"
dotenv.config()

const BASE_URL = process.env.BASE_URL

export const uploadImage =async(req, res)=>{
    const fileObj = {
        path:req.file.path,
        name:req.file.originalname
    }
   try{
   const file = await File.create(fileObj)
   res.status(200).json({path:`${BASE_URL}/file/${file._id}`})

   }catch(error){
    console.error(error.message)
    res.status(500).json({error:error.message})
   }
}

export const downloadImage = async(req, res)=>{
    try{
        const file = await File.findById(req.params.fileId)

        file.documentDownload++

        await file.save()

        res.download(file.path, file.name)


    }catch(error){
        console.log(error.message)
        return res.status(500).json({error:error.message})
    }
}