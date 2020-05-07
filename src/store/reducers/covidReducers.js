const initialState = {
    listCovid: [],
    isLoading: true,
};

export default function covidReducers(stateCovids = initialState, action) {
    switch (action.type) {
        case "REQUEST_DATA_SUCCESS":
            return {
                ...stateCovids,
                isLoading: false,
                    listCovid: action.payload
            };

        case "ACTIVATE_LOADING":
            return {
                ...stateCovids,
                isLoading: true,
            };
        default:
            return stateCovids;
    }
}