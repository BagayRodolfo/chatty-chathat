<template>
  <div class="register">
    <div class="register-container">
      <div class="content-title">User Registration</div>
      <div class="content">
        <div class="form-register">
          <div class="register-fields">
            <div class="username">
              <label>Username:</label>
              <input v-model="username" type="text">
              <span class="error-icon"></span>
            </div>
            <div class="password">
              <label>Password:</label>
              <input v-model="password" type="password">
              <span class="error-icon"></span>
            </div>
            <div class="confirm-password">
              <label>Confirm Password</label>
              <input type="password">
              <span class="error-icon"></span>
            </div>
            <div class="email">
              <label>Email:</label>
              <input v-model="email" type="email">
              <span class="error-icon"></span>
            </div>
          </div>
          <div class="btn-register">
            <button @click="registerUser()">Register</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      username: '',
      password: '',
      isSamePassword: false,
      email: ''
    }
  },
  methods: {
    registerUser () {
      // const baseURI = 'http://192.168.1.12:3001/register'
      const dt = {
        user: this.username,
        password: this.password,
        email: this.email
      }
      // const conf = {
      //   headers: {
      //     'Access-Control-Allow-Headers': 'Content-Type',
      //     'Content-Type': 'application/json',
      //     Accept: '*/*'
      //   }
      // }
      this.$https.post('register', dt)
        .then((res) => {
          console.log(res.data)
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }
}
</script>
<style lang="scss">

</style>
