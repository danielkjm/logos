import { createContext } from 'react';

export const ToolBarContext = createContext<{
  expanded: boolean;
  setExpanded: (value: boolean) => void;
}>({
  expanded: false,
  setExpanded: () => {},
});