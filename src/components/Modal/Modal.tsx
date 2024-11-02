"use client";

import styles from "./Modal.module.scss";
import CloseIcon from "../../../public/img/icons/close.svg";
import classNames from "classnames";
import { MouseEvent } from "react";

type ModalProps = {
  children: React.ReactNode;
  isOpen: boolean;
  onClose?: () => void;
};

export default function Modal({ children, isOpen, onClose }: ModalProps) {
  const handleOverlayClick = (
    ev: MouseEvent<HTMLDivElement, globalThis.MouseEvent>
  ) => {
    ev.stopPropagation();
    const target = ev.target as HTMLElement;

    if (
      target?.className &&
      typeof target?.className === "string" &&
      target?.className?.includes("Overlay") &&
      onClose
    ) {
      onClose();
    }
  };

  return (
    <div
      className={classNames({
        [styles.ModalOverlay]: true,
        [styles.Open]: isOpen,
      })}
      onClick={(ev) => handleOverlayClick(ev)}
    >
      <div className={styles.Modal}>
        <div className={styles.CloseSection}>
          <div
            className={styles.CloseButton}
            onClick={() => {
              if (onClose) onClose();
            }}
          >
            <CloseIcon />
          </div>
        </div>
        {children}
      </div>
    </div>
  );
}
