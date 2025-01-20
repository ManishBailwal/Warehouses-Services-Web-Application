import dbConnect from "../../utils/dbConnect";
import Warehouse from "../../models/Warehouse";
export default async function handler(req, res) {
    console.log("WAREHOUSE API")
    switch (req.method) {
        case 'GET':
            {
                try {
                    await dbConnect();
                    const fetchWarehouses=await Warehouse.find({});
                    return res.status(200).json({message:"Fetched Successfully",warehouses:fetchWarehouses});
                }
                catch (err) {
                    return res.status(500).json({ message: 'Server error' })
                }
            }

        default:
            return res.status(500).json({ message: "API NOT FOUND" })

    }
}