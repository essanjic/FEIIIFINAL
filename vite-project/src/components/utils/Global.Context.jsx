import {
    createContext,
    useContext,
    useEffect,
    useReducer,
    useState,
  } from "react";
  
  
  const ContextGlobal = createContext({});
 
  const themes = {
    dark: {
      theme: true,
      className: "dark",
    },
    light: {
      theme: false,
      className: "light",
    },
  };

 
  
  const initialOdontologoState = { odontologoList: [], odontologoDetalle: {} };
  const initialThemeState = themes.light;
  const initialState = [];
  
 
 const odontologoReducer = (state, action) => {
      switch (action.type) {
        case "GET_ODONTOLOGOS":
          return {
            odontologoList: action.payload,
            odontologoDetalle: state.odontologoDetalle,
          };
        case "GET_ODONTOLOGO":
          return {
            odontologoDetalle: action.payload,
            odontologoList: state.odontologoList,
          };
        default:
          throw new Error();
      }
  };
  
  const themeReducer = (state, action) => {
    switch (action.type) {
      case "SWITCH_DARK":
        return themes.dark;
      case "SWITCH_LIGHT":
        return themes.light;
      default:
        throw new Error();
    }
  };

  
 
  

  const destacadoReducer = (state, action) => {
  
    switch (action.type) {
      case "ADD_DESTACADO":
        return [...state, action.payload];
      case "DELETE_DESTACADO":
        return state.filter((destacado) => destacado.id !== action.payload);
      default:
        throw new Error("Unknown action type");
    }
  };


   
  
  const ContextProvider = ({ children }) => {
    const [odontologoState, odontologoDispatch] = useReducer(
      odontologoReducer,
      initialOdontologoState
    );
    const [themeState, themeDispatch] = useReducer(
      themeReducer,
      initialThemeState
    );
    const [destacadoState, destacadoDispatch] = useReducer(
      destacadoReducer,
      initialState
    );
  
    const url = "https://jsonplaceholder.typicode.com/users";
  
   
  
    useEffect(() => {
      console.log("Ejecutando useEffect para obtener datos de la API");
      fetch(url)
        .then((res) => res.json())
        .then((data) =>
          odontologoDispatch({ type: "GET_ODONTOLOGOS", payload: data })
        );
    }, []);
  
    const getOdontologo =  (id) => {
      let url = "https://jsonplaceholder.typicode.com/users/" + id;
      fetch(url)
        .then((response) => response.json())
        .then((data) =>
          odontologoDispatch({ type: "GET_ODONTOLOGO", payload: data })
        );
    };
  useEffect(() => {
      localStorage.setItem("destacados", JSON.stringify(destacadoState));
    }, [destacadoState]);


    

    return (
      <ContextGlobal.Provider
        value={{
          odontologoState,
          themeState,
          themeDispatch,
          destacadoState,
          destacadoDispatch,
          getOdontologo,
          odontologoDetalle: odontologoState.odontologoDetalle,
        }}
      >
        {children}
      </ContextGlobal.Provider>
    );
  };

 
  export default ContextProvider;
  export const useGlobalStates = () => useContext(ContextGlobal);
