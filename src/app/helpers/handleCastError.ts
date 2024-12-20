/* eslint-disable @typescript-eslint/no-explicit-any */
import { Response } from "express";
import config from "../config";

export const handleCastError = (err: any, res:Response) => {
    res.status(400).json({
        success: false,
        message: err.message,
        error: err,
        stack: config.node_env === 'development' ? err.stack : undefined,
    })
}