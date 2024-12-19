import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import { BlogServices } from "./blog.service";
import httpStatus from "http-status";


const createBlog = catchAsync(async (req:Request, res:Response) => {
    const result = await BlogServices.createBlogIntoDB(req.body)
    res.status(httpStatus.CREATED).json({
        success: true,
        message: 'Blog created successfully',
        statusCode: httpStatus.CREATED,
        data: result,
    })
})

export const BlogController = {
    createBlog,
}