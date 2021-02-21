module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      typography: {
        "3xl": {
          css: {
            fontSize: "1.875rem",
            h1: {
              fontSize: "4rem",
            },
          },
        },
        DEFAULT: {
          css: {
            fontSize: "1rem",
            h1: {
              fontSize: "1.5rem",
              marginTop: "1em",
              marginBottom: ".5em",
              textDecoration: "underline",
            },
            h2: {
              fontSize: "1.25rem",
              marginTop: "1em",
              marginBottom: ".5em",
            },
            p: {
              marginTop: 0,
              marginBottom: "1em",
            },
            "> ul": {
              marginTop: "0",
              marginBottom: "0",
              "> li": {
                "> *:first-child": {
                  marginTop: 0,
                },
                "> *:last-child": {
                  marginBottom: 0,
                },
              },
            },
            ".gatsby-highlight": {
              fontSize: ".8em",
            },
            "code.language-text": {
              fontSize: ".9em",
              padding: ".2em",
              paddingRight: ".3em",
              paddingLeft: ".3em",
            },
            "code::before": {
              content: '""',
            },
            "code::after": {
              content: '""',
            },
          },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
