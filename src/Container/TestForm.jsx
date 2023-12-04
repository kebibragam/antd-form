import React, { useEffect } from "react";
import { Button, Form, Space } from "antd";
import { SubmitButton } from "../Components/Elements/SubmitButton";
import CustomInput from "../Components/Layout/CustomInput";
import { details } from "./helper";
const TestForm = () => {
  const [form] = Form.useForm();

  return (
    <Form
      form={form}
      name="validateOnly"
      layout="vertical"
      autoComplete="off"
      onFinish={(e) => console.log(e, "abcd")}
      initialValues={{ name: "Bibek", age: "21", email: "test@test.com" }}
      onValuesChange={(e, b) => console.log(e, b, "abcd")}
    >
      {details.map((detail) => (
        <CustomInput
          key={detail.label}
          label={detail.label}
          name={detail.name}
          required={detail?.required}
          type={detail?.type}
        />
      ))}
      <Form.Item>
        <Space>
          <SubmitButton form={form} />
          <Button htmlType="reset">Reset</Button>
        </Space>
      </Form.Item>
    </Form>
  );
};

export default TestForm;
