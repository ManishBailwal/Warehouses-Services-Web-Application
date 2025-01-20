import dbConnect from "../../utils/dbConnect";
import Blog from "../../models/Blog";
export default async function handler(req, res) {
    switch (req.method) {
        case 'POST':
            {
                break;
            }

        case 'GET':
            {
                const { fields } = req.body;
                await dbConnect();

                const blog = await Blog.find({}).select(fields);

                if (!blog) {
                    return res.status(404).json({
                        message: 'Blog not found',
                    });
                }

                return res.status(200).json({ message: 'Fetched Successfully', data: blog });
            }

        case 'DELETE':
            {

                break;
            }




        default:
            return res.status(500).json({ message: "API NOT FOUND" })

    }
}