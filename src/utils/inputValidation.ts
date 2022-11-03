import { FormRule } from "antd";

export const required = (message: string | undefined = "Field is required") => ({ required: true, message });

export const rulePassword = (
  message: string | undefined = "Password is required",
  additionalRules: Array<any> | undefined = []
): FormRule[] => [
  {
    required: true,
    message,
  },
  ...additionalRules,
];

export const ruleConfirmPassword = (
  filed: string,
  messages: [string, string] | [string] | undefined = ["Password is required", "Passwords do not match"],
  additionalRules: Array<any> | undefined = []
): FormRule[] => [
  {
    required: true,
    message: messages[0],
  },
  ({ getFieldValue }) => ({
    validator(_, value) {
      if (!value || getFieldValue(filed) === value) {
        return Promise.resolve();
      }
      return Promise.reject(new Error(messages[1]));
    },
  }),
  ...additionalRules,
];

export const ruleEmail = (
  messages: [string, string] | [string] | undefined = ["E-mail is not valid", "E-mail is required"],
  additionalRules: Array<any> | undefined = []
): FormRule[] => [
  {
    type: "email",
    message: messages[0],
  },
  {
    required: true,
    message: messages[1],
  },
  ...additionalRules,
];

export const ruleNumber = (
  message: string | undefined = "Field must be a number",
  additionalRules: FormRule[] | undefined = []
): FormRule[] => [
  () => ({
    message,
    pattern: new RegExp(/^[0-9]+$/),
  }),
  ...additionalRules,
];

export const ruleCheckbox = (
  message: string | undefined = "Agreement is required",
  additionalRules: Array<any> | undefined = []
): FormRule[] => [
  {
    validator: (_, value) => (value ? Promise.resolve() : Promise.reject(new Error(message))),
  },
  ...additionalRules,
];
