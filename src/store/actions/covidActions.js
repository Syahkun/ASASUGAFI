import axios from 'axios';

export const generateCovid = (country = "indonesia") => {
    return async (dispatch) => {

        axios({
                "method": "GET",
                "url": "https://covid-193.p.rapidapi.com/statistics",
                "headers": {
                    "content-type": "application/octet-stream",
                    "x-rapidapi-host": "covid-193.p.rapidapi.com",
                    "x-rapidapi-key": "5e8b8d3b3amsh87cd7a77913a2a5p196783jsncce3f0abe6f8"
                },
                "params": {
                    "country": country
                }
            })
            .then((response) => {
                console.warn("hello", response.data.response[0].cases.new);
                dispatch({
                    type: "REQUEST_DATA_SUCCESS",
                    payload: response.data.response[0]
                })
            })
            .catch((error) => {
                console.log(error)
            })

    }
};