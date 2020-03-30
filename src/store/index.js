import Vuex from 'vuex';
import Vue from 'vue';
import axios from 'axios'
import users from './modules/users';
import employees from './modules/employees';

Vue.use(Vuex, axios);

export default new Vuex.Store({
    modules: {
        users,
        employees
    }
});