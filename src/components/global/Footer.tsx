import { Profile } from "@/contents/profile";

export default function Footer() {
    return (
        <footer className="px-6 md:px-20 mt-28 py-12 border-t border-zinc-300 dark:border-zinc-700 md:text-base text-sm">
            <div className="max-w-6xl mx-auto dark:text-zinc-400 text-zinc-600">
                Copyright &copy;{" "}
                <a href={Profile.socialLinks.github} target="_blank">
                    {Profile.fullname}
                </a>{" "}
                {new Date().getFullYear()} All rights Reserved
            </div>
        </footer>
    );
}
