"use client";

import { Mdx } from "@/components/shared/MdxComponent";
import Slide from "@/components/shared/Slide";

export default function PostContentSection({
    code,
    description,
    title,
}: {
    title: string;
    description: string;
    code: string;
}) {
    return (
        <Slide delay={0.2}>
            <div className="flex flex-col gap-y-20">
                <div className="flex flex-col gap-y-2 border-b border-zinc-300 dark:border-zinc-700 pb-4">
                    <h1 className="font-bold text-4xl">{title}</h1>
                    <p className="italic">{description}</p>
                </div>
                <Mdx code={code} />
            </div>
        </Slide>
    );
}
