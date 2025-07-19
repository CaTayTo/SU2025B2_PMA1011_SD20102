<template>
  <div class="banner">
    <img
      src="../img/anh1.jpg"
      alt="Banner cửa hàng thú cưng"
      class="banner-image"
      @error="handleImageError"
    />
  </div>

  <div class="container my-5">
    <h2 class="section-title">Change Password</h2>
    <form @submit.prevent="changePassword" class="col-md-6 mx-auto">
      <div class="mb-3">
        <label for="oldPassword" class="form-label">Old Password</label>
        <input
          type="password"
          class="form-control"
          id="oldPassword"
          v-model="oldPassword"
          required
        />
      </div>
      <div class="mb-3">
        <label for="newPassword" class="form-label">New Password</label>
        <input
          type="password"
          class="form-control"
          id="newPassword"
          v-model="newPassword"
          required
        />
      </div>
      <div class="mb-3">
        <label for="confirmNewPassword" class="form-label">Confirm New Password</label>
        <input
          type="password"
          class="form-control"
          id="confirmNewPassword"
          v-model="confirmNewPassword"
          required
        />
      </div>
      <div v-if="error" class="alert alert-danger">{{ error }}</div>
      <button type="submit" class="btn btn-primary w-100">Change Password</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const oldPassword = ref('')
const newPassword = ref('')
const confirmNewPassword = ref('')
const error = ref('')

const validatePassword = (password) => {
  const re = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/
  return re.test(password)
}

const changePassword = () => {
  if (newPassword.value !== confirmNewPassword.value) {
    error.value = 'New passwords do not match'
    return
  }
  if (!validatePassword(newPassword.value)) {
    error.value =
      'New password must be at least 6 characters, with 1 uppercase, 1 number, and 1 special character'
    return
  }
  const user = JSON.parse(localStorage.getItem('user'))
  if (user.password !== oldPassword.value) {
    error.value = 'Old password is incorrect'
    return
  }
  let users = JSON.parse(localStorage.getItem('users')) || []
  const updatedUsers = users.map((u) =>
    u.id === user.id ? { ...u, password: newPassword.value } : u,
  )
  localStorage.setItem('users', JSON.stringify(updatedUsers))
  localStorage.setItem('user', JSON.stringify({ ...user, password: newPassword.value }))
  router.push('/')
}
</script>

<style scoped>
.banner {
  width: 100%;
  height: 300px;
  overflow: hidden;
}

.banner-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.image-container {
  position: relative;
  overflow: hidden;
  border-radius: 10px;
}
.btn-primary {
  background: #00575c;
}
</style>
