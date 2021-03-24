import React, { Component } from 'react'
import{Link} from 'react-router-dom'


export default class Stylishhat extends Component {
    render() {
        return (
            <div>
               <h2>Stylish hat</h2>
                <div>price: 200</div>
                <img src="https://lh3.googleusercontent.com/proxy/84sjzxOZUwkLyKsVZJjTp9RPwkLojZ2aU1PqWB7CiDYwDm4pehuXlVlcXm_APIl-0G7xCP_vWchiR9EvPW8XpKAciK3ps-KOf1JKqHOtYXXoCkKubT9kBIxgtYi-3dA_1zA8X11K8MpaltIcUhQNcH2MwWbVWBUrtlgtc15IiX8HYLJX9lKpZORzYGhVMP5E_Kdt7KgL_A"/>
                <Link className="back" to="/products">back</Link>

            </div>
        )
    }
}
