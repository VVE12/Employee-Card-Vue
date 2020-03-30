<template>
    <div class="user-card">
        <h2>Users</h2>
        <div class="user-container" v-for="(user, u) in getUsers" :key="`${u}`">
            <div class="user-block">
                <div class="user-form">
                    <div class="user-form__inner">
                        <div class="user-footer">
                            <div class="user-nameblock">
                                <div class="user-name">Name: <i>{{user.name}}</i></div>
                            </div>
                        </div>
                    </div>
                    <div class="user-buttons">
                        <button type="button" class="user-button__delete" @click="deleteUser(user.id)">Delete</button>
                    </div>
                </div>
            </div>
        </div>
        <h2>Activists</h2>
        <div class="activist-container" v-for="(activist, a) in getActivists" :key="`${a}-${activist.id}`">
            <div class="activist-block">
                <div class="activist-form">
                    <div class="activist-form__inner">
                        <div class="activist-header">
                            <div class="activist-avatar">
                                <img class="activist-image" v-bind:src="activist.picture">
                            </div>
                        </div>
                        <div class="activist-footer">
                            <div class="activist-name">
                                <div class="activist-firstname">Firstname: <i>{{activist.firstname}}</i></div>
                                <div class="activist-lastname">Lastname: <i>{{activist.lastname}}</i></div>
                            </div>
                            <div class="activist-dateofbirth">Date: <i>{{activist.dob}}</i></div>
                            <div class="activist-country">Country: <i>{{activist.country}}</i></div>
                            <div class="activist-occupation">Occupation: <i>{{activist.occupation}}</i></div>
                        </div>
                    </div>
                    <div class="activist-buttons">
                        <button type="button" class="activist-button__delete">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";
export default {
    name: "UserCard",
    methods: {
        ...mapActions(['fetchUsers', 'deleteUser'])
    },
    computed: {
        ...mapState(['activists']),
        ...mapGetters(['getActivists', 'getUsers'])
    },
    created() {
        this.fetchUsers();
    }
};
</script>

<style>
h1 {
    text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.7);
    color: #fff;
}
.activist-container {
    margin: 0 auto;
    width: 450px;
}
.activist-block {
    background: radial-gradient(ellipse at center, #ffffff 0%, #a2a2a2 100%);
    border: 1px solid #fff0;
    border-radius: 4px;
    margin-bottom: 30px;
    text-align: center;
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.2);
    width: 450px;
    height: 210px;
}
.activist-form {
    display: flex;
    flex-direction: column;
    font-size: 15px;
    text-transform: capitalize;
    margin: 10px;
}
.activist-form__inner {
    display: flex;
}
.activist-image {
    border-radius: 50%;
    height: 150px;
    width: 160px;
}
.activist-name {
    text-align: left;
}
.activist-firstname {
    margin: 10px;
    font-weight: bold;
    text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.7)
}
.activist-firstname>i {
    font-weight: normal;
    text-shadow: 1px 1px 2px rgb(0, 0, 0);
    color: #fff;
}
.activist-lastname {
    margin: 10px;
    font-weight: bold;
    text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.7)
}
.activist-lastname>i {
    font-weight: normal;
    text-shadow: 1px 1px 2px rgb(0, 0, 0);
    color: #fff;
}
.activist-dateofbirth {
    margin: 10px;
    text-align: left;
    font-weight: bold;
    text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.7)
}
.activist-dateofbirth>i {
    font-weight: normal;
    text-shadow: 1px 1px 2px rgb(0, 0, 0);
    color: #fff;
}
.activist-country {
    margin: 10px;
    text-align: left;
    font-weight: bold;
    text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.7)
}
.activist-country>i {
    font-weight: normal;
    text-shadow: 1px 1px 2px rgb(0, 0, 0);
    color: #fff;
}
.activist-occupation {
    margin: 10px;
    text-align: left;
    font-weight: bold;
    text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.7)
}
.activist-occupation>i {
    font-weight: normal;
    text-shadow: 1px 1px 2px rgb(0, 0, 0);
    color: #fff;
}
.activist-button__delete {
    display: inline-block;
    font-weight: 400;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    border: 1px solid transparent;
    padding: .375rem .75rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: .25rem;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    color: #fff;
    background-color: #dc3545;
    border-color: #dc3545;
    cursor: pointer;
}
.user-container {
    margin: 0 auto;
    width: 450px;
}
.user-block {
    background: radial-gradient(ellipse at center, #ffffff 0%, #a2a2a2 100%);
    border: 1px solid #fff0;
    border-radius: 4px;
    margin-bottom: 30px;
    text-align: center;
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.2);
    width: 450px;
    height: 100px;
}
.user-form {
    display: flex;
    flex-direction: column;
    font-size: 15px;
    text-transform: capitalize;
    margin: 10px;
}
.user-form__inner {
    display: flex;
}
.user-image {
    border-radius: 50%;
    height: 150px;
    width: 160px;
}
.user-nameblock {
    text-align: left;
}
.user-name {
    margin: 10px;
    font-weight: bold;
    text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.7)
}
.user-name>i {
    font-weight: normal;
    text-shadow: 1px 1px 2px rgb(0, 0, 0);
    color: #fff;
}
.user-username {
    margin: 10px;
    font-weight: bold;
    text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.7)
}
.user-username>i {
    font-weight: normal;
    text-shadow: 1px 1px 2px rgb(0, 0, 0);
    color: #fff;
}
.user-email {
    margin: 10px;
    text-align: left;
    font-weight: bold;
    text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.7)
}
.user-email>i {
    font-weight: normal;
    text-shadow: 1px 1px 2px rgb(0, 0, 0);
    color: #fff;
}
.user-phone {
    margin: 10px;
    text-align: left;
    font-weight: bold;
    text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.7)
}
.user-phone>i {
    font-weight: normal;
    text-shadow: 1px 1px 2px rgb(0, 0, 0);
    color: #fff;
}
.user-website {
    margin: 10px;
    text-align: left;
    font-weight: bold;
    text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.7)
}
.user-website>i {
    font-weight: normal;
    text-shadow: 1px 1px 2px rgb(0, 0, 0);
    color: #fff;
}
.user-button__delete {
    display: inline-block;
    font-weight: 400;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    border: 1px solid transparent;
    padding: .375rem .75rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: .25rem;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    color: #fff;
    background-color: #dc3545;
    border-color: #dc3545;
    cursor: pointer;
}
input[type="text"] {
    flex: 10;
    padding: 10px;
    border: 1px solid #41b883;
    outline: 0;
}
input[type="submit"] {
    flex: 2;
    background: #41b883;
    color: #fff;
    border: 1px #41b883 solid;
    cursor: pointer;
}
</style>