<template>
  <div class="hello">
    <h1>REGISTER INFORMATION</h1>
    <input type="email" name="email" v-model="email" placeholder="email" /><br>
    <input type="password" name="password" v-model="password" placeholder="password" />
    <div class="error" v-html="error"></div>
    <button @click="register"> submit </button>
  </div>
</template>

<script>
import auth from '@/services/auth'
export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async register () {
      try {
        await auth.register({
          email: this.email,
          password: this.password
        })
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }

}
</script>

<style scoped>
.error {
  color: red;
}
</style>
