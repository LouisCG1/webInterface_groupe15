<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

import Connexion from '@/components/Connexion'

export default {
  name: 'App',
  components: {
    Connexion
  }
}
</script>
