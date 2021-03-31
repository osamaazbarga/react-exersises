import axios from 'axios'
import Info from './Info'
import react ,{useState,useEffect} from 'react'
const Cancelreq=()=>{


    const [toggle , setToggle]=useState(false);

    const changetoggle=()=>{
        setToggle(!toggle)
    }

    return (
        <div>
            {/* <button onClick={changetoggle}>Display</button> */}
            {
                toggle?<div><button onClick={changetoggle}>hide</button><Info/></div>:<button onClick={changetoggle}>displsy</button>
            }
        </div>
    )
}

export default Cancelreq;