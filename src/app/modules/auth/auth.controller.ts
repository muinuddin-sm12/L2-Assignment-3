import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import { AuthServices } from "./auth.service";
import httpStatus from "http-status";

const register = catchAsync(async(req: Request, res:Response) => {
    const result = await AuthServices.register(req.body);
    res.status(httpStatus.CREATED).json({
        success: true, 
        message: 'User registered successfully',
        statusCode: httpStatus.CREATED,
        data: result,
    })
})

export const AuthController = {
    register,
}