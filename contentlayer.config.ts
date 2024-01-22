import { defineDocumentType, makeSource } from "contentlayer/source-files";

export const Post = defineDocumentType(() => ({
    name: "Post",
    filePathPattern: "posts/**/*.mdx",
    contentType: "mdx",
    fields: {
        title: {
            type: "string",
            required: true,
        },
        description: {
            type: "string",
        },
        date: {
            type: "string",
        },
        published: {
            type: "boolean",
            default: true,
        },
    },
    computedFields: {
        slug: {
            type: "string",
            resolve: (doc) => `/${doc._raw.flattenedPath}`,
        },
        slugAsParams: {
            type: "string",
            resolve: (doc) =>
                doc._raw.flattenedPath.split("/").slice(1).join("/"),
        },
    },
}));

export default makeSource({
    contentDirPath: "src/contents",
    documentTypes: [Post],
});
