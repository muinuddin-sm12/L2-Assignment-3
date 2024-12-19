import { Router } from "express";
import { BlogController } from "./blog.controller";

const router = Router();

router.post('/', BlogController.createBlog)
router.get('/', BlogController.getAllBlogs)

export const BlogRoutes = router;