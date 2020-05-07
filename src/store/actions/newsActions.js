import axios from 'axios';


const baseUrl = "https://api.currentsapi.services/v1/search?";
const apiKey = "QVjLcZFyxk-QmQUf5Y8ZU4SxaH-XmWD-1cpOkq5ZUD8FrRjV";
const urlHeadlines = baseUrl + "&apiKey=" + apiKey + "&keywords=corona";


export const getListNews = () => {
    return async (dispatch) => {
        axios
            .get(urlHeadlines)
            .then((response) => {
                console.log(response.data.news);
                dispatch({
                    type: "REQUEST_LIST_NEWS_SUCCESS",
                    payload: response.data
                })
            })
            .catch((error) => {
                dispatch({
                    type: "ACTIVATE_LOADING"
                })
            })
    }
};
export const getAllNews = () => {
    return async (dispatch) => {
        let url = baseUrl + '&apiKey=' + apiKey;
        axios
            .get(url)
            .then((response) => {
                console.log(response.data.news);
                dispatch({
                    type: "REQUEST_ALL_NEWS_SUCCESS",
                    payload: response.data
                })
            })
            .catch((error) => {
                dispatch({
                    type: "ACTIVATE_LOADING"
                })
            })
    }
};
