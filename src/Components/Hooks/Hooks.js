import React, { useState } from 'react'


const Hooks=({items})=>{
    const [activeIndex,setActiveIndex]=useState(null);
    const onTitleClick=(index)=>{
        setActiveIndex(index);
    }

    const renderItem= items.map((item,index)=>{
        const active=index===activeIndex?'active':'';
        return <React.Fragment key={item.title}>
            <div className={`title ${active}`} onClick={()=>onTitleClick(index)}>
                <i className="dropdown icon"></i>
                {item.title}
            </div>
            <div className={`content ${active}`}>
                <p>{item.content}</p>

            </div>
        </React.Fragment>
    })

    return (<div className="ui styled accordion">
        {renderItem}
        {/* <h1>{activeIndex}</h1> */}
    </div>

    )
}

// export class Hooks extends Component {
//     constructor(props){
//         super(props)
//         this.state={items:this.props.items}
//     }

//     const [activeIndex,setActiveIndex]=useState(null);

//     onTitleClick(index){
//         console.log("osama",index)
//     }
//     render() {
//         console.log(this.state.items);
//         return (
//             <div className="ui styled accordion">
//                 {
//                     this.state.items.map((item,index)=>{
//                         return <React.Fragment key={item.title}>
//                             <div className="title active" onClick={()=>this.onTitleClick(index)}>
//                                 <i className="dropdown icon"></i>
//                                 {item.title}
//                             </div>
//                             <div className="content active">
//                                 <p>{item.content}</p>

//                             </div>
//                         </React.Fragment>
//                     })
//                 }
//             </div>
//         )
//     }
// }

export default Hooks
