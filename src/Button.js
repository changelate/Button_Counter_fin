import React, { useState } from "react";
import "./Button.css";
import Counter from "./Counter";

const SIZE_CONFIG = {
  28: { paddingH: 10, paddingV: 6, gap: 4, loaderSize: 16 },
  36: { paddingH: 12, paddingV: 8, gap: 6, loaderSize: 20 },
  56: { paddingH: 16, paddingV: 16, gap: 8, loaderSize: 24 },
};

const Button = ({
  size = 36,
  state = "enabled",
  counter = true,
  label = "Что сделать",
  hovered = false,
  pressed = false,
  disabled = false
}) => {
  const [buttonState, setButtonState] = useState(state);
  const config = SIZE_CONFIG[size] || SIZE_CONFIG[36];

  const handleClick = () => {
    if (buttonState !== "enabled") return;
    setButtonState("loading");
    setTimeout(() => setButtonState("enabled"), 2000); // Имитация загрузки
  };

  const buttonClassNames = `button ${buttonState} size-${size} ${hovered ? 'hovered' : ''} ${pressed ? 'pressed' : ''} ${disabled ? 'disabled' : ''}`;

  return (
    <button
      className={buttonClassNames}
      onClick={handleClick}
      disabled={disabled}
    >
      <div className="content-group">
        {buttonState === "loading" ? (
          <div
            className="loader"
            style={{ width: config.loaderSize, height: config.loaderSize }}
          />
        ) : (
          <div className="button-content">
            <span className="label">{label}</span>
            {counter && <Counter size={16} count={5} />}
          </div>
        )}
      </div>

      {buttonState === "loading" && <div className="shimmer" />}
      <div className="overlay" />
    </button>
  );
};

export default Button;
