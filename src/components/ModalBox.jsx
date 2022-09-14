import React from "react";

const ModalBox = ({
  id = "defaultModalId",
  width = "w-12/12",
  styles = "",
  children,
}) => {
  return (
    <>
      <input type="checkbox" id={id} className="modal-toggle" />
      <label htmlFor={id} className="modal cursor-pointer" title="Close Area">
        <label
          className={`bg-primary modal-box ${width} max-w-5xl relative max-h-[80%] lg:max-h-[85%] ${styles}`}
          title=""
        >
          {children}
        </label>
      </label>
    </>
  );
};

export default ModalBox;
