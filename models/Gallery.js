import mongoose from "mongoose";
const GallerySchema=mongoose.Schema({
    image:{
        type:String,
        required:true
    }
})

export default mongoose.models.Gallery || mongoose.model('Gallery',GallerySchema);