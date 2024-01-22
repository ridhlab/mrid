"use client";

import Slide from "@/components/shared/Slide";
import CardWriter from "./CardWriter";

export default function WriterSection({ date }: { date: string }) {
    return (
        <Slide delay={0.8} className="w-[32rem]">
            <CardWriter date={date} />
        </Slide>
    );
}
