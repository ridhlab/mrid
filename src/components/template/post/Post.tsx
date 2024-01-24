"use client";
import CardPost from "@/components/pages/post/CardPost";
import Slide from "@/components/shared/Slide";
import { allPosts } from "contentlayer/generated";

export default function PostTemplate() {
    return (
        <main className="my-12">
            <div className="max-w-[40rem] mx-auto flex flex-col gap-y-8">
                <Slide delay={0.2}>
                    <h2 className="md:text-4xl text-3xl font-bold">Posts</h2>
                </Slide>
                <Slide delay={0.4}>
                    <ul className="flex flex-col gap-y-4">
                        {allPosts.map((post, index) => (
                            <li key={post._id}>
                                <CardPost
                                    date={post.date ?? ""}
                                    description={post.description ?? ""}
                                    title={post.title}
                                    href={`/post/${post.slugAsParams}`}
                                />
                            </li>
                        ))}
                    </ul>
                </Slide>
            </div>
        </main>
    );
}
