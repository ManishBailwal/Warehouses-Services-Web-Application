import dbConnect from "../../utils/dbConnect";
import Warehouse from "../../models/Warehouse";
export default async function handler(req, res) {
    switch (req.method) {
        case 'PUT':
            {
                try {
                    await dbConnect();
                    const itemId = req.query.id;
                    const {enabled}=req.body;
                    console.log(enabled);
                    const updatedItem = await Warehouse.findByIdAndUpdate(itemId, {enabled:!enabled}, {
                        new: true,
                    });
                    console.log(updatedItem);
                    return res.status(200).json({message:`${enabled ? 'Disabled Successfully': 'Enabled Successfully'}`});
                }
                catch (err) {
                    return res.status(500).json({ message: 'Server error' })
                }
            }

        default:
            return res.status(500).json({ message: "API NOT FOUND" })

    }
}