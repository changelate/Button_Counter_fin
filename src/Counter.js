import React from "react";
import "./Counter.css";

const SIZE_CONFIG = {
    24: { padding: 6, minHeight: 24, strokeWidth: 3 },
    20: { padding: 4, minHeight: 20, strokeWidth: 2 },
    16: { padding: 4, minHeight: 16, strokeWidth: 2 },
    12: { padding: 0, minHeight: 12, strokeWidth: 2 },
    8: { padding: 0, minHeight: 8, strokeWidth: 1 },
};

const Counter = ({ size = 16, count = 1, stroke = false, pulse = true }) => {
    const config = SIZE_CONFIG[size] || SIZE_CONFIG[16];
    const displayCount = count > 99 ? "99+" : count;
    const isTextVisible = size >= 16;

    return (
        <div className="indicator-wrapper">
            <div className="indicator" style={{ width: size, height: size }}>
                {isTextVisible && displayCount}
            </div>
            {pulse && (
                <>
                    <div className="pulse one"></div>
                    <div className="pulse two"></div>
                </>
            )}
        </div>
    );
};

export default Counter;
