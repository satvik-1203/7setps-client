import React from "react";

export interface IFormInput {
  type: "input";
  highlightName?: string;
  name?: string;
  inputType?: React.HTMLInputTypeAttribute;
  placeholder?: string;
}

export interface IFormSelect {
  type: "select";
  options: Array<string>;
  name?: string;
}

export interface IFormTextArea {
  type: "textArea";
  name?: string;
  placeholder?: string;
  extraData?: string;
}

export interface IFormField {
  name: string;
  required?: boolean;
  components: Array<IFormInput | IFormSelect | IFormTextArea>;
}
