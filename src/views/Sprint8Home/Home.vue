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

    <!-- Nội dung danh sách sản phẩm -->
    <div class="container my-5">
      <!-- Sản Phẩm Mới Section -->
      <h2 class="text-center mb-4 text-pink"><b>Sản Phẩm Mới</b></h2>
      <div class="row mb-5">
        <div class="col-md-3 col-sm-6 mb-4" v-for="product in newArrivals" :key="product.id">
          <div class="product-card">
            <div class="image-container">
              <img
                :src="product.images[0]"
                alt="Hình ảnh sản phẩm"
                @error="handleImageError"
                class="product-image"
              />
            </div>
            <div class="p-3 text-center">
              <h5 class="text-pink product-name">{{ product.name }}</h5>
              <p class="text-yellow fw-bold">{{ formatPrice(product.price) }} VNĐ</p>
              <router-link :to="'/product/' + product.id" class="btn btn-primary btn-sm btn-blue">
                Xem Chi Tiết
              </router-link>
            </div>
          </div>
        </div>
      </div>

      <!-- Sản Phẩm Bán Chạy Section -->
      <h2 class="text-center mb-4 text-pink"><b>Sản Phẩm Bán Chạy</b></h2>
      <div class="row">
        <div class="col-md-3 col-sm-6 mb-4" v-for="product in bestSellers" :key="product.id">
          <div class="product-card">
            <div class="image-container">
              <img
                :src="product.images[0]"
                alt="Hình ảnh sản phẩm"
                @error="handleImageError"
                class="product-image"
              />
            </div>
            <div class="p-3 text-center">
              <h5 class="text-pink product-name">{{ product.name }}</h5>
              <p class="text-yellow fw-bold">{{ formatPrice(product.price) }} VNĐ</p>
              <router-link :to="'/product/' + product.id" class="btn btn-primary btn-sm btn-blue">
                Xem Chi Tiết
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'

const products = ref([])

const newArrivals = computed(() => {
  return products.value.filter((product) => product.isNew).slice(0, 4) // Giới hạn 4 sản phẩm
})

const bestSellers = computed(() => {
  return products.value.filter((product) => product.isBestSeller).slice(0, 4) // Giới hạn 4 sản phẩm
})

onMounted(() => {
  products.value = JSON.parse(localStorage.getItem('products')) || []
})

const handleImageError = (event) => {
  console.error('Không thể tải hình ảnh:', event.target.src)
  event.target.src = 'https://via.placeholder.com/300'
}

const formatPrice = (price) => {
  return new Intl.NumberFormat('vi-VN').format(price)
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

/* Sản phẩm */
.text-pink {
  color: #00575c; /* Màu hồng từ Cute Pets */
}

.text-yellow {
  color: #ffc107; /* Màu vàng từ Cute Pets */
}

.btn-blue {
  background-color: #00575c; /* Nút màu xanh như trong ảnh chụp màn hình */
  border-color: #00575c;
}

.btn-blue:hover {
  background-color: #00575c;
  border-color: #00575c;
}

.product-card {
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.2s;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  height: 100%; /* Đảm bảo card có chiều cao đồng đều */
}

.product-card:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.image-container {
  width: 100%;
  height: 200px;
  overflow: hidden;
}

.product-image {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.product-name {
  height: 48px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
</style>
