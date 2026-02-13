import { Router } from "express";
import { SpecialtyRoutes } from "../Module/Specialty/Specialty.route";
import { AuthRoutes } from "../Module/Auth/auth.route";
import { UserRoutes } from "../Module/user/user.route";
import { DoctorRoutes } from "../Module/doctor/doctor.route";


const router = Router();
router.use("/auth", AuthRoutes);
router.use("/specialty", SpecialtyRoutes)
router.use("/users", UserRoutes)
router.use("/doctors", DoctorRoutes)

export const IndexRoutes = router;