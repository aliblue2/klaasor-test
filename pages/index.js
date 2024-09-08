import Hero from "@/components/home-compo/Hero";
import { getAllUsers } from "./api/api-call";
import GridUsers from "@/components/common/GridUsers";
import Link from "next/link";

export default function Home(props) {
  console.log(props.users);

  return (
    <>
      <Hero />
      <h5 className="text-2xl font-medium text-accentColor mt-20">Top Mentors</h5>
      <GridUsers users={props.users} />
    </>
  );
}

export async function getStaticProps() {
  const users = await getAllUsers(10);
  return {
    props: {
      users,
    },
  };
}
