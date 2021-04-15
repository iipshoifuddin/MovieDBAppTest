import { combineReducers } from 'redux';

import{
    movieHaveError,
    movieAreLoading,
    movie,
} from './movie';

export default combineReducers({
    movieHaveError,
    movieAreLoading,
    movie,
});