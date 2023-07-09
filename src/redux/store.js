import { createStore } from "redux";
import { devToolsEnhancer } from "@redux-devtools/extension";
import { rootReducer } from "./reducer";

const enhancer = devToolsEnhancer();
export const store = createStore(rootReducer, enhancer);

// import { createStore } from "redux";
// import { rootReducer } from "./reducer";

// export const store = createStore(rootReducer);
