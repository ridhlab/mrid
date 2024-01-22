import CardWriter from "@/components/pages/post/CardWriter";
import PostContentSection from "@/components/pages/post/PostContentSection";
import WriterSection from "@/components/pages/post/WriterSection";
import { Mdx } from "@/components/shared/MdxComponent";
import Slide from "@/components/shared/Slide";
import { ROUTE } from "@/constants/route";
import { allPosts } from "contentlayer/generated";
import Link from "next/link";
import { TbArrowBackUp } from "react-icons/tb";

interface PostProps {
    params: {
        slug: string[];
    };
}

async function getPostFromParams(params: PostProps["params"]) {
    const slug = params?.slug?.join("/");
    const post = allPosts.find((post) => post.slugAsParams === slug);

    if (!post) {
        null;
    }

    return post;
}

export async function generateStaticParams(): Promise<{ slug: string }[]> {
    return allPosts.map((post) => ({
        slug: post.slugAsParams.split("/")[1],
    }));
}

export default async function PostDetail({ params }: PostProps) {
    const post = await getPostFromParams(params);
    console.log({ post });
    return (
        <main className="my-12 flex flex-col gap-y-4">
            <div className="flex justify-start">
                <Link
                    href={ROUTE.POST}
                    className="flex items-center gap-x-2 hover:text-emerald-600 transition-all"
                >
                    <TbArrowBackUp /> <p>Go Back</p>
                </Link>
            </div>
            <div className="flex gap-x-8">
                <PostContentSection
                    code={post?.body?.code ?? ""}
                    description={post?.description ?? ""}
                    title={post?.title ?? ""}
                />
                <WriterSection date={post?.date ?? ""} />
            </div>
        </main>
    );
}
