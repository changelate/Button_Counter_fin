import React, { createContext, useContext } from "react";
import "./Counter.css";

const SIZE_CONFIG = {
    24: { padding: 6, minHeight: 24, strokeWidth: 3 },
    20: { padding: 4, minHeight: 20, strokeWidth: 2 },
    16: { padding: 4, minHeight: 16, strokeWidth: 2 },
    12: { padding: 0, minHeight: 12, strokeWidth: 2 },
    8: { padding: 0, minHeight: 8, strokeWidth: 1 },
};

interface CounterContextProps {
    size: number;
    count: number;
    pulse: boolean;
}

const CounterContext = createContext<CounterContextProps | undefined>(undefined);

const useCounterContext = () => {
    const context = useContext(CounterContext);
    if (!context) {
        throw new Error("Counter components must be used within <Counter>");
    }
    return context;
};

// 🔹 Основной компонент Counter
const Counter: React.FC<{ size?: number; count?: number; pulse?: boolean }> = ({
    size = 16,
    count = 1,
    pulse = true,
}) => {
    return (
        <CounterContext.Provider value={{ size, count, pulse }}>
            <div className="indicator-wrapper">
                <Indicator />
                <Pulse />
            </div>
        </CounterContext.Provider>
    );
};

// 🔹 Индикатор (круг с числом)
const Indicator: React.FC = () => {
    const { size, count } = useCounterContext();
    const displayCount = count > 99 ? "99+" : count;
    const isTextVisible = size >= 16;

    return (
        <div className="indicator" style={{ width: size, height: size }}>
            {isTextVisible && displayCount}
        </div>
    );
};

// 🔹 Эффект пульсации
const Pulse: React.FC = () => {
    const { pulse } = useCounterContext();
    if (!pulse) return null;

    return (
        <>
            <div className="pulse one"></div>
            <div className="pulse two"></div>
        </>
    );
};

export default Counter;
