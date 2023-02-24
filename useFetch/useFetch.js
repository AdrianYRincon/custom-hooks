import { useEffect, useState } from "react";


export const useFetch = (url) => {

  //estado inicial de cuando se monta el componente
  const [state, setState] = useState({
    data:null,
    isLoading:true,
    hasError:null,
  })
  
 
  const getFetch = async() => {

    setState( {
      ...state,
      isLoading:true,
    } );

    const resp = await fetch(url)
    const data = await resp.json();


    setState({
      data,
      isLoading:false,
      hasError:true,
    });

    
  }

  //Cuando se monte o renderize el componente se llama el useeffect que llama a getfectch
  useEffect(() => {
    getFetch(); 
  }, [url])
  


  return {
    data:      state.data,
    isLoading: state.isLoading,
    hasError:  state.hasError,
  };
}
