import { useEffect, useRef, useState } from 'react';

export const useFetch = (url) => {
  
const [state, setState] = useState({data:null, loading:true, error:null});
const isMounted = useRef(true);

useEffect(()=>{
    return()=>{
        isMounted.current = false;
    }
},[])

useEffect(() => {

    setState({data:null, loading:true, error:null})
  
    fetch(url)
    .then(resp =>resp.json())
    .then(data=>{
        //estem cridant un component mentre executa l'altra i si cancelem i esta executant l'altra dona error per aixo aquet if
            if(isMounted.current){
                setState({
                    loading:false,
                    error:null,
                    data
                })
    
            }
        
    })
    .catch( () => {
        setState({
            data: null,
            loading: false,
            error: 'No se pudo cargar la info'
        })
    })
}, [url]);

    return state;
};
