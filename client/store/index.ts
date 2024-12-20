import {createStore, Store} from "redux";
import {Context, createWrapper} from "next-redux-wrapper";
import {reducer, RootState} from "@/store/reducers";

const makeStore = (context: Context) => createStore(reducer);

export const wrapper = createWrapper<Store<RootState>>(makeStore, {debug: true});