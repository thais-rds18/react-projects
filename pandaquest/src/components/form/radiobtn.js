import { useState } from "react";
import { radioContext, valor } from "../../contexts/radioContext";



export default function RadioGroupPersonalizado() {

    const [selectedRadio, setSelectedRadio] = useState(valor.passivo);
    const handleRadioButtonClick = () => {
        setSelectedRadio(
            selectedRadio === valor.passivo ? valor.ativo : valor.passivo
        );
    };

    return (

        <radioContext.Provider
            value={{ btnVal: selectedRadio, setBtnVal: handleRadioButtonClick }}>
                <input type="radio" name="radio1" style="position: 'absolute'; top: 0;
            left: 0;
            height: 24px;
            width: 24px;
            background-color: #eee;
            border-radius: 50%;}" >Tailung</input>

                <input type="radio" name="radio2" style="position: 'absolute'; top: 0;
            left: 0;
            height: 24px;
            width: 24px;
            background-color: #eee;
            border-radius: 50%;}" >Shen</input>

                <input type="radio" name="radio3" style="position: 'absolute'; top: 0;
            left: 0;
            height: 24px;
            width: 24px;
            background-color: #eee;
            border-radius: 50%;}" >Kai</input>
        </radioContext.Provider>

    )
}

