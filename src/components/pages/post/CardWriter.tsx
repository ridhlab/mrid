"use client";

import { Profile } from "@/contents/profile";
import { useWindowScrollPositions } from "@/hooks/useWindowScrollPosition";
import Image from "next/image";
import { FaRegCalendarAlt } from "react-icons/fa";

const SIZE_PHOTO_PROFILE = 50;

export default function CardWriter({ date }: { date: string }) {
    const { scrollY } = useWindowScrollPositions();
    return (
        <div
            className={`rounded sticky top-10 ${
                scrollY > 100 ? "top-28" : "top-10"
            }`}
        >
            <div className="flex flex-col gap-y-6">
                <h4 className="dark:text-zinc-400 text-zinc-600">Written by</h4>
                <div className=" h-[1px] bg-zinc-300 dark:bg-zinc-800"></div>
                <div className="flex gap-x-2 items-center">
                    <div
                        style={{
                            width: SIZE_PHOTO_PROFILE,
                            height: SIZE_PHOTO_PROFILE,
                        }}
                    >
                        <div className="relative ">
                            <Image
                                src="/profile.png"
                                alt="profile-photo"
                                width={SIZE_PHOTO_PROFILE}
                                height={SIZE_PHOTO_PROFILE}
                                className="rounded-full border-2 dark:border-zinc-500 border-zinc-300 max-w-[75px]"
                            />
                            <div className="w-2 h-2 rounded-full bg-emerald-600 absolute right-[6px] bottom-0 border dark:border-zinc-500 border-zinc-300 "></div>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <h5>{Profile.fullname}</h5>
                        <a
                            href={Profile.socialLinks.github}
                            target="_blank"
                            className="text-sm dark:text-zinc-400 text-zinc-600"
                        >
                            @ridhlab
                        </a>
                    </div>
                </div>
                <div className=" h-[1px] bg-zinc-300 dark:bg-zinc-800"></div>
                <div className="flex gap-x-4">
                    <FaRegCalendarAlt className="dark:text-zinc-400 text-zinc-600" />
                    <p className="text-sm dark:text-zinc-400 text-zinc-600">
                        {date}
                    </p>
                </div>
            </div>
        </div>
    );
}
