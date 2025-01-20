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
                const blogs = await Blog.find();

                res.status(200).json({
                    message: 'Blogs fetched successfully',
                    data: blogs,
                });
            }

        case 'DELETE':
            {

                break;
            }

        default:
            return res.status(500).json({ message: "API NOT FOUND" })

    }
}