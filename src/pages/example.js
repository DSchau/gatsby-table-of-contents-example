import React from 'react';
import { graphql } from 'gatsby';
import styled from 'react-emotion';

import Layout from '../components/layout'

const TableOfContents = styled.div`
  ul {
    color: rebeccapurple;
  }
  a {
    color: rebeccapurple;
  }
`;

export default function Example({ data }) {
  const { markdown } = data;
  return (
    <Layout>
      <h1>Table of Contents</h1>
      <TableOfContents dangerouslySetInnerHTML={{ __html: markdown.tableOfContents }} />
      <div dangerouslySetInnerHTML={{ __html: markdown.html }} />
    </Layout>
  );
}

export const pageQuery = graphql`
  query ExamplePageQuery {
    markdown:markdownRemark(fields:{slug:{eq:"/example"}}) {
      tableOfContents
      html
    }
  }
`;
