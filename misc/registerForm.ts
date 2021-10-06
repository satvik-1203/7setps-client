import React from "react";

export interface registerFormInput {
  type: "input";
  name: string;
  required?: boolean;
  components: Array<{
    placeholder?: string;
    stateName?: string;
    type?: React.HTMLInputTypeAttribute;
  }>;
}

export interface registerFormSelect {
  type: "select";
  name: string;
  required?: boolean;
  options: Array<string>;
  stateName?: string;
}

const matrimonialProfile = [
  "Self",
  "Son",
  "Daughter",
  "Brother",
  "Sister",
  "Relative",
  "Friend",
];

const registerForm: Array<registerFormInput | registerFormSelect> = [
  {
    type: "select",
    name: "Matrimonial profile for",
    options: matrimonialProfile,
    required: true,
    stateName: "matrimonialSelect",
  },
  {
    type: "input",
    name: "Name",
    components: [
      {
        placeholder: "First Name",
        stateName: "fname",
        type: "text",
      },
      {
        placeholder: "Last Name",
        stateName: "lname",
        type: "text",
      },
    ],
    required: true,
  },
  {
    type: "input",
    name: "email",
    components: [
      {
        stateName: "email",
        type: "email",
      },
    ],
    required: true,
  },
];
