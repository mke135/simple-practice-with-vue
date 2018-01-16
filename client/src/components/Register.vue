<template>
  <div class="hello">
    <h1>REGISTER INFORMATION</h1>
    <input type="email" name="email" v-model="email" placeholder="email" />
    <input type="password" name="password" v-model="password" placeholder="password" />
    <button @click="register"> submit </button>
  </div>
</template>

<script>
import auth from '@/services/auth'
export default {
  data () {
    return {
      email: 'abc@gmail.com',
      password: '123'
    }
  },
  methods: {
    async register () {
      const response = await auth.register({
        email: this.email,
        password: this.password
      })
      console.log(response.data)
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
