eslint-disable vue/multi-word-component-names eslint-disable vue/valid-v-else
<template>
  <nav class="navbar navbar-expand-lg">
    <div class="container">
      <router-link class="navbar-brand" to="/">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJiU2blXLCrtzsAXM_np-3XI_Jipnt3J_ctg&s"
          alt="Meow Shop Logo"
          class="logo"
        />
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Bật/tắt điều hướng"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav mx-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Trang chủ</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/products">Sản phẩm</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/about">Giới thiệu</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/news">Tin tức</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/contact">Liên hệ</router-link>
          </li>
        </ul>
        <ul class="navbar-nav ms-auto align-items-center">
          <li class="nav-item">
            <router-link class="nav-link" to="/cart">
              <i class="bi bi-cart"></i> Giỏ hàng
              <span class="badge bg-pink text-white">{{ cartItemCount }}</span>
            </router-link>
          </li>
          <li class="nav-item" v-if="user">
            <router-link class="nav-link" to="/orders">Đơn hàng</router-link>
          </li>
          <li class="nav-item dropdown" v-if="user && user.role === 'admin'">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="adminDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              @click.prevent="toggleDropdown"
            >
              Quản trị
            </a>
            <ul
              class="dropdown-menu"
              :class="{ show: isDropdownOpen }"
              aria-labelledby="adminDropdown"
            >
              <li>
                <router-link class="dropdown-item" to="/admin/products" @click="closeDropdown"
                  >Quản lý sản phẩm</router-link
                >
              </li>
              <li>
                <router-link class="dropdown-item" to="/admin/categories" @click="closeDropdown"
                  >Quản lý danh mục</router-link
                >
              </li>
              <li>
                <router-link class="dropdown-item" to="/admin/orders" @click="closeDropdown"
                  >Quản lý đơn hàng</router-link
                >
              </li>
            </ul>
          </li>
          <li class="nav-item" v-if="user">
            <router-link class="nav-link" to="/change-password">Đổi mật khẩu</router-link>
          </li>
          <li class="nav-item" v-if="user">
            <a class="nav-link" href="#" @click.prevent="logout">Đăng xuất</a>
          </li>
          <li class="nav-item" v-else>
            <router-link class="nav-link btn btn-login" to="/login">Đăng nhập</router-link>
          </li>
          <li class="nav-item">
            <!--v-else-->
            <router-link class="nav-link" to="/register">Đăng ký</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const user = ref(JSON.parse(localStorage.getItem('user')) || null)
const cartItemCount = ref(0)

// Thêm biến trạng thái dropdown
const isDropdownOpen = ref(false)

const updateCartCount = () => {
  const userData = JSON.parse(localStorage.getItem('user'))
  if (!userData) {
    cartItemCount.value = 0
    return
  }
  const cart = JSON.parse(localStorage.getItem('cart')) || []
  cartItemCount.value = cart
    .filter((item) => item.userId === userData.id)
    .reduce((total, item) => total + item.quantity, 0)
}

onMounted(() => {
  updateCartCount() // Cập nhật ban đầu
  window.addEventListener('storage', (event) => {
    if (event.key === 'cart') {
      updateCartCount() // Cập nhật khi giỏ hàng thay đổi
    }
  })
})

// Thêm sự kiện để toggle và close dropdown
const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value
}

const closeDropdown = () => {
  isDropdownOpen.value = false
}

const logout = () => {
  localStorage.removeItem('user')
  user.value = null
  cartItemCount.value = 0
  router.push('/login').then(() => {
    window.location.reload()
  })
}
</script>

<style scoped>
.navbar {
  background: white; /* Nền màu xanh đậm */
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 1rem 0;
}

.logo {
  max-height: 80px;
  height: auto;
  width: auto;
  border-radius: 12px; /* hoặc bỏ nếu không cần bo tròn */
  transition: transform 0.3s ease;
}

.logo:hover {
  transform: scale(1.1);
}

.navbar-nav {
  gap: 1rem; /* Khoảng cách giữa các mục nav */
}

.nav-link {
  color: #000000 !important; /* Chữ màu đen */
  font-weight: 500;
  padding: 0.5rem 1rem;
  transition:
    color 0.3s ease,
    background-color 0.3s ease;
}

.nav-link:hover {
  color: #ffffff !important;
  background-color: #00575c; /* Nền màu xanh đậm */
  border-radius: 5px;
}

.btn-login {
  background-color: #00575c; /* Nền màu xanh đậm */
  color: #ffffff !important;
  /* border-radius: 20px; */
  padding: 0.5rem 1.5rem;
  transition:
    background-color 0.3s ease,
    transform 0.3s ease;
}

.btn-login:hover {
  background-color: #00575c; /* Nền màu xanh đậm */
  color: #ffffff !important;
  transform: scale(1.05);
}

.navbar-toggler {
  border-color: #000000;
}

.navbar-toggler-icon {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba(0, 0, 0, 0.9)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
}

.dropdown-menu {
  background-color: #00575c; /* Nền màu xanh đậm */
  border: none;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
}

.dropdown-item {
  color: white;
  padding: 0.5rem 1rem;
  transition:
    background-color 0.3s ease,
    color 0.3s ease;
}

.dropdown-item:hover {
  background-color: white;
  color: black;
}

.bg-pink {
  background-color: #ff6f61 !important;
}

.badge {
  font-size: 0.8rem;
  padding: 0.3rem 0.6rem;
  border-radius: 12px;
  position: relative;
  top: -2px;
}

@media (max-width: 991px) {
  .navbar-nav {
    text-align: center;
    padding: 1rem 0;
  }

  .nav-link {
    padding: 0.75rem 1rem;
  }

  .btn-login {
    display: inline-block;
    margin: 0.5rem auto;
    width: auto;
  }

  .dropdown-menu {
    text-align: center;
  }
}
</style>
