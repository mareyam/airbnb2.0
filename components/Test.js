import React from "react";
import fetcher from "@/lib/fetcher";
import { Text } from "@chakra-ui/react";

const Test = () => {
  const { data, isLoading, isError } = fetcher("api/posts");
  if (isLoading) return <div>loading</div>;
  if (isError) return <div>err</div>;

  if (data) console.log(data);
  console.log(data);

  return data?.map((value, index) => {
    <Post data={value}></Post>;
  });
};

export default Test;

function Post({ data }) {
  const { id, title } = data;
  return (
    <div>
      <Text>id is {id}</Text>
      <Text>title is {title}</Text>
    </div>
  );
}
