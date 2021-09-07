import '../styles/globals.css'
import {createStore} from "redux";
import rootReducer from "../store/reducers";
import {Provider} from "react-redux";
import HeaderHome from "../components/headerHome";
import HeaderNavbar from "../components/headerNavbar";
import React from "react";

// const MyContext = React.createContext(null)

// Export your custom hooks if you wish to use them in other files.
// export const useStore = createStoreHook(MyContext)
// export const useDispatch = createDispatchHook(MyContext)
// export const useSelector = createSelectorHook(MyContext)

const myStore = createStore(rootReducer)


function MyApp({Component, pageProps}) {
    return <Provider store={myStore}>
        <HeaderHome/>
        <HeaderNavbar/>
        <Component {...pageProps} />
    </Provider>
}

export default MyApp
