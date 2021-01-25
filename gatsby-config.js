module.exports = {
  siteMetadata: {
    title: "Note",
    siteUrl: "https://note.70-10.net",
  },
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-typescript",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "resume-data",
        path: `${__dirname}/src/posts`,
      },
    },
    "gatsby-transformer-remark",
    {
      resolve: "gatsby-plugin-graphql-codegen",
      options: {
        fileName: `types/graphql-types.d.ts`,
      },
    },
  ],
};
