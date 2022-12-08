import axios from "axios";
import React, { useEffect, useState } from "react";

const Weather = () => {
    const [title, setTitle] = useState("");
    useEffect(async() => {
        console.log('>>> run use effect')
        let response = await axios({
            method: 'post',
            url: "http://localhost:8080/get-data-by-url",
            data: { url: `https:https://www.metaweather.com/api/location/1236594/` }
        })

        setTimeout(() => {
            setTitle(response.data.title)
        }, 1000)
    }, []);

    console.log('>>> run render')
    return (
        <div> Inside Weather components: title = {title}</div>
    )
}

// class Weather extends React.Component {

//     constructor(props) {
//         super(props);

//         this.state = {
//             title: ""
//         }
//     }



//     async componentDidMount() {
//         let response = await axios({
//             method: 'post',
//             url: "http://localhost:8080/get-data-by-url",
//             data: { url: `https:https://www.metaweather.com/api/location/1236594/` }
//         })

//         setTimeout(() => {
//             this.setState({
//                 title: response.data.title
//             })
//         }, 3000)

//         // console.log('>> check data: ', response.data);
//     }

//     render() {
//         return (
//             <div> Inside Weather components: title = {this.state.title}</div>
//         )

//     }
// }

export default Weather;