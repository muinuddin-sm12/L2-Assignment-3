/* eslint-disable @typescript-eslint/no-explicit-any */
import { Response } from "express";
import config from "../config";

export const handleZodError = (err: any, res: Response) => {
    const issues = err.issues.map((item: any) => {
        return {
            path: item.path.join('>'),
            message: item.message
        }
    })
    res.status(400).json({
        success: false,
        message: err.message,
        issues,
        error: err,
        stack: config.node_env === 'development' ? err.stack : undefined,
    })
}