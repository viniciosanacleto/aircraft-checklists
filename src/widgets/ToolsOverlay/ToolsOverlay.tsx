"use client";

import { useState } from "react";
import style from "./ToolsOverlay.module.scss";
import Button from "@/components/Button/Button";

import ConversionTools from "./ConversionTools/ConversionTools";

export default function ToolsOverlay() {
  const [showOverlay, setShowOverlay] = useState<boolean>(false);
  const [menuOption, setMenuOption] = useState<string | null>(null);

  const handleButtonClick = () => {
    setShowOverlay(true);
  };

  const handleCloseButtonClick = () => {
    setShowOverlay(false);
    setMenuOption(null);
  };

  const handleMenuClick = (option: string) => {
    setMenuOption(option);
  };

  return (
    <div className={style.ToolsOverlay}>
      <div className={style.Button} onClick={handleButtonClick}>
        +
      </div>
      {showOverlay && (
        <div className={style.Overlay}>
          <div className={style.ContentContainer}>
            <span
              className={style.CloseButton}
              onClick={handleCloseButtonClick}
            >
              X
            </span>

            {!menuOption && (
              <div className={style.Menu}>
                <Button onClick={() => handleMenuClick("conversion-tools")}>
                  CONVERSION TOOLS
                </Button>
                <Button onClick={() => handleMenuClick("top-descent")}>
                  TOP OF DESCENT
                </Button>
              </div>
            )}

            {menuOption === "conversion-tools" && <ConversionTools />}
          </div>
        </div>
      )}
    </div>
  );
}
