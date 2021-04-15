import axios from 'axios';

export function movieHaveError(bool) {
    return {
        type: 'MOVIE_HAVE_ERROR',
        hasError: bool
    };
}

export function movieAreLoading(bool) {
    return {
        type: 'MOVIE_ARE_LOADING',
        isLoading: bool
    };
}

export function movieFetchDataSuccess(items) {
    return {
        type: 'MOVIE_FETCH_DATA_SUCCESS',
        items
    };
}

export function movieFetchData(url) {
    return (dispatch) => {
        dispatch(movieAreLoading(true));

        setTimeout(() => {
            axios.get(url)
                .then((response) => {
                    console.log(response.data);
                    if (response.status !== 200) {
                        throw Error(response.statusText);
                    }

                    dispatch(movieAreLoading(false));

                    return response;
                })
                .then((response) => dispatch(movieFetchDataSuccess(response.data)))
                .catch(() => dispatch(movieHaveError(true)));
        
               
        }, 500);
    };
}