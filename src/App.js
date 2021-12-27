import React, { useState }  from "react";
import { Form,  message, Input, Image } from 'antd';
import img from "./1.jpg";
import './App.css';

function App() {
  const [image, setImage] = useState(false);
  const [form] = Form.useForm();
  const { Search } = Input;

  const onFinish = (value) => {
    if (value === "XmasGiftDeva") {
      form
        .validateFields()
        .then((value) => {
          form.resetFields();
          setImage(true);
        })
        .catch((error) => {
          console.log(error);
        });
    } else message.error("У вас ошибка!");
  };

  return (
    <div className="App">
      <Form name="nest-messages" form={form} layout="vertical"         
      className="form">
        <Form.Item
          name="theme"
          label="Введите кодовое слово"
          rules={[
            {
              required: true,
              message: "Вы не ввели кодовое слово! Проверьте правильность ввода",
            },
          ]}
        >
          <Search
            placeholder="введите здесь ключевое слово"
            allowClear
            enterButton="Старт"
            size="large"
            onSearch={onFinish}
          />
        </Form.Item>     
        {image === true ? 
        (<Image
          width={200}
          src={img}
        />):null}
     </Form>

    </div>
  );
}

export default App;
