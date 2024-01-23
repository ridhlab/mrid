import { default as MainContentPost } from "@/components/pages/post/ContentPost";
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
            <MainContentPost
                code={post?.body?.code ?? ""}
                date={post?.date ?? ""}
                description={post?.description ?? ""}
                title={post?.title ?? ""}
            />
        </main>
    );
}
