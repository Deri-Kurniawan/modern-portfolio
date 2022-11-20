import React, { Fragment } from "react";

const ModalBox = ({
  id = "defaultModalId",
  width = "w-12/12",
  styles = "",
  children,
}: {
  id: string;
  width: string;
  styles: string;
  children: React.ReactNode;
}) => {
  return (
    <Fragment>
      <input type="checkbox" id={id} className="modal-toggle" />
      <label htmlFor={id} className="cursor-pointer modal" title="Close Area">
        <label
          className={`bg-primary modal-box ${width} max-w-5xl relative max-h-[80%] lg:max-h-[85%] ${styles}`}
          title=""
        >
          {children}
        </label>
      </label>
    </Fragment>
  );
};

export default ModalBox;
