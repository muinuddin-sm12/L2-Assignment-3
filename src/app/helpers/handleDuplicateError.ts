/* eslint-disable @typescript-eslint/no-explicit-any */
import { Response } from "express";
import httpStatus from "http-status";
import config from "../config";

export const handleDuplicateError = (err: any, res: Response) => {
    res.status(httpStatus.CONFLICT).json({
        success: false,
        message: err.errorResponse.errmsg,
        error: err,
        stack: config.node_env === 'development' ? err.stack : undefined,
    })
}