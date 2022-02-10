import { GetStaticProps } from "next";
import Head from "next/head";

export default function Static({ user }){
  return (
    <>
      <Head>
        <title>Static Page</title>
      </Head>
      <h1>{user.name}</h1>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch('https://api.github.com/users/lucasviga');
  const user = await response.json();

  return {
    props: {
      user,
    },
    revalidate: 5,
  }
}