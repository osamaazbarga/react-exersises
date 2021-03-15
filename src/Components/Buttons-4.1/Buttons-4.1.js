
import './Btncss.css';
const Btn=(text)=>{
    return (
    <button className={text.stylebtn}>
        {
            text.newbtn
        }
    </button>
    );
}

export default Btn;