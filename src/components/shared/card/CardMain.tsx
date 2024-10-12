import { createContext, ReactNode, useContext } from "react";

type CardContext = {
  selectedItem: string | null;
  setSelectedItem: (item: string) => void;
};

type CardMain = {
  children: ReactNode;
};

export const CardContext = createContext<CardContext | null>(null);
export default function CardrMain({ children }: CardMain) {
  return <CardContext.Provider value={null}>{children}</CardContext.Provider>;
}

export const usePost = () => {
  const context = useContext(CardContext);
  if (!context) {
    throw new Error("usePost must be used within a PostProvider");
  }
  return context;
};
