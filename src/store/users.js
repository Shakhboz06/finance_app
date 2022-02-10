import Vue from "vue";
import Vuex from "vuex";
import api from "../api/routers.js";
import router from "../router/index.js";

Vue.use(Vuex);

const state = () => ({
    user: [],
    routes: {
        register: {
            api: "auth/signup"
        },
        login: {
            api: "auth/login"
        },
    },
});

const getters = {};

const mutations = {

};

const actions = {
    FETCH_USERS({
        commit
    }) {
        api.get({
                api: state().routes.getALL.api
            })
            .then(res => {
                if (res.status == 200 || res.status == 201 || res.status == 202) {
                    // commit("POPULATE_USERS", res.data)
                }
            })
            .catch(err => {
                console.log(err);
            })
    },
    CHECK_ME({
        commit
    }) {
        if (!localStorage.token) {
            // Редирект по имени компонента
            router.push({
                name: "Register"
            })
        }
    },
    REGISTER({commit}) {
        event.preventDefault()

        let obj = {}
        let fm = new FormData(event.target)

        fm.forEach((value, key) => {
            obj[key] = value
        })
        api.post({
                api: state().routes.register.api, obj})
            .then(res => {
                if (res.status == 200 || res.status == 201 || res.status == 202) {
                    localStorage.user = JSON.stringify(res.data)
                    localStorage.token = res.data.token
                    router.push({
                        name: "Userpage"
                    })
                }
            })
            .catch(err => {
                console.log(err);
            })
    },
    LOGIN({commit}) {

        let obj = {}
        let form = new FormData(event.target)

        form.forEach((value, key) => {
            obj[key] = value
        })
   
        api.get({api: state().routes.login.api})
            .then(res => {
                if (res.status == 200 || res.status == 201 || res.status == 202) {
                    // console.log(res.data)
                    router.push({name: "Userpage"})
                }
            })
            .catch(err => {
                console.log(err);
            })
    },
};

export default {
    state,
    getters,
    mutations,
    actions,
};