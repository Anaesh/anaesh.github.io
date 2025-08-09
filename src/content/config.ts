import { defineCollection, z } from 'astro:content';

const experience = defineCollection({
  type: 'content',
  schema: z.object({
    date: z.string(),
    role: z.string(),
    company: z.string(),
    description: z.string(),
    techStack: z.array(z.string()).optional(),
    projects: z.object({
      description: z.string(),
      techStacks: z.array(z.string()),
      projects: z.array(z.object({
        name: z.string(),
        description: z.string()
      }))
    }).optional()
  })
});

const education = defineCollection({
  type: 'content',
  schema: z.object({
    date: z.string(),
    degree: z.string(),
    institution: z.string(),
    score: z.string()
  })
});

const skills = defineCollection({
  type: 'content',
  schema: z.object({
    categories: z.array(z.object({
      name: z.string(),
      skills: z.array(z.string())
    }))
  })
});

export const collections = {
  experience,
  education,
  skills
};