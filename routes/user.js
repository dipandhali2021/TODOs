import  Express  from "express";
import { getMyProfile,  login, logout, register} from "../controllers/user.js";
import { isAuthenticated } from "../middlewares/auth.js";


const router = Express.Router();


router.post("/new", register)
router.post("/login", login)
router.get("/logout", logout)
router.get("/me",isAuthenticated,getMyProfile)




export default router;