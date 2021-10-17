import React, { useState } from "react";
import IInput from "@Interfaces/input.interface";
import InputBox from "@Components/shared/InputBox";
import Button from "@Components/shared/Button";
import { signUp as signUpURL } from "@Root/misc/URLS";
import axios from "axios";
import jwt from "jsonwebtoken";
import router from "next/router";
import useContext from "@Context/useGlobalContext";

interface Props {}

const index: React.FC<Props> = () => {
  const [formStates, setFormStates] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { dispatch } = useContext();

  const inputs: IInput[] = [
    {
      name: "username",
      placeholder: "Username",
      type: "text",
      stateName: "username",
      value: formStates.username,
    },
    {
      name: "email",
      placeholder: "example@email.com",
      type: "email",
      stateName: "email",
      value: formStates.email,
    },
    {
      name: "password",
      placeholder: "Password",
      type: "password",
      stateName: "password",
      value: formStates.password,
    },
    {
      name: "confirm password",
      placeholder: "Confirm Password",
      type: "password",
      stateName: "confirmPassword",
      value: formStates.confirmPassword,
    },
  ];

  const onSubmit = async (e?: React.FormEvent<HTMLFormElement>) => {
    e && e.preventDefault();
    try {
      const {
        data: { token },
      } = await axios.post<{ token: string }>(signUpURL(), formStates);

      const tokenDecode: any = jwt.decode(token);
      const { email, verified, username } = tokenDecode;

      dispatch({
        type: "SET_STATE",
        payload: {
          token: token,
          email: email,
          verify: verified,
          username: username,
          logged: true,
        },
      });

      router.push("/account");
    } catch (err) {}
  };

  const handleFormState = (stateName: string, value: string) => {
    setFormStates((prevState) => ({ ...prevState, [stateName]: value }));
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
          <Button data={{ name: "Sign up", type: "submit" }} />
        </form>
      </main>
    </div>
  );
};

export default index;
