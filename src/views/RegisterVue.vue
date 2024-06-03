<template>
  <div class="register-container">
    <h2>{{$t('Register')}}</h2>
    <form @submit.prevent="registerUser">
      <div class="form-group">
        <label for="username">{{$t('Username')}}</label>
        <input type="text" v-model="username" id="username" required />
      </div>
      <div class="form-group">
        <label for="password">{{$t('Password')}}</label>
        <input type="password" v-model="password" id="password" required />
      </div>
      <div class="form-group">
        <label for="passwordCheck">{{$t('Password Check')}}</label>
        <input type="password" v-model="passwordCheck" id="passwordCheck" required />
      </div>
      <button type="submit">{{$t('Register')}}</button>
    </form>
    <p>{{$t('Already have an account')}}? <router-link to="/signin">{{$t('Sign In')}}</router-link></p>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: "RegisterVue",
  data() {
    return {
      username: '',
      password: '',
      passwordCheck: '' // Polje za proveru lozinke
    };
  },
  methods: {
    ...mapActions(['signUp']), // Akcija signUp iz Vuex store-a
    registerUser() {
      if (this.password !== this.passwordCheck) {
        alert('Passwords do not match');
        return;
      }
      const newAccount = { username: this.username, password: this.password };
      this.signUp(newAccount)
        .then(() => {
          this.$router.push({ name: 'SignIn' });
        })
        .catch(error => {
          alert(error.message);
        });
    }
  }
};
</script>

<style scoped>
.register-container {
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
