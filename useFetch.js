import { useEffect, useRef, useState } from 'react';

export const useFetch = (url) => {
  
const [state, setstate] = useState({data:null, loading:true, error:null});
const isMounted = useRef(true);

useEffect(()=>{
    return()=>{
        isMounted.current = false;
    }
},[])

useEffect(() => {

    setstate({data:null, loading:true, error:null})
  
    fetch(url)
    .then(resp =>resp.json())
    .then(data=>{
        //estem cridant un component mentre executa l'altra i si cancelem i esta executant l'altra dona error per aixo aquet if
            if(isMounted.current){
                setstate({
                    loading:false,
                    error:null,
                    data
                })
    
            }
        
    })
}, [url]);

    return state;
};
