<template>
  <div class="updateEmail">
    <h1>{{ msg }}</h1>
    <h2>Update Email</h2>
    <h3 id="barreSaisie">
        <input type="email" value="E-Mail" />
    </h3>
    <ul>
      <li>
          <button>Update Email</button>
      </li>

    </ul>
  </div>
</template>

<script>

export default {
  name: 'SignUp',
  data () {
    var vEmail;
    var vPassword
    var barreSaisie = document.getElementById('barreSaisie');
    barreSaisie.addEventListener('email', vEmail);
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
