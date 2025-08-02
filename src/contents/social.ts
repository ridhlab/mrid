import { SiCodewars, SiGmail, SiQuora } from "react-icons/si";
import { Profile } from "./profile";
import {
    FaGithub,
    FaInstagramSquare,
    FaLinkedin,
    FaMedium,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export const socialLinks = [
    {
        title: "Email",
        url: Profile.socialLinks.gmail,
        icon: SiGmail,
    },
    {
        title: "Github",
        url: Profile.socialLinks.github,
        icon: FaGithub,
    },
    {
        title: "Codewars",
        url: Profile.socialLinks.codewars,
        icon: SiCodewars,
    },
    {
        title: "Medium",
        url: Profile.socialLinks.medium,
        icon: FaMedium,
    },
    {
        title: "Linkedin",
        url: Profile.socialLinks.linkedin,
        icon: FaLinkedin,
    },
    {
        title: "Quora",
        url: Profile.socialLinks.quora,
        icon: SiQuora,
    },
];
