import dbConnect from "../../../utils/dbConnect";
import Blog from "../../../models/Blog";
export default async function handler(req, res) {
    switch (req.method) {
        case 'GET':
            {
                const { id } = req.query;
                console.log(id)
                await dbConnect();
                const blog = await Blog.findById(id);

                if (!blog) {
                    return res.status(404).json({
                        message: 'Blog not found',
                    });
                }

                return res.status(200).json({
                    message: 'Blog fetched successfully',
                    data: blog,
                });
            }

        default:
            return res.status(500).json({ message: "API NOT FOUND" })

    }
}