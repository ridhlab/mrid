"use client";
import Image from "next/image";
import HeroesImage from "./HeroesImage";
import { Profile } from "@/contents/profile";
import { socialLinks } from "@/contents/social";
import { motion } from "framer-motion";
import Slide from "@/components/shared/Slide";

export default function HeroesSection() {
    return (
        <div className="mt-28 flex lg:flex-row justify-between flex-col">
            <div className="flex flex-col gap-y-12">
                <Slide delay={0.2}>
                    <div className="flex items-center gap-x-4">
                        <div className="relative">
                            <Image
                                src="/profile.png"
                                alt="profile-photo"
                                width={75}
                                height={75}
                                className="rounded-full border-2 dark:border-zinc-500 border-zinc-300 max-w-[75px]"
                            />
                            <div className="w-4 h-4 rounded-full bg-emerald-600 absolute right-[6px] bottom-0 border-2 dark:border-zinc-500 border-zinc-300 "></div>
                        </div>
                        <h1 className="text-4xl font-bold">
                            {Profile.headline}
                        </h1>
                    </div>
                </Slide>
                <Slide delay={0.4}>
                    <p className="dark:text-zinc-400 text-zinc-600">
                        {Profile.shortBio}
                    </p>
                </Slide>
                <Slide delay={0.6}>
                    <ul className="flex items-center flex-wrap gap-x-5 gap-y-4">
                        {socialLinks.map((val, index) => (
                            <li key={index}>
                                <a
                                    href={val.url}
                                    rel="noreferer noopener"
                                    target="_blank"
                                    className="flex items-center rounded p-2 bg-zinc-200 dark:bg-zinc-800 group"
                                >
                                    <val.icon
                                        className="flex-shrink-0 h-5 w-5 text-zinc-500 group-hover:dark:text-white group-hover:text-zinc-800 duration-300"
                                        aria-hidden="true"
                                    />{" "}
                                    &nbsp;
                                    {val.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </Slide>
            </div>
            <div className="w-96 lg:w-auto">
                <HeroesImage />
            </div>
        </div>
    );
}
