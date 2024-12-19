/* eslint-disable @typescript-eslint/no-explicit-any */
import { Response } from "express";
import httpStatus from "http-status";

export const handleDuplicateError = (err: any, res: Response) => {
    res.status(httpStatus.CONFLICT).json({
        success: false,
        message: err.errorResponse.errmsg,
        error: err
    })
}