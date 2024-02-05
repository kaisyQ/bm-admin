import { createStore } from 'vuex';
import commentsModule from './modules/comments';

const store = createStore({
    modules: {
        commentsModule
    }
});

export default store;