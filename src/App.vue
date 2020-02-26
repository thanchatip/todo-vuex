<template>
  <div id="app">
      <nav class="navbar sticky-top navbar-expand-sm navbar-light bg-light mb-4">
      <a class="navbar-brand" href="#">Navbar</a>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <router-link :to="{ name: 'Todo'}" class="nav-link">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'Create' }" class="nav-link">Create</router-link>
          </li>
        </ul>
      </div>
    </nav>
    <div class="container">
    <router-view/>
    </div>
  </div>
</template>

<style>
@import url("https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css");

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    margin-top: 20px;
  }
</style>
