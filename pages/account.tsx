import React from "react";
import type {
  NextPage,
  GetServerSideProps,
  GetServerSidePropsContext,
} from "next";

import { requireAuthentication } from "@Root/misc/authenticatedRoute";

const account: NextPage = () => {
  return (
    <>
      <div>Hello user</div>
    </>
  );
};

export const getServerSideProps = requireAuthentication(async (ctx) => {
  return {
    props: {},
  };
});

export default account;
