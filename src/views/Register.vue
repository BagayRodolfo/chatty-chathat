<template>
  <div class="register">
    <div class="register-container">
      <div class="content-title">User Registration</div>
      <div class="content">
        <div class="form-register">
          <form>
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
          </form>
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
  methods: {},
  mounted () {}
}
</script>
<style lang="scss">

</style>
