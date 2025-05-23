"use client";

import { useRef, useState } from "react";
import classes from "./image-picker.module.css";
import Image from "next/image";

export default function ImagePicker({ label, name }) {
  const [pickImage, setPickImage] = useState();
  const imageRef = useRef();

  function handlePick() {
    imageRef.current.click();
  }

  function handleImageChange(event) {
    const file = event.target.files[0];

    if (!file) {
      setPickImage(null);
      return;
    }

    const fileReader = new FileReader();

    fileReader.onload = () => {
      setPickImage(fileReader.result);
    };

    fileReader.readAsDataURL(file);
  }

  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.control}>
        <div className={classes.preview}>
          {!pickImage && <p>No image picked</p>}
          {pickImage && <Image src={pickImage} alt="picked image" fill />}
        </div>
        <input
          onChange={handleImageChange}
          ref={imageRef}
          className={classes.input}
          type="file"
          accept="image/png, image/jpeg"
          id={name}
          name={name}
          required
        />
        <button className={classes.button} onClick={handlePick} type="button">
          Pick Image
        </button>
      </div>
    </div>
  );
}
