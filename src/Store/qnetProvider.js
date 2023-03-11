import React , {useState} from "react";
import qnetContext from "./qnetContext";

const QnetProvider = (props) => {

    const [cart , setCart] = useState([]); 

    return (
        <qnetContext.Provider 
          value={{
            cart:cart ,
            setCart : (value) => setCart(value),
          }}
          >
            {props.children}
        </qnetContext.Provider>
    )
}

export default QnetProvider ;