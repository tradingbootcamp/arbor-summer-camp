import { defineCollection, z } from "astro:content";

const postsCollection = defineCollection({
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			pubDate: z.date(),
			description: z.string(),
			author: z.object({
				name: z.string(),
				link: z.string(),
			}),
			image: z.object({
				source: image(),
				alt: z.string(),
			}),

			tags: z.array(z.string()),
		}),
});

const projectsCollection = defineCollection({
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			pubDate: z.date(),
			description: z.string(),
			link: z.string(),
			author: z.object({
				name: z.string(),
				link: z.string(),
			}),
			image: z.object({
				source: image(),
				alt: z.string(),
			}),
		}),
});

const branchesCollection = defineCollection({
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			shortDescription: z.string(),
			instructor: z.object({
				name: z.string(),
				image: z.object({
					source: image(),
					alt: z.string(),
					position: z.string().optional(),
				}),
				link: z.string().optional(),
			}),
			coverImage: z.object({
				source: image(),
				alt: z.string(),
			}),
			cost: z.string(),
			dates: z.string(),
			sponsor: z.object({
				name: z.string().optional(),
				link: z.string().optional(),
			}).optional(),
			isIncubator: z.boolean().default(false),
			purchaseLink: z.string().optional(),
			pubDate: z.date(),
			order: z.number().default(999),
		}),
});

const authorsCollection = defineCollection({
	schema: ({ image }) =>
		z.object({
			name: z.string(),
			description: z.string(),
			image: z.object({
				source: image(),
				alt: z.string(),
			}),
		}),
});

export const collections = {
	posts: postsCollection,
	projects: projectsCollection,
	branches: branchesCollection,
	authors: authorsCollection,
};
