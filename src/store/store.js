import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex, axios)

export default new Vuex.Store({
    state: {
        employees: []
    },
    actions: {
        loadEmployees({ commit }) {
            axios.get('https://randomuser.me/api/')
                .then((res) => {
                    commit('SET_EMPLOYEES', { employees: res.data.results[0] })
                })
                .catch(error => {
                    commit('API_FAILURE', error)
                })
        }
    },
    mutations: {
        SET_EMPLOYEES(state, { employees }) {
            console.log("Setting active item in state management")
            state.employees = employees
        },
        API_FAILURE(error) {
            console.log("In API Failure")
            console.log(error)
        }
    },
    getters: {
        emp: state => state.employees
    }
})