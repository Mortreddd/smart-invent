import defaultTheme from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.tsx",
    ],
    daisyui: {
        themes: [
            {
                mytheme: {
                    primary: "#10b981",

                    secondary: "#a7f3d0",

                    accent: "#007bff",

                    neutral: "#111827",

                    "base-100": "#d1fae5",

                    info: "#00ecff",

                    success: "#6ee7b7",

                    warning: "#f59e0b",

                    error: "#dc2626",
                },
            },
        ],
    },
    theme: {
        extend: {
            fontFamily: {
                sans: ["Figtree", ...defaultTheme.fontFamily.sans],
            },
            colors: {
                primary: "#04AF73",
                primarylight: "#06cf88",
                secondary: "#CFFFEE",
                secondarylight: "#afe3d0",
            },
            backgroundImage: {
                login: "url('./images/login_bg.png')",
            },
            gridTemplateRows: {
                15: "repeat(16, minmax(0, 1fr))",
                16: "repeat(16, minmax(0, 1fr))",
            },
        },
    },

    plugins: [forms, require("daisyui")],
};
