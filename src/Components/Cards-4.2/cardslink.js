// const Linkcards=(text)=>{
//     return (
//     <button className={text.stylebtn}>
//         {
//             text.linktext
//         }
//     </button>
//     );
// }

import React, { Component } from 'react';

class Linkcards extends Component {
    render(){
        return (
                <button className={this.props.stylebtn}>
                    {
                        this.props.linktext
                    }
                </button>
        )}
}

export default Linkcards;