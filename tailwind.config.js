/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx}",
    //"./src/pages/**/*.stories.@(js|jsx|ts|tsx)",
    //"./src/stories/**/*.(js|jsx|ts|tsx)",
    //"./src/stories/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  theme: {
    extend: {
        keyframes: {
          appear: {
            "0%,100%": { opacity: 0 },
            "50%": { opacity: 1 },
          },
          disappear: {//変更
            "0%,100%": { opacity: 1 },
            "50%": { opacity: 0 },
          },
        },
        animation: {
          appear: "appear 15s cubic-bezier(0.4, 0, 0.6, 1) infinite",
          disappear: "disappear 15s cubic-bezier(0.4, 0, 0.6, 1) infinite",//← 繰返し　"disappear 3s ease 0s 1 forwards"なら1回
        },
    },
  },
  plugins: [],
}

