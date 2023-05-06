import Link from "next/link";
import { Form, Input, Button } from "antd";

const formName = "formName";

export default function PageWithJSbasedForm() {
  const [form] = Form.useForm();

  const handleSubmit = async () => {
    const data = await form.validateFields();

    const response = await fetch("/api/form", {
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });
    const result = await response.json();
    console.log(result, "result");
  };
  return (
    <Form form={form} name={formName} onFinish={handleSubmit}>
      <Form.Item name="one" label="1">
        <Input />
      </Form.Item>

      <Form.Item name="two" label="2">
        <Input />
      </Form.Item>

      <Form.Item>
        <Button htmlType="submit" form={formName}>
          提交
        </Button>
      </Form.Item>
    </Form>
  );
}
