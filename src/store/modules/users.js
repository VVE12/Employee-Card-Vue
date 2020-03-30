import Vuex from 'vuex';
import Vue from 'vue';
import axios from 'axios'

Vue.use(Vuex, axios);

const state = {
    activists: [{
            id: 1,
            firstname: 'Greta',
            lastname: 'Thunberg',
            dob: '2003-01-03',
            country: 'Sweden',
            occupation: 'Climate Activist',
            picture: 'https://upload.wikimedia.org/wikipedia/commons/1/14/Greta_Thunberg_au_parlement_europ%C3%A9en_%2833744056508%29%2C_recadr%C3%A9.png'
        },
        {
            id: 2,
            firstname: 'Anton',
            lastname: 'Abele',
            dob: '1992-01-10',
            country: 'Sweden',
            occupation: 'Political Activist',
            picture: 'https://upload.wikimedia.org/wikipedia/commons/0/0f/Anton_Abele_2013.jpg'
        }
    ],
    users: []
};

const getters = {
    getActivists: state => {
        return state.activists.filter(activist => activist.id)
    },
    getUsers: state => state.users
};

const actions = {
    async fetchUsers({ commit }) {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        commit('setUsers', response.data);
    },
    async addUser({ commit }, name) {
        const response = await axios.post('https://jsonplaceholder.typicode.com/users', { name });
        commit('newUser', response.data);
    },
    async deleteUser({ commit }, id) {
        const response = await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
        commit('removeUser', id);
    }
};

const mutations = {
    setUsers: (state, users) => (state.users = users),
    newUser: (state, user) => state.users.unshift(user),
    removeUser: (state, id) => (state.users = state.users.filter(user => user.id !== id))
};

export default ({
    state,
    getters,
    actions,
    mutations
})