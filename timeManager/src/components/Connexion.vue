<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Connexion</h2>
    <h3 id="barreSaisie">
        <input type="email" value="E-Mail" />
        <input type="password" value="PassWord" />
    </h3>
    <ul>
      <li>
          <button>New User</button>
          <button>Log In</button>
      </li>

    </ul>
  </div>
</template>

<script>

export default {
  name: 'Connexion',
  data () {
    var vEmail;
    var vPassword
    var barreSaisie = document.getElementById('barreSaisie');
    barreSaisie.addEventListener('email', vEmail);
    barreSaisie.addEventListener('password', vPassword);
    return {
      msg: 'Bienvenue sur Time Manager'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
