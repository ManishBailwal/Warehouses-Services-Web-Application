import dbConnect from "../../utils/dbConnect";
import User from "../../models/User";
import jwt from "jsonwebtoken";
export default async function handler(req, res) {
    console.log("LOGIN API")
    switch (req.method) {
        case 'POST':
            {
                try {
                    let { username, password } = req.body;
                    await dbConnect();
                    username=username.toLowerCase();
                    const user = await User.findOne({ username });
                    if (!user) return res.status(404).json({ message: 'User not found' });

                    if(user.password===password){
                        const token=jwt.sign({username},'thisIsALongSecretKey');
                        console.log(token)
                        return res.status(200).json({ message: 'Logged in Successfully',user:{username,token,_id:user._id} });
                    }

                    return res.status(401).json({ message: 'Wrong password' });
                }
                catch (err) {
                    return res.status(500).json({ message: 'Server error' })
                }
                break;
            }

        default:
            return res.status(500).json({ message: "API NOT FOUND" })

    }
}