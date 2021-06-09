module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        sm: "640px",
        // => @media (min-width: 640px) { ... }

        md: "1024px",
        // => @media (min-width: 1024px) { ... }

        lg: "1280px",
        // => @media (min-width: 1280px) { ... }
      },
      height: {
        100: "30rem",
        110: "35rem",
        120: "45rem",
        "90vh": "90vh",
      },
      boxShadow: {
        title: "0 -3px 0 0 rgba(178, 245, 234, .7) inset",
      },

      backgroundImage: (theme) => ({
        custom:
          "url('http://1.bp.blogspot.com/-dp5RLV84F3g/UcBzPEWUHfI/AAAAAAAAA0E/VvsFmByh9Lc/s1600/Wallpapers+Hd+1366x768.jpg')",
        loading:
          "url('https://miro.medium.com/max/600/1*beQRWt1uWdnQM_nqCwhJnA.gif')",
      }),
    },
  },
  variants: {
    extend: {
      backgroundColor: ["active"],
      outline: ["active"],
    },
  },
  plugins: [],
};
