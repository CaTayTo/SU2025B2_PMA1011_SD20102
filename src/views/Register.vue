<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="container my-5">
    <h2 class="section-title">Register</h2>
    <form @submit.prevent="register" class="col-md-6 mx-auto">
      <div class="mb-3">
        <label for="email" class="form-label">Email</label>
        <input type="email" class="form-control" id="email" v-model="email" required />
      </div>
      <div class="mb-3">
        <label for="password" class="form-label">Password</label>
        <input type="password" class="form-control" id="password" v-model="password" required />
      </div>
      <div class="mb-3">
        <label for="confirmPassword" class="form-label">Confirm Password</label>
        <input
          type="password"
          class="form-control"
          id="confirmPassword"
          v-model="confirmPassword"
          required
        />
      </div>
      <div v-if="error" class="alert alert-danger">{{ error }}</div>
      <button type="submit" class="btn btn-success w-100">Register</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const email = ref('')
const password = ref('')
const confirmPassword = ref('')
const error = ref('')

const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return re.test(email)
}

const validatePassword = (password) => {
  const re = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/
  return re.test(password)
}

const register = () => {
  if (!validateEmail(email.value)) {
    error.value = 'Invalid email format'
    return
  }
  if (!validatePassword(password.value)) {
    error.value =
      'Password must be at least 6 characters, with 1 uppercase, 1 number, and 1 special character'
    return
  }
  if (password.value !== confirmPassword.value) {
    error.value = 'Passwords do not match'
    return
  }
  let users = JSON.parse(localStorage.getItem('users')) || []
  if (users.some((user) => user.email === email.value)) {
    error.value = 'Email already exists'
    return
  }
  const newUser = {
    id: users.length + 1,
    email: email.value,
    password: password.value,
    role: 'customer',
  }
  users.push(newUser)
  localStorage.setItem('users', JSON.stringify(users))
  router.push('/login')
}
</script>
<style scoped>
.section-title::after {
  background: #00575c;
}
.btn-success {
  background: #00575c;
}
</style>
