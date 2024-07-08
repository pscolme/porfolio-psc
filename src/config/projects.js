import { TAGS } from './tags';

export const PROJECTS = [
    {
        title: "Centro de control ferroviario ligero",
        description: "Desarrollo y mantenimiento del centro de control ferroviario web de Siemens. Primer centro de control ferroviario que da el salto a la nube.",
        link: "https://www.lavanguardia.com/local/barcelona/20220926/8542945/control-ferroviario-da-salto-nube.html",
        image: "/projects/lwhmi.jpeg",
        tags: [TAGS.ANGULAR],
    },
    {
        title: "ChatGPT - Local",
        description: "Chat de inteligencia artificial totalmente en local, sin costes y privado.",
        link: "https://chatgpt-local-js.vercel.app/",
        github: "https://github.com/colmenerohub/chatgpt-local-js",
        image: "/projects/chatgpt-local.webp",
        tags: [TAGS.JS],
    },
    {
        title: "Whatsapp Clone",
        description: "Aplicación movil, estilo Whatsapp para Android e IOS.",
        github: "https://github.com/pscolme/whatsapp-clone-react-native",
        image: "/projects/whatsapp-clone.png",
        tags: [TAGS.REACT_NATIVE],
    }
];
