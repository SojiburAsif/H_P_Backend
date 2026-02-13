
import status from "http-status";
import { catchAsync } from "../../shared/catchAsync";
import { Request, Response } from "express";
import { DoctorService } from "./doctor.service";
import { sendResponse } from "../../shared/sendResponse";

const getAllDoctors = catchAsync(
    async (req: Request, res: Response) => {
        const result = await DoctorService.getAllDoctors();
        sendResponse(res, {
            httpStatusCode: status.OK,
            success: true,
            message: "Doctors fetched successfully",
            data: result,
        });
    }
)

// const getSingleDoctor = catchAsync(
//     async (req: Request, res: Response) => {
//         const result = await DoctorService.getSingleDoctor(req.params.id);
//         sendResponse(res, {
//             httpStatusCode: status.OK,
//             success: true,
//             message: "Doctor fetched successfully",
//             data: result,
//         });
//     }
// )

export const DoctorController = {
    getAllDoctors,
    // getSingleDoctor,
}