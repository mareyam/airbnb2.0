import Layout from "@/components/layout/Layout";
import { CalenderProvider } from "@/context/CalenderContext";
import React from "react";
import getPost from "@/lib/getHelper";
import { Text } from "@chakra-ui/react";
import fetcher from "@/lib/fetcher";

const Page = ({ id, title }) => {
  const {data, isLoading, isError} = fetcher('api/posts/1')
  if(isLoading) return <div>..is loading</div>
  if(isError) return <div>..is error</div>
  

  console.log("inside posts/postid");
  return (
    <CalenderProvider>
      <Layout>
        Hello
        <Text>{id}</Text>
        <Text>title is {title}</Text>
      </Layout>
    </CalenderProvider>
  );
};

export default Page;

export async function getStaticProps({ params }) {
  const posts = await getPost(params.postId);
  return {
    props: posts,
  };
}

export async function getStaticPaths() {
  const posts = await getPost();
  const paths = posts.map((value) => {
    return {
      params: {
        postId: value.id.toString(),
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
}
