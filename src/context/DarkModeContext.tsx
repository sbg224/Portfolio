import { createContext } from "react";

interface DarkModeContextType {
  couleur: string;
  setCouleur: (couleur: string) => void;  // ici on déclare que setCouleur prend un argument de type string
}

const DarkModeContext = createContext<DarkModeContextType>({
  couleur: "light",
  setCouleur: () => {} // fonction par défaut (vide), mais qui prend un argument
});

export default DarkModeContext;