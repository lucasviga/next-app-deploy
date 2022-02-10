import { GetStaticProps } from "next";

export default function Static({ user }){
  return (
    <h1>{user.name}</h1>
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