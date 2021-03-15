import faker from 'faker'
import React, { Component } from 'react';
// const Cardtext=()=>{
//     return (
//     <div>
//         <div>
//         {
//             faker.name.findName()
//         }
//         </div>
//         <div>
//             {
//                 faker.lorem.sentence()
//             }
//         </div>

//     </div>

//     );
// }

class Cardtext extends Component{

   render(){
    return (
        <div>
            <div>
            {
                faker.name.findName()
            }
            </div>
            <div>
                {
                    faker.lorem.sentence()
                }
            </div>
    
        </div>
    
        );
   }
    
}

export default Cardtext;