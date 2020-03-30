<template>
    <div class="user-container">
        <h1>User Card</h1>
        <div class="user-add">
            <form @submit="onSubmit">
                <input type="text" v-model="name" placeholder="Name...">
                <input type="submit" value="Add">
            </form>
        </div>
    </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
    name: "AddUser",
    data() {
        return {
            name: "",
        };
    },
    methods: {
        ...mapActions(["addUser"]),
        onSubmit(e) {
            e.preventDefault();
                this.addUser(this.name);
        }
    }
};
</script>

<style scoped>
form {
    display: flex;
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