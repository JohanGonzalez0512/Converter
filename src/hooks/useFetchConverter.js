import React, { useState, useMemo, useEffect } from 'react'


export const useFetchConverter = (initialValue = {}) => {
    const { from, to } = initialValue
    // const apiKey = "4907|NsP5ggWOhGZzsw^DyOeFvqEpwLSgCxmS"
    const url = `https://api.exchangeratesapi.io/latest?base=${to}&symbols=${from}`


    const [state, setState] = useState({
        data: {},
        error: false
    })


    const peticion = fetch(url)
    // const peticion = useMemo(()=>fetch(url),[url])

    useEffect(() => {
        peticion
            .then(resp => resp.json())
            .then(({ rates }) => {
                console.log("datos")
                setState({
                    data: rates,
                    error: false
                })
            })
            .catch(e => console.log("Ocurrio un error", e))

    }, [url])


    return state
}
