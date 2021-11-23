import {
  createContext,
  ReactNode,
  useState,
  useContext,
  SetStateAction,
  Dispatch,
} from 'react';

interface Item {
  id: number;
  type: string;
  attributes: {
    canonicalTitle: string;
    synopsis: string;
    posterImage: {
      large: string;
    };
  };
}

interface ItemsProviderProps {
  children: ReactNode;
}

interface ItemsContextData {
  items: Item[];
  setItems: Dispatch<SetStateAction<never[]>>;
  searchedText: string;
  setSearchedText: Dispatch<SetStateAction<string>>;
  displayedText: string;
  setDisplayedtText: Dispatch<SetStateAction<string>>;
  searchIsLoading: boolean;
  setSearchIsLoading: Dispatch<SetStateAction<boolean>>;
}

const ItemsContext = createContext<ItemsContextData>({} as ItemsContextData);

export function ItemsProvider({ children }: ItemsProviderProps) {
  const [items, setItems] = useState([]);
  const [searchedText, setSearchedText] = useState('');
  const [displayedText, setDisplayedtText] = useState('');
  const [searchIsLoading, setSearchIsLoading] = useState(false);

  return (
    <ItemsContext.Provider
      value={{
        items,
        setItems,
        searchedText,
        setSearchedText,
        displayedText,
        setDisplayedtText,
        searchIsLoading,
        setSearchIsLoading,
      }}
    >
      {children}
    </ItemsContext.Provider>
  );
}

export function useSearch() {
  const context = useContext(ItemsContext);

  return context;
}
