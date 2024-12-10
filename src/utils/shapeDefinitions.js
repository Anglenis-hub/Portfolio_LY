export default {
    // Abstract Definitions
    colors: {
        blue: "bg-blue-300",
        purple: "bg-purple-300",
        green: "bg-green-300",
        yellow: "bg-yellow-300",
        red: "bg-red-300",
        cyan: "bg-cyan-300",
        indigo: "bg-indigo-300",
        teal: "bg-teal-300",
        pink: "bg-pink-300",
    },

    shapeTypes: {
        circle: "rounded-full",
        rounded: "rounded -rotate-12",
        roundedMd: "rounded-md -rotate-12",
        roundedLg: "rounded-lg rotate-12",
        square: "rounded-lg rotate-12",
    },

    sizes: {
        sm: "w-30 h-30",
        md: "w-44 h-44",
        lg: "w-48 h-48",
        xl: "w-52 h-52",
        xxl: "w-56 h-56",
        huge: "w-60 h-60",
    },

    effects: {
        floatUp: "hover:translate-y-2 hover:scale-110",
        floatRight: "hover:translate-x-2 hover:scale-110",
        rotate: "hover:rotate-25",
        rotateSmall: "hover:rotate-15",
        rotateReverse: "hover:-rotate-25",
        bounce: "hover:translate-y-4 hover:scale-105",
        fadeIn: "opacity-70",
        fadeOut: "opacity-50",
        // floating: "animate-floating",
    },

    // Shape Definitions
    shapeItems: [
        // { position: "bottom-80 right-12", size: "huge", color: "cyan", shape: "roundedLg", opacity: "opacity-70", effect: "floating" },
        { position: "top-28 left-12", size: "lg", color: "blue", shape: "rounded", opacity: "opacity-70", effect: "rotateSmall" },
        // { position: "top-44 left-80", size: "xxl", color: "green", shape: "circle", opacity: "opacity-30", effect: "floatUp" },
        // { position: "top-16 right-16", size: "lg", color: "yellow", shape: "circle", opacity: "opacity-60", effect: "fadeIn" },
        { position: "top-32 right-80", size: "huge", color: "cyan", shape: "roundedLg", opacity: "opacity-100", effect: "rotate", isShow: "invisible lg:visible" },
        { position: "top-80 right-24", size: "md", color: "teal", shape: "roundedMd", opacity: "opacity-75", effect: "rotateReverse" },
        { position: "bottom-96 left-5", size: "md", color: "pink", shape: "circle", opacity: "opacity-50", effect: "bounce" },
        { position: "bottom-10 left-20", size: "xxl", color: "red", shape: "square", opacity: "opacity-50", effect: "rotateSmall" },
        { position: "bottom-40 left-1/3", size: "xl", color: "indigo", shape: "circle", opacity: "opacity-60", effect: "floatUp", isShow: "invisible lg:visible" },
        { position: "bottom-20 right-20", size: "huge", color: "purple", shape: "square", opacity: "opacity-60", effect: "rotateReverse" },
    ],
}