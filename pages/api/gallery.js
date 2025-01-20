import dbConnect from "../../utils/dbConnect";
import Gallery from "../../models/Gallery";
export default async function handler(req, res) {
    console.log("WAREHOUSE API")
    switch (req.method) {
        case 'POST':
            {
                const {image} = req.body;
                try {
                    await dbConnect();
                    const gallery = new Gallery({
                        image,
                    })

                     await gallery.save();
                    return res.status(201).json({message:"ADDED SUCCESSFULLY"});
                }
                catch (err) {
                    console.log(err)
                    return res.status(500).json({ message: 'Server error' })
                }
                break;
            }

            case 'GET':
            {
                try {
                    await dbConnect();
                    const fetchGallery=await Gallery.find({});
                    return res.status(200).json({message:"Fetched Successfully",images:fetchGallery});
                }
                catch (err) {
                    return res.status(500).json({ message: 'Server error' })
                }
            }

            case 'DELETE':
                {
                    try {
                        await dbConnect();
                        const itemId = req.query.id;
                        const updatedItem = await Gallery.findByIdAndDelete(itemId);
                        return res.status(200).json({message:'Deleted Successfully'});
                    }
                    catch (err) {
                        return res.status(500).json({ message: 'Server error' })
                    }
                }




        default:
            return res.status(500).json({ message: "API NOT FOUND" })

    }
}