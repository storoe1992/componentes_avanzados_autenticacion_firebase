<template>
  <div id="login">
    <img src="../assets/logo.png" class="img-inicial">
    <form label-width="100px" class="form-login" :model="formLabelAlign">
      <input class="auth-element" placeholder="Correo electrónico" v-model="formLabelAlign.user" />
      <input class="auth-element" type="password" placeholder="Contraseña" v-model="formLabelAlign.password" autocomplete="off" />
      <button class="ingresar-login auth-element" @click="login($event)">Ingresar</button>
      <button class="ingresar-login auth-element" @click="goHome($event)">Ir al home por la fuerza</button>
    </form>
  </div>
</template>

​<script>

import Firebase from 'firebase';
import FirebaseConfig from '../firebase';
// Initialize Firebase
Firebase.initializeApp(FirebaseConfig);
export default {
    data() {
        return {
            formLabelAlign: {
                            user: '',
                            password: ''
                            }
        }
    },
    methods: {
        login(event) {
          event.preventDefault();
            Firebase.auth().signInWithEmailAndPassword(this.formLabelAlign.user,this.formLabelAlign.password)
            .then(
                accept => this.$router.push('/home'),
                reject => alert("Fallo la autenticación"));
        },
        goHome(event){
            event.preventDefault();
            this.$router.push('/home');
        }
    },
}
</script>

<style lang="scss" scoped>

@mixin vertical-disposition{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

#login {
    
    @include vertical-disposition;
    height: 100vh;

    .form-login{
        @include vertical-disposition;
    
        .ingresar-login{
            width: 100%;
        }

        .auth-element{
            margin: 10px auto;
            height: 30px;
        }
    }
}
</style>