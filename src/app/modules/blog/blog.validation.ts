import { z } from "zod";

const blogValidationSchema = z.object({
    title: z.string().min(1),
    content: z.string().min(1)
})

export const BlogValidations = {
    blogValidationSchema,
}