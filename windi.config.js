import { defineConfig } from 'windicss/helpers';
import typography from "windicss/plugin/typography";

import flowbite from "flowbite-windicss-plugin";


export default defineConfig({
  darkMode: "class",
  attributify: true,
  plugins: [typography(), flowbite],
  extract: {
    include: [
      'index.html',
      "./src/**/*.{html,js,svelte,ts}",
      "./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}",
    ],
  },
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      xxl: '1536px',
      xxxl: '1720px',
    },
    extend: {
      colors: {
        "background-light-100": "#f7f8f9",
        "foreground-light-100": "#292929",
        "primary-100": "#4a00e0",
        "primary2-100": "#8e00c2",
        "background-dark-100": "#202020",
        "background-dark-50": "#3b3b3b",
        "foreground-dark-100": "#F0F0F0",
        "dark-primary-100": "#00ffff",
      },
    },
    backgroundSize: {
      'auto': 'auto',
      'cover': 'cover',
      'contain': 'contain',
      'mid': '1.5em',
      'midplus': '1.6em',
    },
    borderRadius: {
      'none': '0',
      'sm': '0.125rem',
      '2sm': '0.2rem',
      'md': '0.375rem',
      'lg': '0.5rem',
      'full': '9999px',
      'large': '12px',
    }
  },
  shortcuts: {
    "primary-gradient": "bg-gradient-to-r from-primary-100 to-primary2-100",
    "body-background": "bg-background-light-100 dark:bg-background-dark-100",
    "body-text": "text-foreground-light-100 dark:text-foreground-dark-100",
    "button-main": "font-semibold text-center w-40 rounded-md bg-blue-600 text-white px-6 py-3 transition-all hover:(transform -scale-95)",
  },
});
