import Angular from "./icons/Angular.astro";
import Java from "./icons/Java.astro";
import Js from "./icons/Js.astro";
import NextJS from "./icons/NextJS.astro";
import Php from "./icons/Php.astro";
import React from "./icons/React.astro";
import Tailwind from "./icons/Tailwind.astro";

export const TAGS = {
    NEXT: {
        name: "Next.js",
        class: "bg-black text-white",
        icon: NextJS,
    },
    TAILWIND: {
        name: "Tailwind CSS",
        class: "bg-[#003159] text-white",
        icon: Tailwind,
    },
    REACT: {
        name: "React",
        class: "bg-[#003159] text-white",
        icon: React,
    },
    REACT_NATIVE: {
        name: "React Native",
        class: "bg-[#003159] text-white",
        icon: React,
    },
    PHP: {
        name: "Php",
        class: "bg-[#505c94] text-white",
        icon: Php,
    },
    JS: {
        name: "Javascript",
        class: "bg-[#f0da4f] text-black",
        icon: Js,
    },
    JAVA: {
        name: "Java",
        class: "bg-[#6df297] text-black",
        icon: Java,
    },
    ANGULAR: {
        name: "Angular.js",
        class: "bg-red-600 text-white",
        icon: Angular,
    },
};
