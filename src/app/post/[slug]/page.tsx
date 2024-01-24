import PostDetailTemplate from "@/components/template/post/PostDetail";
import { allPosts } from "contentlayer/generated";
import { Metadata } from "next";

interface PostProps {
    params: {
        slug: string;
    };
}

async function getPostFromParams(params: PostProps["params"]) {
    const slug = params?.slug;
    const post = allPosts.find((post) => post.slugAsParams === slug);

    if (!post) {
        null;
    }

    return post;
}

export async function generateMetadata({
    params,
}: PostProps): Promise<Metadata> {
    const post = await getPostFromParams(params);

    return {
        title: `${post?.title ?? ""}`,
        metadataBase: new URL(`https://mrid.dev/post/${post?.slug ?? ""}`),
        description: post?.description ?? "",
        // TODO: Add metadata publisher and keyword
        // publisher: post?.,
        // keywords: post.tags,
        alternates: {
            canonical: `https://mrid.dev/post/${post?.slug ?? ""}`,
        },
        openGraph: {
            url: `https://mrid.dev/post/${post?.slug ?? ""}`,
            title: post?.title ?? "",
            description: post?.description ?? "",
            type: "article",
            siteName: "mrid.dev",
            // TODO: Add author and tag
            // authors: post.author.name,
            // tags: post.tags,
            // publishedTime: post?._createdAt??"",
            // modifiedTime: post._updatedAt || "",
        },
    };
}

export async function generateStaticParams(): Promise<{ slug: string }[]> {
    return allPosts.map((post) => ({
        slug: post.slugAsParams.split("/")[1],
    }));
}

export default async function PostDetail({ params }: PostProps) {
    const post = await getPostFromParams(params);
    return (
        <PostDetailTemplate
            code={post?.body?.code ?? ""}
            date={post?.date ?? ""}
            description={post?.description ?? ""}
            title={post?.title ?? ""}
        />
    );
}
