import React from "react";

interface Props {}

const index: React.FC<Props> = () => {
  // Make API request to request for all the user's data and show it there
  return (
    <main className="min-h-screen pt-[10rem] bg-white">
      <h1>Profiles</h1>
    </main>
  );
};

export default index;
