<template>
  <div class="navbar">
    <nav>
      <h1 id="title">Jcheez's Zi Char</h1>
      <ul>
        <li><router-link to="/" exact>Home</router-link></li>
        <li><router-link to="/orders" exact>Orders</router-link></li>
        <li><router-link to="/dashboard" exact>Dashboard</router-link></li>
      </ul>
    </nav>
  </div>
</template>

<style scoped>
#title {
  text-align:center;
  background-color:orange;
  color:white;
  padding:30px;
  margin:0px;
}

ul {
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 0;
}
li {
  flex-grow: 1;
  flex-basis: 300px;
  text-align: center;
  padding: 10px;
  border: 1px solid #222;
  margin: 10px;
}
</style>