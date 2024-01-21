import { PiFileSqlFill } from "react-icons/pi";
import {
    SiDjango,
    SiExpress,
    SiFirebase,
    SiJavascript,
    SiLaravel,
    SiLinux,
    SiNestjs,
    SiNextdotjs,
    SiNodedotjs,
    SiPhp,
    SiPython,
    SiReact,
    SiSupabase,
    SiTypescript,
    SiVite,
    SiVuedotjs,
} from "react-icons/si";

export enum TechStackEnum {
    Javascript = "Javascript",
    Typescript = "Typescript",
    NodeJS = "NodeJS",
    ReactJS = "ReactJS",
    NextJS = "NextJS",
    VueJS = "VueJS",
    Vite = "Vite",
    Firebase = "Firebase",
    Supabase = "Supabase",
    PHP = "PHP",
    Laravel = "Laravel",
    ExpressJS = "ExpressJS",
    NestJS = "NestJS",
    Python = "Python",
    Django = "Django",
    SQL = "SQL",
    Linux = "Linux",
}

export const TechStackIcon = {
    [TechStackEnum.Javascript]: SiJavascript,
    [TechStackEnum.Typescript]: SiTypescript,
    [TechStackEnum.NodeJS]: SiNodedotjs,
    [TechStackEnum.ReactJS]: SiReact,
    [TechStackEnum.NextJS]: SiNextdotjs,
    [TechStackEnum.VueJS]: SiVuedotjs,
    [TechStackEnum.Vite]: SiVite,
    [TechStackEnum.Firebase]: SiFirebase,
    [TechStackEnum.Supabase]: SiSupabase,
    [TechStackEnum.PHP]: SiPhp,
    [TechStackEnum.Laravel]: SiLaravel,
    [TechStackEnum.ExpressJS]: SiExpress,
    [TechStackEnum.NestJS]: SiNestjs,
    [TechStackEnum.Python]: SiPython,
    [TechStackEnum.Django]: SiDjango,
    [TechStackEnum.SQL]: PiFileSqlFill,
    [TechStackEnum.Linux]: SiLinux,
};
