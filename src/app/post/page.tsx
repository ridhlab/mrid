"use client";

import CardPost from "@/components/pages/post/CardPost";
import Slide from "@/components/shared/Slide";
import { allPosts, Post } from "contentlayer/generated";
import React from "react";

export default function BlogPage() {
    return (
        <main className="my-12">
            <div className="max-w-[40rem] mx-auto flex flex-col gap-y-8">
                <Slide delay={0.2}>
                    <h2 className="text-4xl font-bold">Posts</h2>
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
