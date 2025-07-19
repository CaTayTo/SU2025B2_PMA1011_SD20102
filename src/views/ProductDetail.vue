<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <!-- Banner tràn viền, chỉ chứa hình ảnh -->
    <div class="banner">
      <img
        src="../img/banner.png"
        alt="Banner cửa hàng thú cưng"
        class="banner-image"
        @error="handleImageError"
      />
    </div>

    <!-- Nội dung chi tiết sản phẩm -->
    <div class="container my-5">
      <!-- Thông báo lỗi -->
      <div v-if="error" class="alert alert-danger alert-dismissible fade show" role="alert">
        {{ error }}
        <button type="button" class="btn-close" @click="error = ''" aria-label="Close"></button>
      </div>

      <!-- Thông báo thành công -->
      <div v-if="success" class="alert alert-success alert-dismissible fade show" role="alert">
        {{ success }}
        <button type="button" class="btn-close" @click="success = ''" aria-label="Close"></button>
      </div>

      <div class="row">
        <!-- Hình ảnh sản phẩm -->
        <div class="col-md-6">
          <div class="image-container position-relative">
            <img
              :src="product.images[currentImageIndex]"
              alt="Hình ảnh sản phẩm"
              class="img-fluid rounded shadow-sm product-image"
              @error="handleImageError"
            />
            <button
              class="carousel-btn prev"
              @click="changeImage(-1)"
              :disabled="currentImageIndex === 0"
            >
              <i class="bi bi-chevron-left"></i>
            </button>
            <button
              class="carousel-btn next"
              @click="changeImage(1)"
              :disabled="currentImageIndex === product.images.length - 1"
            >
              <i class="bi bi-chevron-right"></i>
            </button>
          </div>
        </div>

        <!-- Thông tin sản phẩm -->
        <div class="col-md-6 product-details">
          <h2 class="mb-3 text-primary">{{ product.name }}</h2>
          <p class="fs-3 text-primary mb-2">{{ formatPrice(product.price) }} VNĐ</p>
          <p class="text-muted mb-3">{{ product.description }}</p>
          <p class="mb-3">
            Số lượng còn lại:
            <span :class="product.stock > 5 ? 'text-success' : 'text-danger'">
              {{ product.stock }} sản phẩm
            </span>
          </p>
          <div class="d-flex gap-3">
            <button class="btn btn-primary btn-custom" @click="buyNow">Mua Ngay</button>
            <button class="btn btn-secondary btn-custom" @click="addToCart">
              Thêm vào Giỏ Hàng
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()
const product = ref({ images: [] })
const currentImageIndex = ref(0)
const error = ref('')
const success = ref('')

onMounted(() => {
  const products = JSON.parse(localStorage.getItem('products')) || []
  const foundProduct = products.find((p) => p.id === parseInt(route.params.id))
  if (foundProduct) {
    product.value = foundProduct
    currentImageIndex.value = 0
  } else {
    error.value = 'Không tìm thấy sản phẩm!'
  }
})

const handleImageError = (event) => {
  console.error('Không thể tải hình ảnh:', event.target.src)
  event.target.src = 'https://via.placeholder.com/300'
}

const changeImage = (direction) => {
  currentImageIndex.value += direction
  if (currentImageIndex.value < 0) currentImageIndex.value = 0
  if (currentImageIndex.value >= product.value.images.length) {
    currentImageIndex.value = product.value.images.length - 1
  }
}

const addToCart = () => {
  const user = JSON.parse(localStorage.getItem('user'))
  if (!user) {
    router.push('/login')
    return
  }

  let cart = JSON.parse(localStorage.getItem('cart')) || []
  let products = JSON.parse(localStorage.getItem('products')) || []
  const cartItem = cart.find(
    (item) => item.productId === product.value.id && item.userId === user.id,
  )
  const totalInCart = cartItem ? cartItem.quantity : 0

  // Kiểm tra số lượng còn lại
  if (totalInCart + 1 > product.value.stock) {
    error.value = 'Hết hàng!'
    success.value = ''
    return
  }

  // Giảm stock đi 1
  const productIndex = products.findIndex((p) => p.id === product.value.id)
  if (productIndex !== -1) {
    products[productIndex].stock -= 1
    product.value.stock = products[productIndex].stock // Cập nhật hiển thị stock trên giao diện
    localStorage.setItem('products', JSON.stringify(products)) // Lưu lại danh sách products
  }

  // Thêm vào giỏ hàng
  if (cartItem) {
    cartItem.quantity += 1
  } else {
    cart.push({
      id: cart.length + 1,
      userId: user.id,
      productId: product.value.id,
      quantity: 1,
    })
  }
  localStorage.setItem('cart', JSON.stringify(cart))

  // Kích hoạt sự kiện storage để navbar cập nhật
  window.dispatchEvent(new Event('storage'))

  // Hiển thị thông báo thành công
  error.value = ''
  success.value = 'Đã thêm sản phẩm vào giỏ hàng!'
}

const buyNow = () => {
  addToCart()
  if (!error.value) {
    router.push('/cart')
  }
}

const formatPrice = (price) => {
  return new Intl.NumberFormat('vi-VN').format(price)
}
</script>

<style scoped>
.banner {
  width: 100%;
  height: auto; /* hoặc giữ nguyên nếu bạn muốn chiều cao cố định */
  text-align: center; /* Căn giữa ảnh nếu nhỏ hơn 100% */
  padding: 20px 0;
}

.banner-image {
  width: auto;
  max-width: 100%;
  height: auto;
  object-fit: contain;
}

/* Hình ảnh sản phẩm */
.image-container {
  position: relative;
  overflow: hidden;
  border-radius: 10px;
}

.product-image {
  width: 100%;
  height: 400px;
  object-fit: contain;
  transition: transform 0.3s ease;
}

.product-image:hover {
  transform: scale(1.05);
}

.carousel-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  border: none;
  padding: 12px;
  cursor: pointer;
  border-radius: 50%;
  transition: background-color 0.3s ease;
}

.carousel-btn:hover {
  background-color: rgba(0, 0, 0, 0.9);
}

.carousel-btn:disabled {
  opacity: 0.3;
  cursor: not-allowed;
}

.carousel-btn.prev {
  left: 10px;
}

.carousel-btn.next {
  right: 10px;
}

/* Chi tiết sản phẩm */
.product-details {
  padding: 20px;
  background-color: #f8f9fa;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.product-details h2 {
  font-size: 1.8rem;
  color: #ff6f61;
  font-weight: 600;
}

.product-details p {
  font-size: 1.1rem;
}

.text-primary {
  color: #007bff !important;
}

.text-success {
  font-weight: bold;
}

.text-danger {
  font-weight: bold;
}

/* Thông báo */
.alert {
  border-radius: 10px;
  font-size: 0.9rem;
  padding: 0.75rem 1rem;
}
/* Nút bấm */
.btn-custom {
  padding: 10px 20px;
  font-size: 1.1rem;
  border-radius: 8px;
  transition:
    transform 0.2s ease,
    background-color 0.3s ease;
}

/* Nút bấm */
.btn-custom {
  padding: 10px 20px;
  margin: 10px;
  font-size: 1.1rem;
  border-radius: 8px;
  transition:
    transform 0.2s ease,
    background-color 0.3s ease;
}

/* Nút chính */
.btn-primary.btn-custom {
  color: white;
  background-color: #00575c; /* Nền màu xanh đậm */
  border-color: #00575c;
}

.btn-primary.btn-custom:hover {
  background-color: #00575c; /* Nền màu xanh đậm */
  border-color: #00575c;
  transform: translateY(-2px);
}

/* Nút phụ */
.btn-secondary.btn-custom {
  background-color: #ababab;
  border-color: #00575c;
}

.btn-secondary.btn-custom:hover {
  background-color: #ababab;
  border-color: #00575c;
  transform: translateY(-2px);
}
</style>
