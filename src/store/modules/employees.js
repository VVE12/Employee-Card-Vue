import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex, axios)


const state = {
    employees: []
};

const actions = {
    async fetchEmployees({ commit }) {
        axios.get('https://randomuser.me/api/')
            .then((response) => {
                commit('setEmployees', { employees: response.data.results[0] })
            })
            .catch(error => {
                commit('error', error)
            })
    }
};

const mutations = {
    setEmployees(state, { employees }) {
        state.employees = employees
    }
};

const getters = {
    getEmployees: state => state.employees
};

export default ({
    state,
    actions,
    mutations,
    getters
})