import dbConnect from "../../utils/dbConnect";
import Blog from "../../models/Blog";
export default async function handler(req, res) {
    switch (req.method) {
        case 'POST':
            {
                await dbConnect();
                req.body=JSON.parse(req.body);
                const { condition } = req.body;
                const blog = await Blog.find(condition);
                if (!blog) {
                    return res.status(404).json({
                        message: 'Blog not found',
                    });
                }
                return res.status(200).json({
                    message: 'Blog fetched',
                    data: blog,
                });
                break;
            }

        case 'GET':
            {
               
            }

        case 'DELETE':
            {

                break;
            }




        default:
            return res.status(500).json({ message: "API NOT FOUND" })

    }
}