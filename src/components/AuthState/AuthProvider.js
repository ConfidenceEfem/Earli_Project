import React, { createContext, useEffect, useReducer, useState } from 'react';

export const AuthContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case 'AddImageLink':
      return { ...state, link: action.payload };
    case 'LoadingRequest':
      return { ...state, loading: true };
    case 'LoadingSuccess':
      return { ...state, loading: false };
    case 'LoadingFailed':
      return { ...state, loading: false };
    default:
      return state;
  }
};

const initialState = {
  link: [],
  loading: false,
};

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const value = { state, dispatch };

  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    localStorage.getItem('currentUser')
      ? setCurrentUser(JSON.parse(localStorage.getItem('currentUser')))
      : setCurrentUser([]);
  }, []);
  return (
    <AuthContext.Provider value={{ currentUser, value }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
