import dbConnect from "../../utils/dbConnect";
import Blog from "../../models/Blog";
export default async function handler(req, res) {
    switch (req.method) {
        case 'POST':
            {
                console.log(req.body)
                try {
                    await dbConnect();
                    const blog = await Blog.create({ ...req.body });


                    return res.status(201).json({
                        message: 'Blog created successfully',
                        data: blog,
                    });
                }
                catch (err) {
                    if (!err.statusCode) {
                        err.statusCode = 500;
                    }
                    if (!err.message) {
                        err.message = 'Internal Server Error'
                    }

                    return res.status(err.statusCode).json({ message: err.message })
                }
                break;
            }

        case 'GET':
            {
                await dbConnect();
                const blog = await Blog.findById(req.params.id);

                if (!blog) {
                    return res.status(404).json({
                        message: 'Blog not found',
                    });
                }
            
                res.status(200).json({
                    message: 'Blog fetched successfully',
                    data: blog,
                });
            }

        case 'DELETE':
            {

                break;
            }

        case 'PUT':
            {
                const blog = await Blog.findByIdAndUpdate(
                    req.body.id,
                    {
                        $set: {
                            ...req.body,
                        },
                    },
                    {
                        new: true,
                        runValidators: true,
                    }
                );

                if (!blog) {
                    return res.status(404).json({
                        message: 'Blog not found',
                    });
                }

                return res.status(200).json({
                    message: 'Blog updated successfully',
                    data: blog,
                });
            }




        default:
            return res.status(500).json({ message: "API NOT FOUND" })

    }
}