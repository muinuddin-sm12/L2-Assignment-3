/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { ErrorRequestHandler } from "express";
import { handleZodError } from "../helpers/handleZodError";
import mongoose from "mongoose";
import { handleCastError } from "../helpers/handleCastError";
import { handleValidationError } from "../helpers/handleValidationError";
import { handleDuplicateError } from "../helpers/handleDuplicateError";
import { handleGenericError } from "../helpers/handleGenericError";

const globalErrorHandler: ErrorRequestHandler = (err, req, res, _next) => {
    if(err.name && err.name === 'ZodError'){
        handleZodError(err, res);
    }else if(err instanceof mongoose.Error.CastError){
        handleCastError(err, res);
    }else if(err instanceof mongoose.Error.ValidationError){
        handleValidationError(err, res);
    }else if(err.code && err.code === 11000){
        handleDuplicateError(err, res)
    }else if(err instanceof Error) {
        handleGenericError(err, res)
    }
}
export default globalErrorHandler;