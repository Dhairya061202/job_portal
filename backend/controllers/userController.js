import { User } from "../models/userModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
  try {
    const { fullname, email, phoneNumber, password, role } = req.body;
    
    if (!fullname || !email || !phoneNumber || !password || !role) {
      return res.status(404).json({
        message: "Please enter all required fields.",
        success: false,
      });
    }
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({
        message: "User already exists with this email.",
        success: false,
      });
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    await User.create({
      fullname,
      email,
      phoneNumber,
      password: hashedPassword,
      role,
    });
    return res.status(201).json({
      message: "User Registered successfully",
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};

//login
export const login = async (req, res) => {
  try {
      const { email, password, role } = req.body;
      
      if (!email || !password || !role) {
          return res.status(400).json({
              message: "Something is missing",
              success: false
          });
      };
      let user = await User.findOne({ email });
      if (!user) {
          return res.status(400).json({
              message: "Incorrect email or password.",
              success: false,
          })
      }
      const isPasswordMatch = await bcrypt.compare(password, user.password);
      if (!isPasswordMatch) {
          return res.status(400).json({
              message: "Incorrect email or password.",
              success: false,
          })
      };
      // check role is correct or not
      if (role !== user.role) {
          return res.status(400).json({
              message: "Account doesn't exist with current role.",
              success: false
          })
      };

      const tokenData = {
          userId: user._id
      }
      const token = await jwt.sign(tokenData, process.env.SECRET_KEY, { expiresIn: '1d' });

      user = {
          _id: user._id,
          fullname: user.fullname,
          email: user.email,
          phoneNumber: user.phoneNumber,
          role: user.role,
          profile: user.profile
      }

      return res.status(200).cookie("token", token, { maxAge: 1 * 24 * 60 * 60 * 1000, httpsOnly: true, sameSite: 'None', Secure:'production' }).json({
          message: `Welcome back ${user.fullname}`,
          user,
          success: true
      })
  } catch (error) {
      console.log(error);
  }
}


//logout
export const logout = async (req,res)=>{
    try {

        return res.status(200).cookie("token","",{maxAge:0}).json({
            message:"Logged out successfully",
            success:true
        })
        
    } catch (error) {
        console.log(error);
        
    }
}

//updateProfile
export const updateProfile = async(req,res)=>{
    try {
        const {fullname,email,phoneNumber,bio,skills}=req.body;
        const file = req.file;
        

          //cloudinary here
          let skillsArray
          if(skills){
            skillsArray = skills.split(',');
          }
          
          const userId = req.id; // middleware authentication
          let user = await User.findById(userId);

          if(!user){
            return res.status(400).json({
                message: "User not found",
                success: false,
            })
          }
          
          //updating data

          if(fullname) user.fullname = fullname
          if(email) user.email = email
          if(phoneNumber)  user.phoneNumber = phoneNumber
          if(bio) user.profile.bio = bio
          if(skills) user.profile.skills = skillsArray
        
          //resume comes later here

          await user.save();

          user = {
            _id: user._id,
            fullname: user.fullname,
            email: user.email,
            phoneNumber: user.phoneNumber,
            role: user.role,
            profile: user.profile,
          };
          
          return res.status(200).json({
            message:"Profile updated successfully",
            user,
            success:true
          })
        
         } catch (error) {
        console.log(error);
        
    }
}