import { Button } from "@mui/material";
import React from "react";
import { Form } from "react-bootstrap";

const Forms1 = () => {
  return (
    <Form className="pl-10 w-[300px] flex flex-col">
      <div className="text-[#545cd8] text-lg">Kişisel bilgiler</div>
      <div className=" text-[#6c757d]">
        Aşağıdaki formu doldurduktan sonra devam tuşuna basınız.
      </div>
      <Form.Label htmlFor="username" className="mt-5">
        İsim
      </Form.Label>
      <Form.Control
        className=" h-[35px] rounded-md p-3 mt-1 border-gray-300 border"
        type="text"
        id="username"
        placeholder="İsiminiz"
      />
      <Form.Label htmlFor="username" className="mt-5">
        Email
      </Form.Label>
      <Form.Control
        className=" h-[35px] rounded-md p-3 mt-1 border-gray-300 border"
        type="text"
        id="username"
        placeholder="Email adresiniz"
      />
      <Form.Label htmlFor="username" className="mt-5">
        telefon
      </Form.Label>
      <Form.Control
        className=" h-[35px] rounded-md p-3 mt-1 border-gray-300 border"
        type="text"
        id="username"
        placeholder="+90532..."
      />
      <Form.Label htmlFor="username" className="mt-5">
        Ülke seçimi
      </Form.Label>
      <Form.Control
        className=" h-[35px] rounded-md p-3 mt-1 border-gray-300 border"
        type="text"
        id="username"
        placeholder="Ülke seç"
      />
      <Form.Label htmlFor="username" className="mt-5">
        Vize tipi
      </Form.Label>
      <Form.Control
        className=" h-[35px] rounded-md p-3 mt-1 border-gray-300 border"
        type="text"
        id="username"
        placeholder="Vize tipi seç"
      />
      <div className="mt-4 flex flex-end w-full justify-end mb-5">
        <Button
          className="ml-auto w-fit text-white rounded-full"
          style={{
            background: "#545cd8",
            padding: "10px 30px",
            color: "white",
            borderRadius: "9999999px",
          }}
        >
          ileri
        </Button>
      </div>
    </Form>
  );
};

export { Forms1 };
