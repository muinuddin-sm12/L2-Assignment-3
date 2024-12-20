/* eslint-disable @typescript-eslint/no-explicit-any */
import { Response } from 'express';
import config from '../config';

export const handleValidationError = (err: any, res: Response) => {
  const issues = Object.values(err.error).map((item: any) => {
    return {
      path: item.path,
      message: item.message,
    };
  });
  res.status(400).json({
    success: false,
    message: err.message,
    issues,
    error: err,
    stack: config.node_env === 'development' ? err.stack : undefined,
  });
};
