import Vue from "vue";
import Vuex from "vuex";
import users from './users.js'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        users: [],
        arr: localStorage.arr ?
            JSON.parse(localStorage.arr) : [1, 2, 3, 4, 5, 6, 7],
    },
    getters: {
        arr: (state) => state.arr,
    },
    mutations: {
        CHANGE_ARR_MUTADE(state, data) {
            console.log(data);
            // state.arr.push({ name: "Alex", lastname: "Adams" });

        },
        PARSE_LOCAL(state) {
            if (localStorage.arr) {
                state.arr = JSON.parse(localStorage.arr);
            }
        },
    },
    actions: {
        POPULATE_USERS({ commit }) {
            commit("CHANGE_ARR_MUTADE")
        },
    },
    modules: {
        users
    }
})
