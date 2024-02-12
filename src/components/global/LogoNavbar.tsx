"use client";
import { ROUTE } from "@/constants/route";
import { uppercaseFirstLetter } from "@/helpers/string";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function LogoNavbar() {
    const pathname = usePathname();

    const titlePath =
        pathname === ROUTE.HOME
            ? ""
            : uppercaseFirstLetter(pathname.split("/")[1]);

    return (
        <h2 className="w-36">
            <Link href={ROUTE.HOME}>~</Link> /{" "}
            {titlePath ? (
                <Link className="text-emerald-600" href={pathname}>
                    {titlePath}
                </Link>
            ) : null}
        </h2>
    );
}
