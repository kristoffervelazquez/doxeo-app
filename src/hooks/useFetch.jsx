import { useEffect, useState } from "react"


const useFetch = (url) => {

    const [state, setState] = useState({
        loading: true,
        error: null,
        data: null
    })


    

    useEffect(() => {

        setState({ data: null, loading: true, error: null })

        fetch(url)
            .then(response => response.json())
            .then(data => {
            
                setState({
                    loading: false,
                    error: null,
                    data: data
                });
            })


    }, [url])


    return state;
}

export default useFetch