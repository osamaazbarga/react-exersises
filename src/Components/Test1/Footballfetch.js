import React, { Component } from 'react'

export class Footballfetch extends Component {

    myapi=()=>{
        fetch("https://api-football-v1.p.rapidapi.com/v2/leagues/country/england/2018", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "81771d39bdmsh7d0670267a84583p193209jsncc2cf17b359b",
		"x-rapidapi-host": "api-football-v1.p.rapidapi.com"
	}
})
.then(response => {
	return response.json();
}).then (data=>{console.log(data)})
.catch(err => {
	console.error(err);
});


    }
    render() {
        return (
            <div>
                {
                    this.myapi()
                }
            </div>
        )
    }
}

export default Footballfetch


