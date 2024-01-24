import Link from "next/link";
import { TbArrowBackUp } from "react-icons/tb";
import { default as MainContentPost } from "@/components/pages/post/ContentPost";
import { ROUTE } from "@/constants/route";

export default function PostDetailTemplate({
    code,
    date,
    description,
    title,
}: {
    code: string;
    date: string;
    description: string;
    title: string;
}) {
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
                code={code}
                date={date}
                description={description}
                title={title}
            />
        </main>
    );
}
