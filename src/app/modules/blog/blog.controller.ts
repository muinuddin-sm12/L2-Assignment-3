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
const getAllBlogs = catchAsync(async(req: Request, res: Response) => {
    const result = await BlogServices.getAllBlogsFromDB(req.query);
    res.status(200).json({
        success: true,
        message: 'Blogs fetched successfully',
        statusCode: httpStatus.OK,
        data: result,
    })
})
const updateBlog = catchAsync(async(req: Request, res: Response)=> {
    const id = req.params.id;
    const payload = req.body;
    const result = await BlogServices.updateBlog(id, payload)
    res.status(httpStatus.OK).json({
        success: true,
        message: 'Blog updated successfully',
        statusCode: httpStatus.OK,
        data: result,
    })
})
const deleteBlog = catchAsync(async(req: Request, res: Response) => {
    const id = req.params.id;
    await BlogServices.deleteBlog(id);
    res.status(httpStatus.OK).json({
        success: true,
        message: 'Blog deleted successfully',
        statusCode: httpStatus.OK,
    })
})

export const BlogController = {
    createBlog,
    getAllBlogs,
    updateBlog,
    deleteBlog
}