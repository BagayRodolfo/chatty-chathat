<template>
  <div class="register">
    <div class="register-container">
      <div class="content-title">User Registration</div>
      <div class="content">
        <div class="form-register">
          <div>
            <div class="username">
              <label>Username:</label>
              <input type="text" name="" id="">
              <span class="error-icon"></span>
            </div>
            <div class="password">
              <label>Password:</label>
              <input type="password" name="" id="">
              <span class="error-icon"></span>
            </div>
            <div class="confirm-password">
              <label>Confirm Password</label>
              <input type="password" name="" id="">
              <span class="error-icon"></span>
            </div>
            <div class="email">
              <label>Email:</label>
              <input type="email" name="" id="">
              <span class="error-icon"></span>
            </div>
          </div>
          <div class="btn-register">
            <button>Register</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {}
  },
  methods: {
    registerUser () {
      const baseURI = 'http://192.168.1.24:3001/register'
      const dt = { user: 'keanu', password: '123', email: '123@gmail.com' }
      const params = {
        headers: {
          'Access-Control-Allow-Headers': 'Content-Type',
          'Content-Type': 'application/json',
          Accept: '*/*'
        }
      }
      this.$https.post(baseURI, dt, params)
        .then((res) => {
          console.log(res)
        })
        .catch((error) => {
          console.log(error)
        })
    }
  },
  mounted () {
    this.registerUser()
  }
}
</script>
<style lang="scss">

</style>
