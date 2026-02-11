import { Router } from "express";
import { SpecialtyRoutes } from "../Module/Specialty/Specialty.route";
import { AuthRoutes } from "../Module/Auth/auth.route";


const router = Router();
router.use("/auth", AuthRoutes);
router.use("/specialty", SpecialtyRoutes)


export const IndexRoutes = router;