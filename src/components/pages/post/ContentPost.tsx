"use client";

import { useMediaQuery } from "react-responsive";
import PostContentSection from "./PostContentSection";
import WriterSection from "./WriterSection";
import { useMounted } from "@/hooks/useMounted";

export default function ContentPost({
    code,
    date,
    description,
    title,
}: {
    code: string;
    description: string;
    title: string;
    date: string;
}) {
    return (
        <div className="flex lg:gap-x-8 lg:flex-row flex-col gap-y-12">
            <PostContentSection
                code={code}
                description={description}
                title={title}
                date={date}
            />

            <WriterSection date={date} />
        </div>
    );
}
