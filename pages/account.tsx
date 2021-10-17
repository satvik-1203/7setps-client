import React from "react";
import Account from "@Components/pages/account";

import { requireAuthentication } from "@Root/misc/authenticatedRoute";

const account = ({}: typeof getServerSideProps) => {
  return (
    <>
      <Account />
    </>
  );
};

export const getServerSideProps = requireAuthentication(async (_) => {
  return {
    props: {},
  };
});

export default account;
