export function movieHaveError(state = false, action) {
    switch (action.type) {
        case 'MOVIE_HAVE_ERROR':
            return action.hasError;

        default:
            return state;
    }
}

export function movieAreLoading(state = false, action) {
    switch (action.type) {
        case 'MOVIE_ARE_LOADING':
            return action.isLoading;

        default:
            return state;
    }
}

export function movie(state = [], action) {
    switch (action.type) {
        case 'MOVIE_FETCH_DATA_SUCCESS':
            return action.items;

        default:
            return state;
    }
}