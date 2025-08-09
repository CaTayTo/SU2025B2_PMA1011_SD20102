<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <!-- Banner -->
    <div class="banner">
      <img
        src="https://petland.com.vn/wp-content/uploads/2023/11/2-1.png"
        alt="Banner cửa hàng thú cưng"
        class="banner-image"
        @error="handleImageError"
      />
    </div>

    <!-- Form đăng nhập -->
    <div class="container my-5">
      <h2 class="section-title">Đăng nhập</h2>
      <form @submit.prevent="login" class="col-md-6 col-lg-5 mx-auto login-form shadow-lg">
        <!-- Email -->
        <div class="mb-4 position-relative">
          <label for="email" class="form-label">Email</label>
          <div class="input-group">
            <span class="input-group-text">
              <i class="bi bi-envelope"></i>
            </span>
            <input
              type="email"
              class="form-control"
              id="email"
              v-model="email"
              placeholder="Nhập email của bạn"
              required
            />
          </div>
        </div>

        <!-- Password -->
        <div class="mb-4 position-relative">
          <label for="password" class="form-label">Mật khẩu</label>
          <div class="input-group">
            <span class="input-group-text">
              <i class="bi bi-lock"></i>
            </span>
            <input
              type="password"
              class="form-control"
              id="password"
              v-model="password"
              placeholder="Nhập mật khẩu"
              required
            />
          </div>
        </div>

        <!-- Thông báo lỗi -->
        <div v-if="error" class="alert alert-danger alert-dismissible fade show" role="alert">
          {{ error }}
          <button type="button" class="btn-close" @click="error = ''" aria-label="Close"></button>
        </div>

        <!-- Nút đăng nhập -->
        <button type="submit" class="btn btn-primary w-100 btn-login mb-3">Đăng nhập</button>

        <!-- Liên kết bổ sung -->
        <div class="text-center">
          <p class="mb-2"></p>
          <p>
            Chưa có tài khoản?
            <router-link to="/register" class="text-pink">Đăng ký ngay</router-link>
          </p>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const email = ref('')
const password = ref('')
const error = ref('')

const login = () => {
  const users = JSON.parse(localStorage.getItem('users')) || []
  const user = users.find((u) => u.email === email.value && u.password === password.value)
  if (!user) {
    error.value = 'Email hoặc mật khẩu không đúng'
    return
  }
  localStorage.setItem('user', JSON.stringify(user))
  router.push('/').then(() => {
    window.location.reload()
  })
}

const handleImageError = (event) => {
  console.error('Không thể tải hình ảnh:', event.target.src)
  event.target.src = 'https://via.placeholder.com/300'
}
</script>

<style scoped>
/* Banner */
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

/* Tiêu đề */
.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #00575c;
  position: relative;
  margin-bottom: 3rem;
  text-align: center;
}

.section-title::after {
  content: '';
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: -10px;
  width: 50px;
  height: 3px;
  background-color: #00575c; /* Pink underline */
}

/* Form đăng nhập */
.login-form {
  background-color: #ffffff;
  padding: 2rem;
  border-radius: 15px;
  border: 1px solid #e9ecef;
}

.form-label {
  font-weight: 500;
  color: #343a40;
  margin-bottom: 0.5rem;
}

.input-group-text {
  background-color: #f8f9fa;
  border-right: none;
  color: #00575c;
}

.form-control {
  border-radius: 0 10px 10px 0;
  border-left: none;
  padding: 0.75rem 1rem;
  transition:
    border-color 0.3s ease,
    box-shadow 0.3s ease;
}

.form-control:focus {
  border-color: #00575c;
  box-shadow: 0 0 0 0.25rem #00575c(255, 111, 97, 0.25);
  outline: none;
  border: none;
}

/* Thông báo lỗi */
.alert {
  border-radius: 10px;
  font-size: 0.9rem;
  padding: 0.75rem 1rem;
}

/* Nút đăng nhập */
.btn-login {
  background-color: #00575c;
  border-color: #00575c;
  font-weight: 600;
  padding: 0.75rem;
  border-radius: 10px;
  transition:
    background-color 0.3s ease,
    transform 0.3s ease;
}

.btn-login:hover {
  background-color: #00575c;
  border-color: #00575c;
  transform: translateY(-2px);
}

/* Liên kết bổ sung */
.text-pink {
  color: #00575c;
  text-decoration: none;
  font-weight: 500;
}

.text-pink:hover {
  color: #00575c;
  text-decoration: underline;
}

/* Responsive adjustments */
@media (max-width: 767px) {
  .section-title {
    font-size: 2rem;
  }

  .login-form {
    padding: 1.5rem;
  }

  .form-control {
    padding: 0.5rem 0.75rem;
  }

  .btn-login {
    padding: 0.5rem;
  }
}
</style>
