<template>
  <div id="app">
    <img width="25%" src="./assets/logo.png">
    <EmployeeCard />
  </div>
</template>

<script>
import EmployeeCard from "./components/EmployeeCard";
export default {
  name: 'App',
  components: { 
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
  width: 900px;
}
</style>
