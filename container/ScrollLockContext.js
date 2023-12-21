'use client';
import { createContext, useContext, useState } from 'react';

// Create a context with initial state and a toggle function
const ScrollLockContext = createContext({
  isScrollLocked: false,
  toggleScrollLock: () => {},
});

const ScrollLockProvider = ({ children }) => {
  const [isScrollLocked, setScrollLocked] = useState(false);

  const toggleScrollLock = () => {
    setScrollLocked((prev) => !prev);
  };

  return (
    <ScrollLockContext.Provider value={{ isScrollLocked, toggleScrollLock }}>
      {children}
    </ScrollLockContext.Provider>
  );
};

// Custom hook to access the context values
const useScrollLock = () => {
  return useContext(ScrollLockContext);
};

export { ScrollLockProvider, useScrollLock };
