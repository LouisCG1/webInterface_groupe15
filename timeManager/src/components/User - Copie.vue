import ChartManager from '@/components/ChartManager'

<template>

  <div class="User">
  
    <h1>
        <p> Connexion :
            <label for="Username">Username</label> :
            <input type="text" name="username" id="username" required>
            <span id="username"></span>
            <input id = "eventConnexion" type="button" value="Connexion">
            <button>Create</button>
            <button>Get</button>
            <button>Delete</button>

        </p>

        <div class="CurrentUser">

          <p class="currentName">ID : {{pseudoUser}}</p>
          <p class="currentAction">e-mail : {{emailUser}}</p>
        </div>


        <label for="Email">Email</label> :
        <input type="text" name="email" id="email" required>
        <span id="email"></span>
        <button>Update</button>
    </h1>



  </div>
</template>

<script>
export default {
  name: 'User',
  data () {
    this.CurrentUser()
    return {
        pseudoUser
    }
  }
}
/*
methods: {
  CurrentUser: function() {
    this.$props.currentUser = pseudoUser
  }
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

methods: {
      getUser: function() {
      var pseudoUser = document.getElementById("username");

      }
}

      createUser: function() {
      var pseudoUser = document.getElementById("username");
      var emailUser = document.getElementById("email");
      }
      updateUser: function() {
      var emailElt = document.getElementById("email");
      }
      getUser: function() {
      }
      deleteUser: function() {
      }
    }
*/
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1{
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
