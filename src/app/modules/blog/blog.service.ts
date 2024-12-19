import { TBlog } from "./blog.interface";
import { Blog } from "./blog.model";

const createBlogIntoDB = async(blogData: TBlog) => {
    const result = (await Blog.create(blogData)).populate('author');
    return result;
}


export const BlogServices = {
    createBlogIntoDB,
}