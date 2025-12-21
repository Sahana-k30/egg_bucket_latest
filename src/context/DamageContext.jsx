import { createContext, useContext, useState } from "react";

const DamageContext = createContext(null);

export function DamageProvider({ children }) {
  const [damages, setDamages] = useState([]);

  const addDamage = (damage) => {
    setDamages((prev) => [...prev, damage]);
  };

  const totalDamages = damages.reduce(
    (sum, d) => sum + (d.total || 0),
    0
  );

  return (
    <DamageContext.Provider
      value={{
        damages,
        addDamage,
        totalDamages,
      }}
    >
      {children}
    </DamageContext.Provider>
  );
}

export function useDamage() {
  const context = useContext(DamageContext);

  if (!context) {
    throw new Error(
      "useDamage must be used inside a DamageProvider"
    );
  }

  return context;
}
