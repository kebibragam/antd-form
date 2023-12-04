import { Form } from "antd";
import styled from "styled-components";

export const StyledItem = styled(Form.Item)`
  .ant-form-item-required:before {
    display: none !important;
  }
  .ant-form-item-required:after {
    visibility: visible !important;
    display: inline-block;
    margin-inline-end: 4px;
    color: #ff4d4f;
    font-size: 14px;
    font-family: SimSun, sans-serif;
    line-height: 1;
    content: "*" !important;
  }
`;
