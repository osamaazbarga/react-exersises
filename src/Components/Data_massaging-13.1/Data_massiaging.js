import React, { Component } from 'react'
import Cardmessage from './Cardmessage'


export class Data_massiaging extends Component {
    
    constructor(props){
        super(props)
        this.state=({birthday1990:[],
            data:[{
            name: "John",
            birthday: "1-1-1995",
            favoriteFoods: {
            meats: ["hamburgers", "sausages"],
            fish: ["salmon", "pike"],
            },
            },
            {
            name: "Mark",
            birthday: "10-5-1980",
            favoriteFoods: {
            meats: ["hamburgers", "steak", "lamb"],
            fish: ["tuna", "salmon", "barracuda"],
            },
            },
            {
            name: "Mary",
            birthday: "1-10-1977",
            favoriteFoods: {
            meats: ["ham", "chicken"],
            fish: ["pike"],
            },
            },
            {
            name: "Thomas",
            birthday: "1-10-1990",
            favoriteFoods: {
            meats: ["bird", "rooster"],
            fish: ["salmon"],
            },
            },
            {
            name: "Johnny",
            birthday: "1-10-1992",
            favoriteFoods: {
            meats: ["hamburgers", "lamb"],
            fish: ["anchovies", "tuna"],
            },
            },
           ],
        })
    }

    componentDidMount=()=>{
        const birthpeople=this.state.data.map(function(birth){
            const birthday=new Date(birth.birthday);
            if(birthday.getFullYear()>=1990)
                return birth;
        })
        let filtered = birthpeople.filter(function(x) {
            return x !== undefined;
         });
        this.setState({birthday1990:filtered})
    }



    
    render() {
        return (
            <div>
                {
                    this.state.birthday1990.map(birth=>{
                        return <Cardmessage cardinfo={birth}/>
                    })
                }
            </div>
        )
    }
}

export default Data_massiaging
