import QueryBuilder from '../../builder/QueryBuilder';
import { blogSearchableFields } from './blog.constant';
import { TBlog } from './blog.interface';
import { Blog } from './blog.model';

const createBlogIntoDB = async (blogData: TBlog) => {
  const result = (await Blog.create(blogData)).populate('author');
  return result;
};
const getAllBlogsFromDB = async (query: Record<string, unknown>) => {
  const blogQuery = new QueryBuilder(Blog.find().populate('author'), query)
    .search(blogSearchableFields)
    .filter()
    .sortBy();
  const result = await blogQuery.modelQuery;
  return result;
};
const updateBlog = async (id: string, payload:Partial<TBlog>)=> {
    const result = await Blog.findByIdAndUpdate(id, payload , {new:true}).populate('author');
    return result;
}
const deleteBlog = async(id:string) => {
    const result= await Blog.findByIdAndDelete(id, {new:true});
    return result 
}

export const BlogServices = {
  createBlogIntoDB,
  getAllBlogsFromDB,
  updateBlog,
  deleteBlog
};
