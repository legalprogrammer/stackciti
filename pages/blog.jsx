import Head from "next/head";
import React from "react";
import { GraphQLClient, gql } from "graphql-request";
import BlogCard from "../components/blogcard";

const graphcms = new GraphQLClient(
  "https://api-eu-west-2.hygraph.com/v2/clbamtqoz2s3k01umgplfhsw9/master"
);

const QUERY = gql`
  {
    post {
      id
      title
      datepublished
      slug
      content {
        html
      }
      author {
        authorName
        avatar {
          id
        }
      }
      coverphoto {
        publishedAt
        createdAt
        id
        url
      }
    }
  }
`;

export async function getStaticProps() {
  const { posts } = await graphcms.request(QUERY);
  return {
    props: {
      posts
    },
    revalidate: 10,
  };
}

const Blog = ({ posts }) => {
  return (
    <>
      <main>
        {posts.map((post) => (
          <BlogCard
            title={post.title}
            author={post.author}
            coverphoto={post.coverphoto}
            key={post.id}
            datepublished={post.datepublished}
            slug={post.slug}
          />
        ))}
      </main>
    </>
  );
};

export default Blog;
