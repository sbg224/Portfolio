import { createContext, type ReactNode, useState } from "react";

// Définir le type du contexte
interface ShowModeContextType {
  showNav: boolean;
  setShowNav: (value: boolean) => void; // La fonction prend un booléen
}

// Créer le contexte avec une valeur par défaut
export const ShowModeContext = createContext<ShowModeContextType>({
  showNav: false,
  setShowNav: () => {}, // fonction vide, mais qui prend un argument
});

// Composant Provider pour gérer l'état
export function ShowProvider({ children }: { children: ReactNode }) {
  const [showNav, setShowNav] = useState(false); // Déclare l'état pour showNav

  // Gérer l'inversion de showNav
  const toggleShowNav = () => {
    setShowNav(!showNav); // Inverse la valeur de showNav
  };

  return (
    <ShowModeContext.Provider value={{ showNav, setShowNav: toggleShowNav }}>
      {children}
    </ShowModeContext.Provider>
  );
}

