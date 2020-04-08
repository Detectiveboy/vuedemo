<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
      <br />
      <router-link to="/about">About</router-link>
      <br />
      <router-link to="/exerciseone">Exerciseone</router-link>
      <br />
      <router-link to="/v-for">V-for</router-link>
      <br />
      <router-link to="/exercisetwo">Exercisetwo</router-link>
      <br />
      <router-link to="/form">Form</router-link>
      <br />
      <router-link to="/exercisethree">Exercisethree</router-link>
      <br />
      <router-link to="/twoProps">TwoProps</router-link>
      <br />
      <router-link to="/exercisefour">Exercisefour</router-link>
      <br />
      <router-link to="/directive">Directive</router-link>
      <br />
      <router-link to="/exercisefive">Exercisefive</router-link>
      <br />
      <router-link to="/lifeCycle">LifeCycle</router-link>
      <br />
      <router-link to="/exercisesix">Exercisesix</router-link>
      <br />
      <router-link to="/component">Component</router-link>
      <br />
      <router-link to="/exerciseseave">Exerciseseave</router-link>
      <br />
      <router-link to="/parent">Parent</router-link>
      <br />
      <router-link to="/vuexdemo">Vuexdemo</router-link>
      <br />
      <router-link to="/slot">Slot</router-link>
      <br />
      <router-link to="/compgroup">CompGroup</router-link>
      <br />
      <router-link to="/render">Render</router-link>
      <br />
      <router-link to="/exerciseeight">Exerciseeight</router-link>
      <br />
      <router-link to="/routerparams">Routerparams</router-link>
      <br />
      <router-link to="/singlerouter">Singlerouter</router-link>
      <br />
      <router-link to="/routerguard">Routerguard</router-link>
      <br />
      <router-link to="/axios">Axios</router-link>
    </div>
    <div id="rightView">
      <router-view />
    </div>
  </div>
</template>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
html,
body,
#app {
  width: 100%;
  height: 100%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  display: flex;
}

#nav {
  width: 200px;
  height: 100%;
  border-right: 1px solid rgb(139, 113, 113);
  overflow-y: auto;
  text-align: center;
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
#rightView {
  flex: 1;
  height: 100%;
  overflow-y: auto;
}
</style>
