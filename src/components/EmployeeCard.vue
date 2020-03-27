<template>
    <div class="container">
        <h1>Employee card</h1>
            <div v-for="(employee, key) in employees.lenght=1" :key="key" class="cols">
                <div class="employee">
                    <div class="employee__header">
                        <img v-bind:src="employees.picture.large" v-bind:alt="employees" class="img">
                        <div class="employee__name">{{employees.name.first}} {{employees.name.last}}</div>
                        <div class="employee__dob">{{employees.dob.date}}</div>
                    </div>
                </div>
            </div>
    </div>
</template>

<script>
import {mapState} from "vuex"
export default {
    name: "employee-card",
    computed: mapState(['employees']),
    created() {
        this.$store.dispatch('loadEmployees')
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.cols {
    width: 400px;
}
.employee {
    background: radial-gradient(ellipse at center, #ffffff 0%, #e5e5e5 100%);
    border: 1px solid #fff0;
    border-radius: 4px;
    margin-bottom: 30px;
    text-align: center;
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.2);
}
.employee__header {
    font-size: 24px;
    text-transform: capitalize;
    margin: 15px 0 30px;
}
.employee__name {
    font-size: 24px;
    text-transform: capitalize;
    margin: 15px 0 30px;
}
.img {
    border-radius: 50%;
}
.employee__dob {
    font-size: 24px;
    text-transform: capitalize;
    margin: 15px 0 30px;
}
</style>