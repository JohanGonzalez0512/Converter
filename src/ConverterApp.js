import React, { useState } from 'react'
import { useFetchConverter } from './hooks/useFetchConverter';

export const ConverterApp = () => {
    const [textCon, setTextCon] = useState({
        from: 'MXN',
        to: 'USD'
    });

    const [cant, setCant] = useState("")
    const { from, to } = textCon;

    const { data } = useFetchConverter({ ...textCon })

    const val = Object.values(data)[0]
   
    const handlecambio = () => {
       
        setTextCon({
            from: to,
            to: from
        });
        


    }
    const hanldeInputChange = ({ target }) => {
            
        setCant(
            target.value
        )
    }


    return (
        <div className="container m-3">

            <h1>Convertidor</h1>
            <h4>{`De ${to} a ${from}`}</h4>
            <div className="row">
                <div className="col-5">
                    <input
                        type="text"
                        className="form-control mb-2"
                        autoComplete='off'
                        placeholder='Ingrese una cantidad'
                        // style={{maxWidth:200}}
                        onChange={hanldeInputChange}
                        value={cant}
                    />
                </div>
                <div className="col-5">
                    <p>{(cant*val).toString()}</p>
                </div>
            </div>

            <button className="btn btn-primary"
                onClick={handlecambio}
            >Cambiar</button>

        </div>
    )
}
