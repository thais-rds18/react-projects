import { createContext } from "react";

export const valor = {
  ativo: {
    checked: true,
    valor: '',
  },
  passivo: {
    checked: false,
    valor: '',
  },
};

export const radioContext = createContext({
  btnVal: valor.ativo,
  setBtnVal: () => {},
});