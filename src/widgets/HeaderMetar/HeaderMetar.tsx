"use client";

import classNames from "classnames";
import styles from "./HeaderMetar.module.scss";
import WeatherIcon from "../../../public/img/icons/weather.svg";
import Modal from "@/components/Modal/Modal";
import { useState } from "react";

export default function HeaderMetar() {
  const [modalOpen, setModalOpen] = useState(false);

  const handleModalClose = () => {
    setModalOpen(false);
  };

  const openModal = () => {
    setModalOpen(true);
  };

  return (
    <>
      <Modal isOpen={modalOpen} onClose={handleModalClose}>
        <div>
          <span>Hellow</span>
        </div>
      </Modal>
      <div
        className={classNames(styles.Pill, styles.NoMetarSelected)}
        onClick={openModal}
      >
        <WeatherIcon />
        SELECT METAR
      </div>
    </>
  );
}
