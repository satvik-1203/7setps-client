import React, { useState } from "react";

interface Props {}

import {
  registerFormFamilyDetails,
  registerFormUserDetails,
} from "@Misc/registerForm";
import Forms from "./Forms";
import Button from "@Root/components/shared/Button";

const index: React.FC<Props> = () => {
  const [familyState, setFamilyState] = useState({
    fatherName: "",
    fatherOccupation: "",
    motherName: "",
    motherOccupation: "",
    familyNative: "",
    siblings: "",
    about: "",
    foodHabits: "",
    facebookUrl: "",
    instagramUrl: "",
    preferences: "",
  });

  const onFamilyStateChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFamilyState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    console.log(familyState);
  };
  return (
    <div className="flex relative my-24 mt-32 min-h-screen max-w-[1200px] mx-auto justify-center items-center flex-col">
      <Forms
        formDetails={registerFormFamilyDetails}
        onStateChange={onFamilyStateChange}
      />
      <Button
        data={{
          name: "Submit",
          type: "submit",
        }}
      />
    </div>
  );
};

export default index;
