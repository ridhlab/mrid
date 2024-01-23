import { defineDocumentType, makeSource } from "contentlayer/source-files";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";

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
            resolve: (doc) => {
                const slug = doc._raw.flattenedPath
                    .split("/")[1]
                    .split("-")
                    .slice(1)
                    .join("-");
                return `/${doc._raw.flattenedPath.split("/")[0]}/${slug}`;
            },
        },
        slugAsParams: {
            type: "string",
            resolve: (doc) =>
                doc._raw.flattenedPath
                    .split("/")[1]
                    .split("-")
                    .slice(1)
                    .join("-"),
        },
    },
}));

export default makeSource({
    contentDirPath: "src/contents",
    documentTypes: [Post],
    mdx: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [
            rehypeSlug,
            [
                rehypePrettyCode as unknown as any,
                {
                    theme: "material-theme-ocean",
                    onVisitLine(node: any) {
                        // Prevent lines from collapsing in `display: grid` mode, and allow empty
                        // lines to be copy/pasted
                        if (node.children.length === 0) {
                            node.children = [{ type: "text", value: " " }];
                        }
                    },
                    onVisitHighlightedLine(node: any) {
                        node.properties.className.push("line--highlighted");
                    },
                    onVisitHighlightedWord(node: any) {
                        node.properties.className = ["word--highlighted"];
                    },
                },
            ],
            [
                rehypeAutolinkHeadings,
                {
                    properties: {
                        className: ["subheading-anchor"],
                        ariaLabel: "Link to section",
                    },
                },
            ],
        ],
    },
});
