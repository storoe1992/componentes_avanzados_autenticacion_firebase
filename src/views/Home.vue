<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>Home Page</h1>
    <h2>Te has autenticado bien con firebase</h2>
    <button @click="logout">Salir</button>
  </div>
</template>

<script>

import Firebase from 'firebase'


export default {
  name: 'Home',
  methods: {
    logout() {
      Firebase.auth().signOut().then(() => {
          this.$router.push('/login')
      }).catch((error) => {
          alert("Ocurrió un error mientras se deslogueaba: " + error)
      });
      
    }
  },
}
</script>
