<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="container my-5">
    <h2 class="section-title">Giỏ hàng của bạn</h2>
    <div v-if="cartItems.length === 0" class="alert alert-info">Giỏ hàng của bạn đang trống.</div>
    <div v-else>
      <div class="row">
        <div class="col-md-12" v-for="item in cartItems" :key="item.id">
          <div class="card mb-3 shadow-sm">
            <div class="row g-0">
              <div class="col-md-2">
                <div class="image-container position-relative">
                  <img
                    :src="item.product.images[item.currentImageIndex || 0]"
                    alt="Product Image"
                    class="img-fluid rounded-start"
                    @error="handleImageError"
                  />
                  <button
                    class="carousel-btn prev"
                    @click="changeImage(item, -1)"
                    :disabled="item.currentImageIndex === 0"
                  >
                    <i class="bi bi-chevron-left"></i>
                  </button>
                  <button
                    class="carousel-btn next"
                    @click="changeImage(item, 1)"
                    :disabled="item.currentImageIndex === item.product.images.length - 1"
                  >
                    <i class="bi bi-chevron-right"></i>
                  </button>
                </div>
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">{{ item.product.name }}</h5>
                  <p class="card-text">Số lượng: {{ item.quantity }}</p>
                  <p class="card-text">
                    Tổng cộng: {{ formatPrice(item.product.price * item.quantity) }} VNĐ
                  </p>
                </div>
              </div>
              <div class="col-md-2 d-flex align-items-center">
                <button class="btn btn-danger" @click="removeFromCart(item)">Xóa</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="text-end">
        <button class="btn btn-primary mt-3 btn-checkout" @click="checkout">Thanh toán</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const cartItems = ref([])

onMounted(() => {
  const user = JSON.parse(localStorage.getItem('user'))
  if (!user) {
    router.push('/login')
    return
  }
  const cart = JSON.parse(localStorage.getItem('cart')) || []
  const products = JSON.parse(localStorage.getItem('products')) || []
  cartItems.value = cart
    .filter((item) => item.userId === user.id)
    .map((item) => ({
      ...item,
      product: products.find((p) => p.id === item.productId),
      currentImageIndex: 0, // Initialize image index for each item
    }))
})

const handleImageError = (event) => {
  console.error('Failed to load image:', event.target.src)
  event.target.src = 'https://via.placeholder.com/300'
}

const changeImage = (item, direction) => {
  item.currentImageIndex = (item.currentImageIndex || 0) + direction
  if (item.currentImageIndex < 0) item.currentImageIndex = 0
  if (item.currentImageIndex >= item.product.images.length) {
    item.currentImageIndex = item.product.images.length - 1
  }
}

const removeFromCart = (item) => {
  let cart = JSON.parse(localStorage.getItem('cart')) || []
  let products = JSON.parse(localStorage.getItem('products')) || []

  // Hoàn lại số lượng stock
  const productIndex = products.findIndex((p) => p.id === item.productId)
  if (productIndex !== -1) {
    products[productIndex].stock += item.quantity // Hoàn lại số lượng đã thêm vào giỏ hàng
    localStorage.setItem('products', JSON.stringify(products)) // Lưu lại danh sách products
  }

  // Xóa khỏi giỏ hàng
  cart = cart.filter((cartItem) => cartItem.id !== item.id)
  localStorage.setItem('cart', JSON.stringify(cart))
  cartItems.value = cartItems.value.filter((cartItem) => cartItem.id !== item.id)

  // Kích hoạt sự kiện storage để navbar cập nhật
  window.dispatchEvent(new Event('storage'))
}

const checkout = () => {
  const user = JSON.parse(localStorage.getItem('user'))
  let orders = JSON.parse(localStorage.getItem('orders')) || []
  const order = {
    id: orders.length + 1,
    userId: user.id,
    items: cartItems.value,
    total: cartItems.value.reduce((sum, item) => sum + item.product.price * item.quantity, 0),
    status: 'completed',
    date: new Date().toISOString(),
  }
  orders.push(order)
  localStorage.setItem('orders', JSON.stringify(orders))

  // Xóa giỏ hàng sau khi thanh toán
  let cart = JSON.parse(localStorage.getItem('cart')) || []
  cart = cart.filter((item) => item.userId !== user.id)
  localStorage.setItem('cart', JSON.stringify(cart))
  cartItems.value = [] // Xóa giao diện giỏ hàng

  // Kích hoạt sự kiện storage để navbar cập nhật
  window.dispatchEvent(new Event('storage'))

  router.push('/orders')
}

const formatPrice = (price) => {
  return new Intl.NumberFormat('vi-VN').format(price)
}
</script>

<style scoped>
.section-title {
  color: #00575c; /* Pink color from theme */
  margin-bottom: 2rem;
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  position: relative;
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

.image-container {
  position: relative;
}

.carousel-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 5px;
  cursor: pointer;
  border-radius: 50%;
}

.carousel-btn:disabled {
  opacity: 0.3;
  cursor: not-allowed;
}

.carousel-btn.prev {
  left: 5px;
}

.carousel-btn.next {
  right: 5px;
}

.img-fluid {
  width: 100%;
  height: 150px; /* Fixed height for consistency */
  object-fit: cover;
}

.btn-checkout {
  color: black;
  background-color: #8cb0b0;
  border-color: #8cb0b0;
  padding: 0.75rem 2rem;
  border-radius: 8px;
  font-weight: 600;
  transition:
    background-color 0.3s ease,
    transform 0.3s ease;
}

.btn-checkout:hover {
  color: white;
  background-color: #00575c;
  border-color: #00575c;
  transform: translateY(-2px);
}

.btn-danger {
  padding: 0.5rem 1.5rem;
  border-radius: 8px;
  font-weight: 600;
  transition:
    background-color 0.3s ease,
    transform 0.3s ease;
}

.btn-danger:hover {
  background-color: #c82333;
  transform: translateY(-2px);
}
</style>
