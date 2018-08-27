const slugify = require('limax');

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions;

  switch (node.internal.type) {
    /*
     * TODO: https://github.com/gatsbyjs/gatsby/issues/4038
     */
    case 'MarkdownRemark':
      createNodeField({ node, name: 'slug', value: `/${slugify(node.frontmatter.title)}` })
      return;
    default:
      return;
  }
};
