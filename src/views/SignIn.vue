<template>
    <div class="sign-in-container">
      <h2>{{$t('Sign In')}}</h2>
      <form @submit.prevent="signInUser">
        <div class="form-group">
          <label for="username">{{$t('Username')}}</label>
          <input type="text" v-model="username" id="username" required />
        </div>
        <div class="form-group">
          <label for="password">{{$t('Password')}}</label>
          <input type="password" v-model="password" id="password" required />
        </div>
        <button type="submit">{{$t('Sign In')}}</button>
      </form>
      <p>{{$t("Don't have an account")}}? <router-link to="/register">{{$t('Register')}}</router-link></p>
    </div>
  </template>
  
<script>
import { mapActions } from 'vuex';

export default {
name: "SignIn",
data() {
    return {
    username: '',
    password: ''
    };
},
methods: {
    ...mapActions(['signIn']),
    signInUser() {
    const user = { username: this.username, password: this.password };
    this.signIn(user);
    this.$router.push({ name: 'AccountVue' });
    }
}
};
</script>
  
<style scoped>
.sign-in-container {
max-width: 400px;
margin: 0 auto;
padding: 20px;
border: 1px solid #ddd;
border-radius: 5px;
border-color: #ffd360;
}

.form-group {
margin-bottom: 15px;
}

.form-group label {
display: block;
margin-bottom: 5px;
}

.form-group input {
width: 100%;
padding: 8px;
box-sizing: border-box;
}

button {
width: 100%;
padding: 10px;
background-color: #ffd360;
border: none;
color: white;
border-radius: 5px;
cursor: pointer;
}

button:hover {
background-color: #d6901f;
}

p {
margin-top: 15px;
text-align: center;
}
</style>
  