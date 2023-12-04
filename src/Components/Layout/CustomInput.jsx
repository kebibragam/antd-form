import { Form, Input } from "antd";
import React from "react";
import { StyledItem } from "./style";

const CustomInput = ({ name, label, required, type }) => {
  return (
    <StyledItem
      name={name}
      label={label}
      rules={[
        {
          required: required,
          type: type,
        },
      ]}
    >
      <Input />
    </StyledItem>
  );
};

export default CustomInput;
