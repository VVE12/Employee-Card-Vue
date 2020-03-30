<template>
    <div class="employee-card">
        <h1>Employee Card</h1>
        <div class="employee-container" v-for="employee in employees" :key="employee.login.md5">
            <div class="employee-block">
                <div class="employee-form">
                    <div class="employee-header">
                        <div class="employee-avatar">
                            <img class="employee-image" v-bind:src="employee.picture.large">
                        </div>
                    </div>
                    <div class="employee-footer">
                        <div class="employee-name">
                            <div class="employee-firstname">Firstname: <i>{{employee.name.first}}</i></div>
                            <div class="employee-lastname">Lastname: <i>{{employee.name.last}}</i></div>
                        </div>
                        <div class="employee-dateofbirth">Date: <i>{{employee.dob.date}}</i></div>
                    </div>
                    <div class="employee-buttons">
                        <button type="button" class="employee-button__delete">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState, mapGetters } from "vuex"
export default {
    name: "EmployeeCard",
    computed: {
        ...mapState(['employees']),
        ...mapGetters(['getEmployees'])
    },
    created() {
        this.$store.dispatch('fetchEmployees')
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
    text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.7);
    color: #fff;
}
.employee-container {
    margin: 0 auto;
    width: 450px;
}
.employee-block {
    background: radial-gradient(ellipse at center, #ffffff 0%, #a2a2a2 100%);
    border: 1px solid #fff0;
    border-radius: 4px;
    margin-bottom: 30px;
    text-align: center;
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.2);
    width: 450px;
    height: 150px;
}
.employee-form {
    display: flex;
    flex-direction: row;
    font-size: 15px;
    text-transform: capitalize;
    margin: 10px;
}
.employee-image {
    border-radius: 50%;
}
.employee-name {
    text-align: left;
}
.employee-firstname {
    margin: 10px;
    font-weight: bold;
    text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.7)
}
.employee-firstname>i {
    font-weight: normal;
    text-shadow: 1px 1px 2px rgb(0, 0, 0);
    color: #fff;
}
.employee-lastname {
    margin: 10px;
    font-weight: bold;
    text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.7)
}
.employee-lastname>i {
    font-weight: normal;
    text-shadow: 1px 1px 2px rgb(0, 0, 0);
    color: #fff;
}
.employee-dateofbirth {
    margin: 10px;
    text-align: left;
    font-weight: bold;
    text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.7)
}
.employee-dateofbirth>i {
    font-weight: normal;
    text-shadow: 1px 1px 2px rgb(0, 0, 0);
    color: #fff;
}
.employee-button__delete {
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
</style>