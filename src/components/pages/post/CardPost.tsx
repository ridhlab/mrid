import Link from "next/link";
import React from "react";
import { BiBookReader } from "react-icons/bi";
import { FaRegCalendarAlt } from "react-icons/fa";

interface IProps {
    title: string;
    description: string;
    date: string;
    href: string;
}

export default function CardPost({ date, description, title, href }: IProps) {
    return (
        <Link href={href}>
            <div className="rounded p-4 dark:bg-zinc-900 border dark:border-zinc-800 bg-zinc-100 border-zinc-300 flex flex-col gap-y-4">
                <h3 className="text-2xl font-semibold">{title}</h3>
                <p className="dark:text-zinc-400 text-zinc-500">
                    {description}
                </p>
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-x-2">
                        <FaRegCalendarAlt />
                        <p className="text-sm">{date}</p>
                    </div>
                </div>
            </div>
        </Link>
    );
}
