"use client";

import { useRef } from "react";
import classes from "./image-picker.module.css";

export default function ImagePicker({ lable, name }) {
  const imageInput = useRef();

  function handlePickClick() {
    imageInput.current.click();
  }
  return (
    <div className={classes.picker}>
      <lable htmlFor={name}>{lable}</lable>
      <div className={classes.controls}>
        <input
          className={classes.input}
          type="file"
          id={name}
          accept="image/png, image/jpeg"
          name={name}
          ref={imageInput}
        />
        <button
          className={classes.button}
          type="button"
          onClick={handlePickClick}
        >
          Pick an Image
        </button>
      </div>
    </div>
  );
}
