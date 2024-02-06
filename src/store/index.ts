import {createStore} from 'vuex'
import {store as reviewStore} from "@/store/modules/reviews";

const store = createStore({
    modules: {
        reviewStore
    }
});


export default store;