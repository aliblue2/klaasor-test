import Hero from "@/components/home-compo/Hero";
import { getAllUsers } from "./api/api-call";
import GridUsers from "@/components/common/GridUsers";
import Link from "next/link";
import TopCources from "@/components/home-compo/TopCources";
import AppInfo from "@/components/home-compo/AppInfo";

export default function Home(props) {
  return (
    <>
      <Hero />
      <div className="flex items-center justify-between gap-5 mt-20">
        <h5 className="text-2xl font-medium text-accentColor">Top Mentors</h5>
        <Link href={"/users"} className="text-sm text-accentColor">
          see all mentors
        </Link>
      </div>
      <GridUsers users={props.users} />
      <TopCources />
      <AppInfo />
    </>
  );
}

export async function getStaticProps() {
  const users = await getAllUsers();

  return {
    props: {
      users,
    },
  };
}
