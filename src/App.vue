<template>
  <div id="app">
    <AddUser />
    <UserCard />
    <EmployeeCard />
  </div>
</template>

<script>
import UserCard from "./components/UserCard";
import AddUser from "./components/AddUser";
import EmployeeCard from "./components/EmployeeCard";
export default {
  name: 'App',
  components: {
    UserCard,
    AddUser,
    EmployeeCard
  }
};
</script>

<style>
body {
  background: linear-gradient(45deg, #6cfd9f, #6887ff);
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 10px;
  width: 1000px;
}
</style>
