<template>
  <div class="login">
    <div class="login-container">
      <div class="content-title">User Login</div>
      <div class="content">
        <div class="form-login">
          <div class="login-fields">
            <div class="username">
              <label>Username:</label>
              <input v-model="username" type="text">
              <span class="error-icon"></span>
            </div>
            <div class="password">
              <label>Password</label>
              <input v-model="password" type="password">
              <span class="error-icon"></span>
            </div>
          </div>
          <div class="btn-login">
            <button @click="login()">Login</button>
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
      password: ''
    }
  },
  methods: {
    login () {
      const baseURI = 'http://192.168.1.12:3001/login'
      const dt = {
        user: this.username,
        password: this.password
      }
      const conf = {
        headers: {
          'Access-Control-Allow-Headers': 'Content-Type',
          'Content-Type': 'application/json',
          Accept: '*/*'
        }
      }
      this.$https.post(baseURI, dt, conf)
        .then((res) => {
          console.log(this)
          if (res.data.status === 'success') {
            console.log(res.data.user)
            this.$store.dispatch('loginUser')
          } else {
            console.log(res.data.status)
          }
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }
}
</script>
