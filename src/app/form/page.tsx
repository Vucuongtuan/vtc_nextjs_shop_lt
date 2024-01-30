"use client";
import React, { useState } from "react";
import axios from "axios";
import http from "@/utils/http";

const Form = () => {
  const [description, setDescription] = useState<string>("");
  const [thumbnail, setThumbnail] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    setThumbnail(file || null);
  };

  return (
    <>
      <h1>banner</h1>
      <div>
        <input
          type="text"
          name="description"
          onChange={(e) => setDescription(e.target.value)}
        />
        <input type="file" onChange={handleFileChange} accept="image/*" />
        <button
          onClick={async () => {
            const formData = new FormData();
            formData.append("description", description);
            thumbnail && formData.append("thumbnail", thumbnail);

            const response = await axios.post(
              "http://localhost:4000/banner/",
              formData
            );

            console.log("====================================");
            console.log("Server response:", response.data);
            console.log("====================================");
          }}
        >
          Add
        </button>
      </div>
      <h1>laptop</h1>
      <div>
        <input
          type="text"
          name="description"
          onChange={(e) => setDescription(e.target.value)}
        />
        <input type="file" onChange={handleFileChange} accept="image/*" />
        <button
          onClick={async () => {
            const formData = new FormData();
            formData.append("description", description);
            thumbnail && formData.append("thumbnail", thumbnail);

            const response = await http.post("/product/laptop/", formData);

            console.log("====================================");
            console.log("Server response:", response.data);
            console.log("====================================");
          }}
        >
          Add
        </button>
      </div>
      <h1>chuot</h1>
      <h1>banphim</h1>
    </>
  );
};

export default Form;
