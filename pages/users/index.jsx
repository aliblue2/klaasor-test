import GridUsers from "@/components/common/GridUsers";
import React, { useRef, useState } from "react";
import { getAllUsers } from "../api/api-call";
import PrimaryBtn from "@/components/common/PrimaryBtn";
import { MdSortByAlpha } from "react-icons/md";
import LoadingUi from "@/components/common/LoadingUi";

const UsersPage = (props) => {
  const [sortedUsers, setSortedUsers] = useState(props.users);
  const [isLoadig, setLoading] = useState(false);
  const searchInpt = useRef();

  const sortedUsersByName = () => {
    setLoading(true);
    const sorted = [...sortedUsers].sort((a, b) =>
      a.name.localeCompare(b.name)
    );
    setSortedUsers(sorted);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  };

  const searchUserHandler = (event) => {
    event.preventDefault();
    if (searchInpt.current.value.trim() === "") {
      setSortedUsers(props.users);
      return;
    }
    setLoading(true);
    const filteredUser = [...sortedUsers].filter((user) => {
      return user.name
        .trim()
        .toLowerCase()
        .includes(searchInpt.current.value.toLowerCase());
    });
    console.log(filteredUser);

    setSortedUsers(filteredUser);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  };
  return (
    <>
      {isLoadig && <LoadingUi />}
      <div
        data-aos="fade-down"
        data-aos-duration="500"
        className="flex justify-between w-full items-center gap-5"
      >
        <form
          onSubmit={searchUserHandler}
          className="flex items-center justify-start gap-2"
        >
          <input
            type="text"
            placeholder="search user by name"
            ref={searchInpt}
            className="p-1 w-8/12 rounded-xl border border-primaryColor outline-none"
          />
          <PrimaryBtn type="submit">search</PrimaryBtn>
        </form>
        <MdSortByAlpha
          onClick={sortedUsersByName}
          className="bg-primaryColor cursor-pointer hover:bg-opacity-95 hover:text-white transition-all ease-in-out duration-300 bg-opacity-20 rounded-md p-1 text-accentColor"
          size={32}
        />
      </div>
      <GridUsers users={sortedUsers} />
    </>
  );
};

export default UsersPage;

export async function getServerSideProps() {
  const users = await getAllUsers();
  return {
    props: {
      users,
    },
  };
}
