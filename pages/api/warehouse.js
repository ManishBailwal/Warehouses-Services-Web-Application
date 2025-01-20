import dbConnect from "../../utils/dbConnect";
import Warehouse from "../../models/Warehouse";
export default async function handler(req, res) {
    console.log("WAREHOUSE API")
    switch (req.method) {
        case 'POST':
            {
                console.log(req.body)
                const { address, type, format, city, state, imageUrl,zone,size,category,owner,addedBy,partlyAvailable,price } = req.body;
                try {
                    await dbConnect();
                    const warehouse = new Warehouse({
                        address,
                        owner,
                        type,
                        format,
                        city,
                        state,
                        zone,
                        size,
                        category,
                        addedBy,
                        partlyAvailable,
                        price,
                        enabled: addedBy==='owner' ? true : false,
                        imageUrl: imageUrl ? imageUrl : 'https://res.cloudinary.com/da75fckow/image/upload/v1684146205/client-uploads/dummY_warehouse_nnwsfa.avif',
                    })

                    console.log(warehouse);


                    const savedDocument = await warehouse.save();
                    return res.status(201).json(savedDocument);
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
                    const { id } = req.query;
                    await dbConnect();
                    console.log(id);
                    const fetchedWarehouse = await Warehouse.findById(id);
                    console.log(fetchedWarehouse)
                    if (!fetchedWarehouse) return res.status(200).json({ message: 'Wrong ID' });
                    return res.status(200).json({ message: "Fetched Successfully", warehouse: fetchedWarehouse });
                }
                catch (err) {
                    console.log(err)
                    return res.status(500).json({ message: 'Server error' })
                }
                break;
            }

        case 'PUT':
            {
                console.log("UPDATE THE WAREHOUSE")
                const { address, type, format, city, state, imageUrl,zone,size,category,addedBy,partlyAvailable,price } = req.body;
                console.log(partlyAvailable);
                console.log(price);
                try {
                    await dbConnect();
                    const newItem = {
                        address,
                        type,
                        format,
                        city,
                        state,
                        zone,
                        size,
                        addedBy,
                        partlyAvailable,
                        price,
                        enabled: addedBy==='owner' ? true : false,
                        category,
                        imageUrl: imageUrl ? imageUrl : 'https://res.cloudinary.com/da75fckow/image/upload/v1684146205/client-uploads/dummY_warehouse_nnwsfa.avif'
                    }

                    const itemId = req.query.id;

                    console.log(newItem)
                    const updatedItem = await Warehouse.findByIdAndUpdate(itemId, newItem, {
                        new: true,
                    });

                    if (!updatedItem) {
                        return res.status(404).json({ error: 'Item not found' });
                    }

                    res.status(200).json(updatedItem);

                }
                catch (err) {
                    console.log(err)
                    return res.status(500).json({ message: 'Server error' })
                }
                break;
            }

            case 'DELETE':
                {
                    try {
                        await dbConnect();
                        const itemId = req.query.id;
                        const updatedItem = await Warehouse.findByIdAndDelete(itemId);
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