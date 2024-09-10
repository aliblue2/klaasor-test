import GridUsers from "@/components/common/GridUsers";
import React, { useEffect, useRef, useState } from "react";
import { getAllUsers } from "../api/api-call";
import PrimaryBtn from "@/components/common/PrimaryBtn";
import { MdSkipNext, MdSkipPrevious, MdSortByAlpha } from "react-icons/md";
import LoadingUi from "@/components/common/LoadingUi";
import Link from "next/link";

const UsersPage = ({ users, totalPage, currentPage }) => {
  const [sortedUsers, setSortedUsers] = useState(users);
  useEffect(() => {
    setSortedUsers(users);
  }, [users]);
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
      setSortedUsers(users);
      return;
    }
    setLoading(true);
    const filteredUser = [...sortedUsers].filter((user) => {
      return user.name
        .trim()
        .toLowerCase()
        .includes(searchInpt.current.value.toLowerCase());
    });

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
      <div className="flex items-center justify-between gap-5 my-5">
        {currentPage > 1 && (
          <Link
            href={`/users?page=${currentPage - 1}`}
            className="bg-primaryColor rounded-full p-[1px] text-white"
          >
            <MdSkipPrevious size={20} />
          </Link>
        )}
        <span>
          page {currentPage} of {totalPage}
        </span>
        {currentPage < totalPage && (
          <Link
            href={`/users?page=${currentPage + 1}`}
            className="bg-primaryColor rounded-full p-[1px] text-white"
          >
            <MdSkipNext size={20} />
          </Link>
        )}
      </div>
    </>
  );
};

export default UsersPage;

export async function getServerSideProps(context) {
  const { page = 1 } = context.query;
  const limitUsers = 4;
  const users = await getAllUsers();
  const start = (page - 1) * limitUsers;
  const paginatedUsers = users.slice(start, start + limitUsers);
  const totalPage = Math.ceil(users.length / limitUsers);
  return {
    props: {
      users: paginatedUsers,
      totalPage,
      currentPage: Number(page),
    },
  };
}
