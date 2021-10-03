import React, { useState } from "react";
import axios from "axios";
import jwt from "jsonwebtoken";
import InputBox from "@Components/shared/InputBox";
import Button from "@Components/shared/Button";
import IInput from "@Interfaces/input.interface";
import { login } from "@Misc/URLS";
import router from "next/router";
import useContext from "@Context/useGlobalContext";

interface Props {}

const index: React.FC<Props> = () => {
  const [formStates, setFormStates] = useState({
    email: "",
    password: "",
  });
  const { dispatch } = useContext();
  const inputs: IInput[] = [
    {
      name: "email",
      placeholder: "example@email.com",
      type: "email",
      stateName: "email",
      value: formStates.email,
    },
    {
      name: "password",
      placeholder: "password",
      type: "password",
      stateName: "password",
      value: formStates.password,
    },
  ];

  const handleFormState = (stateName: string, value: string) => {
    setFormStates((prevState) => ({ ...prevState, [stateName]: value }));
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const {
        data: { token },
      } = await axios.post<{ token: string }>(login(), formStates);

      document.cookie = `token=${token}`;
      router.push("/account");

      const tokenDecode: any = jwt.decode(token);
      const { email, verified, username } = tokenDecode;

      dispatch({
        type: "SET_STATE",
        payload: {
          token: token,
          email: email,
          verify: verified,
          username: username,
        },
      });

      router.push("/account");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center max-w-[800px] mx-auto bg-white">
      <main className="w-3/4">
        <form onSubmit={onSubmit}>
          <div className="flex flex-col space-y-7 w-full">
            {inputs.map((input, index) => (
              <InputBox
                key={index}
                inputInfo={input}
                handleFormState={handleFormState}
              />
            ))}
          </div>
          <Button data={{ name: "Login", type: "submit" }} />
        </form>
      </main>
    </div>
  );
};

export default index;
