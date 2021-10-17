import { IFormField } from "@Interfaces/form.interface";

const matrimonialProfile = [
  "Self",
  "Son",
  "Daughter",
  "Brother",
  "Sister",
  "Relative",
  "Friend",
];
export const registerFormUserDetails: Array<IFormField> = [
  {
    name: "Matrimonial Profile for",
    required: true,
    components: [
      {
        type: "select",
        options: matrimonialProfile,
      },
    ],
  },
  {
    name: "Name",
    required: true,
    components: [
      {
        type: "input",
        highlightName: "First Name",
        inputType: "text",
        name: "fname",
      },
      {
        type: "input",
        highlightName: "Last Name",
        inputType: "text",
        name: "lname",
      },
    ],
  },
  {
    name: "email",
    required: true,
    components: [
      {
        type: "input",
        inputType: "email",
        name: "email",
      },
    ],
  },
  {
    name: "Phone",
    required: true,
    components: [
      {
        type: "input",
        highlightName: "(###)",
        name: "areaCode",
        inputType: "text",
      },
      {
        type: "input",
        highlightName: "###",
        name: "prefix",
        inputType: "text",
      },
      {
        type: "input",
        highlightName: "####",
        name: "suffix",
        inputType: "text",
      },
    ],
  },
  {
    name: "Time Of Birth",
    required: true,
    components: [
      {
        type: "input",
        highlightName: "Hour",
        name: "hour",
        inputType: "text",
      },
      {
        type: "input",
        highlightName: "Minute",
        name: "minute",
        inputType: "text",
      },
      {
        type: "input",
        highlightName: "Seconds",
        name: "seconds",
        inputType: "text",
      },
      {
        type: "select",
        options: ["AM", "PM"],
        name: "dayTime",
      },
    ],
  },
  {
    name: "Star / Naksatra",
    components: [
      {
        type: "input",
        inputType: "text",
        name: "starName",
      },
    ],
  },
  {
    name: "Height",
    required: true,
    components: [
      {
        type: "input",
        inputType: "text",
        name: "height",
      },
    ],
  },
  {
    name: "Complexion",
    required: true,
    components: [
      {
        type: "input",
        inputType: "text",
        name: "complexion",
      },
    ],
  },
  {
    name: "Mother Tongue & Caste",
    required: true,
    components: [
      {
        type: "input",
        inputType: "text",
        name: "motherTongue",
      },
    ],
  },
  {
    name: "Gothram",
    required: true,
    components: [
      {
        type: "input",
        inputType: "text",
        name: "gothram",
      },
    ],
  },
  {
    name: "Marital Status",
    required: true,
    components: [
      {
        type: "select",
        options: ["Single", "Divorce", "Widow / Widower"],
        name: "maritalStatus",
      },
    ],
  },
  {
    name: "Immigration / Citizenship Status",
    required: true,
    components: [
      {
        type: "select",
        name: "citizenShip",
        options: [
          "US Citizen",
          "Canadian Citizen",
          "Permanent Resident (Green Card Holder)",
          "Immigration (Work Based)",
          "Student Visa",
          "Other",
        ],
      },
    ],
  },
  {
    name: "Education Details",
    required: true,
    components: [
      {
        type: "textArea",
        extraData: "Doctorate/Masters/Bachelors/Associate\nName of University ",
        name: "education",
        placeholder:
          "Details about your Education (Mention each degree & University)",
      },
    ],
  },
  {
    name: "Professional Details",
    required: true,
    components: [
      {
        type: "textArea",
        extraData: "Company/Hospital Name\nPosition Held",
        name: "professionalDetails",
        placeholder: "Details about your profession -  Company & Position held",
      },
    ],
  },
  {
    name: "Current Company",
    required: true,
    components: [
      {
        type: "input",
        inputType: "text",
        name: "company",
      },
    ],
  },
  {
    name: "Current Location",
    components: [
      {
        type: "input",
        inputType: "text",
        name: "location",
      },
    ],
  },
];

export const registerFormFamilyDetails: Array<IFormField> = [
  {
    name: "Father's Name",
    required: true,
    components: [
      {
        type: "input",
        inputType: "text",
        name: "fatherName",
      },
    ],
  },

  {
    name: "Father's occupation",
    required: true,
    components: [
      {
        type: "input",
        inputType: "text",
        name: "fatherOccupation",
      },
    ],
  },
  {
    name: "Mother's Name",
    required: true,
    components: [
      {
        type: "input",
        inputType: "text",
        name: "motherName",
      },
    ],
  },
  {
    name: "Mother's occupation",
    required: true,
    components: [
      {
        type: "input",
        inputType: "text",
        name: "motherOccupation",
      },
    ],
  },
  {
    name: "Father's & Mother's Native",
    required: true,
    components: [
      {
        type: "input",
        inputType: "text",
        name: "familyNative",
      },
    ],
  },
  {
    name: "Siblings - Sisters / Brothers",
    required: true,
    components: [
      {
        type: "textArea",
        name: "siblings",
      },
    ],
  },
  {
    name: "About Yourself (Candidate)",
    required: true,
    components: [
      {
        type: "textArea",
        name: "about",
      },
    ],
  },
  {
    name: "Food Habits",
    required: true,
    components: [
      {
        type: "select",
        options: ["Non-Veg", "Veg", "Vegan"],
        name: "foodHabits",
      },
    ],
  },
  {
    name: "Facebook Page",
    components: [
      {
        type: "input",
        placeholder: "https://",
        name: "facebookUrl",
      },
    ],
  },
  {
    name: "Instagram Page",
    components: [
      {
        type: "input",
        placeholder: "https://",
        name: "instagramUrl",
      },
    ],
  },
  {
    name: "Preferences (If Any)",
    components: [
      {
        type: "textArea",
        name: "preferences",
      },
    ],
  },
];
