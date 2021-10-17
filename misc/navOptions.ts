export interface INavOptions {
  name: string;
  path: string;
}

export const navOptionsNotLogged: INavOptions[] = [
  {
    name: "HOME",
    path: "/",
  },
  // {
  //   name: "HOW DO WE DO IT ?",
  //   path: "/how-do-we-do-it",
  // },
  // {
  //   name: "PROFILES",
  //   path: "/profiles",
  // },
  // {
  //   name: "CONTACT US",
  //   path: "/contact-us",
  // },
  {
    name: "LOGIN",
    path: "/login",
  },
  {
    name: "SIGN UP",
    path: "/sign-up",
  },
];

export const navOptionsLogged: INavOptions[] = [
  {
    name: "HOME",
    path: "/",
  },
  {
    name: "ACCOUNT",
    path: "/account",
  },
  {
    name: "REGISTER",
    path: "/register",
  },
];
