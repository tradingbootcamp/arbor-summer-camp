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
				source: z.union([image(), z.string()]),
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
				source: z.union([image(), z.string()]),
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
					source: z.union([image(), z.string()]),
					alt: z.string(),
					position: z.string().optional(),
				}),
				link: z.string().optional(),
			}),
			coverImage: z.object({
				source: z.union([image(), z.string()]),
				alt: z.string(),
				position: z.string().optional(),
			}),
			pageImage: z.object({
				source: z.union([image(), z.string()]),
				alt: z.string(),
				position: z.string().optional(),
			}).optional(),
			cost: z.string(),
			dates: z.string(),
			dates_long: z.string(),
			times: z.string(),
			schedule: z.array(
				z.object({
					day: z.enum(["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]),
					activities: z.array(
						z.object({
							name: z.string(),
							startTime: z.string(), // Format: "HH:MM" (24-hour)
							endTime: z.string(),   // Format: "HH:MM" (24-hour)
							type: z.enum(["session", "break", "meal"]).default("session"),
							description: z.string().optional(),
						})
					),
				})
			).optional(),
			sponsor: z.object({
				name: z.string().optional(),
				link: z.string().optional(),
			}).optional(),
			isIncubator: z.boolean().default(false),
			purchaseLink: z.string().optional().default("https://www.havenbookings.space/festival-season#branches"),
			pubDate: z.date(),
			order: z.number().default(999),
			duration: z.number().default(4), // Number of days the branch runs
		}),
});

const authorsCollection = defineCollection({
	schema: ({ image }) =>
		z.object({
			name: z.string(),
			description: z.string(),
			image: z.object({
				source: z.union([image(), z.string()]),
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
