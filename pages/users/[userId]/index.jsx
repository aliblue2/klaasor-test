import PrimaryBtn from "@/components/common/PrimaryBtn";
import { getAllUsers, getUserDetail } from "@/pages/api/api-call";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import profileImage from "@/assets/profile.png";
import {
  MdArrowBack,
  MdContacts,
  MdLocationPin,
  MdPhone,
  MdWeb,
} from "react-icons/md";

const UserDetail = (props) => {
  const user = props.userInfo;

  return (
    <>
      <Link
        className="flex bg-primaryColor bg-opacity-20 text-accentColor rounded-lg text-sm w-fit p-2 mb-5 items-center justify-start gap-2"
        href={".."}
      >
        <MdArrowBack size={18} />
        back to home
      </Link>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="col-span-1 flex flex-col items-center justify-center gap-2">
          <Image
            src={profileImage}
            width={244}
            height={244}
            placeholder="blur"
            alt="fake user avatar"
            className="bg-gradient-to-br from-primaryColor to-emerald-500 rounded-full p-1"
          />
          <h6 className="text-accentColor text-center font-bold text-2xl">
            @{user.username}
          </h6>
        </div>
        <div className="col-span-1 md:col-span-2 flex flex-col items-start justify-start gap-5">
          <h6 className="text-2xl font-medium">{user.name}</h6>
          <span className="text-accentColor bg-primaryColor bg-opacity-20 px-2 rounded-md">
            {user.email}
          </span>
          <h6 className="text-xl font-medium text-accentColor flex items-center justify-start gap-2">
            <MdPhone className="text-blackColor" size={24} /> {user.phone}
          </h6>
          <span className="flex items-center justify-start gap-2">
            <MdWeb size={24} />
            <a
              href={`https://${user.website}`}
              target="_blank"
              className="text-primaryColor font-medium px-2"
            >
              {user.website}
            </a>
          </span>
          <p className="flex items-center justify-start gap-2">
            <MdLocationPin size={24} />
            {user.address.city +
              " street :" +
              user.address.street +
              " " +
              user.address.suite}
          </p>
          <p>
            about : Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Fugiat, non ab. Laudantium, cupiditate! Commodi nobis eum quo sed
            molestiae rerum, ullam itaque adipisci aliquam porro quasi fugit
            dolores alias neque.
          </p>
          <PrimaryBtn>
            Contact to this Mentor <MdContacts size={20} />
          </PrimaryBtn>
        </div>
      </div>
    </>
  );
};

export default UserDetail;

export async function getStaticPaths() {
  const users = await getAllUsers();
  return {
    fallback: false,
    paths: users.map((user) => {
      return {
        params: {
          userId: user.id.toString(),
        },
      };
    }),
  };
}

export async function getStaticProps(context) {
  const userId = context.params.userId;
  const userInfo = await getUserDetail(userId);
  return {
    props: {
      userInfo,
    },
  };
}
