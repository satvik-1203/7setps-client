import { IFormField } from "@Root/interfaces/form.interface";
import React from "react";
import Input from "@Components/shared/Form.Input";
import Select from "@Root/components/shared/Form.Select";
import TextArea from "@Root/components/shared/Form.TextArea";

interface Props {
  formDetails: IFormField[];
  onStateChange: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => void;
}

const Forms: React.FC<Props> = ({ formDetails, onStateChange }) => {
  return (
    <div className="">
      {formDetails.map((field, index) => {
        const { components, name, required } = field;
        return (
          <div key={index} className="my-6">
            <label htmlFor="">
              {name} <span className="text-red-600">{required && "*"}</span>
            </label>
            <div>
              {components.map((component, index) => {
                if (component.type == "input") {
                  return (
                    <div key={index}>
                      <Input
                        onChange={(e) => {
                          onStateChange(e);
                        }}
                        component={component}
                      />
                    </div>
                  );
                }
                if (component.type == "select") {
                  return (
                    <Select
                      onChange={(e) => {
                        onStateChange(e);
                      }}
                      key={index}
                      component={component}
                    />
                  );
                }
                if (component.type == "textArea") {
                  return (
                    <TextArea
                      onChange={(e) => {
                        onStateChange(e);
                      }}
                      key={index}
                      component={component}
                    />
                  );
                }
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Forms;
