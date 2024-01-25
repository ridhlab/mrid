import PostTemplate from "@/components/template/post/Post";
import { Profile } from "@/contents/profile";
import { allPosts } from "contentlayer/generated";
import { compareDesc } from "date-fns";
import { Metadata } from "next";
import React from "react";

const options = {
    title: `${Profile.fullname} | Posts`,
    url: "https://mrid.dev/post",
    description: `Read the post that have benn writtern by ${Profile.fullname}`,
};

export const metadata: Metadata = {
    title: options.title,
    metadataBase: new URL(options.url),
    description: options.description,
    openGraph: {
        title: options.title,
        url: options.url,
        siteName: "mrid.dev",
        locale: "id-ID",
        type: "website",
        description: options.description,
        // TODO: Define og image
        // images: options.ogImage,
    },
    alternates: {
        canonical: options.url,
    },
};

export default function PostPage() {
    const posts = allPosts.sort((a, b) =>
        compareDesc(new Date(a.date ?? ""), new Date(b.date ?? ""))
    );
    return <PostTemplate posts={posts} />;
}
