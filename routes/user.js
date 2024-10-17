import { Router } from "express";
import { Userlogin, getProfile, logoutUser, registerUser, updateProfile } from "../controllers/user.js";
import { userAvatarUpload } from "../middlewares/upload.js";
import { hasPermission, isAuthenticated } from "../middlewares/auth.js";

// create a router
const userRouter = Router();

// Define routes
userRouter.post('/users/register', registerUser);

userRouter.post('/users/login', Userlogin);

userRouter.get('/users/me', isAuthenticated, hasPermission("get_profile"), getProfile);

userRouter.post('/users/logout', isAuthenticated, logoutUser);

userRouter.patch('/users/me', isAuthenticated,hasPermission("update_profile"), userAvatarUpload.single('avatar'), updateProfile);

// export router
export default userRouter;
