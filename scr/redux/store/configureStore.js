import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
// import devToolsEnhancer from 'remote-redux-devtools';

export default function configureStore(initialState) {

    // const composeEnhancers = 
    //     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    //         window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    //             // options like actionSanitizer, stateSanitizer
    //         }) : compose;

    // const enhancer = devToolsEnhancer({ realtime: true },
    //     applyMiddleware(thunk)
    // );

    const enhancer = applyMiddleware(thunk)

    return createStore(
        rootReducer,
        initialState,
        enhancer,
        // devToolsEnhancer
    );
}