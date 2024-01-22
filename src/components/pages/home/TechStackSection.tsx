import { Profile } from "@/contents/profile";
import { TechStackIcon } from "@/contents/tech-stack";

export default function TechStackSection() {
    return (
        <div className="flex flex-col gap-y-4 -mt-64 lg:mt-0">
            <h2 className="font-semibold text-3xl">
                Tech stack that I haved explore
            </h2>
            <ul className="flex items-center flex-wrap gap-x-5 gap-y-4">
                {Profile.techStack.map((tech, index) => {
                    const Icon = TechStackIcon[tech];
                    return (
                        <li
                            key={index}
                            className="flex items-center rounded p-2 gap-x-2"
                        >
                            <Icon />
                            {tech}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
