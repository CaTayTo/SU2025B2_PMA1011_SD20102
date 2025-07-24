<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="container my-5 product-container">
    <div class="row">
      <!-- Categories Sidebar -->
      <div class="col-md-3">
        <h5 class="mb-4 text-pink category-title">Danh mục</h5>
        <ul class="list-group">
          <li
            class="list-group-item d-flex justify-content-between align-items-center"
            :class="{ active: selectedCategory === null }"
            @click="selectedCategory = null"
          >
            Tất cả
            <span class="badge bg-light text-dark rounded-pill">{{ products.length }}</span>
          </li>
          <li
            class="list-group-item d-flex justify-content-between align-items-center"
            v-for="category in categories"
            :key="category.id"
            :class="{ active: selectedCategory === category.id }"
            @click="selectedCategory = category.id"
          >
            {{ category.name }}
            <span class="badge bg-light text-dark rounded-pill">{{
              products.filter((p) => p.categoryId === category.id).length
            }}</span>
          </li>
        </ul>
      </div>
      <!-- Product Grid -->
      <div class="col-md-9">
        <div class="row">
          <div
            class="col-md-4 col-sm-6 mb-4"
            v-for="product in paginatedProducts"
            :key="product.id"
          >
            <div class="product-card d-flex flex-column">
              <!-- Image Container -->
              <div class="image-container">
                <img
                  :src="product.image"
                  alt="Ảnh sản phẩm"
                  @error="handleImageError"
                  class="product-image"
                />
              </div>
              <div class="content-container p-3 text-center d-flex flex-column flex-grow-1">
                <h5 class="text-pink product-name">{{ product.name }}</h5>
                <div class="rating mb-2">
                  <i
                    v-for="star in 5"
                    :key="star"
                    :class="star <= 4 ? 'bi bi-star-fill text-yellow' : 'bi bi-star text-yellow'"
                  ></i>
                </div>
                <p class="text-muted product-description flex-grow-1">{{ product.description }}</p>
                <p class="text-yellow fw-bold price">{{ product.price }}₫</p>
                <div class="d-flex justify-content-center gap-2">
                  <router-link
                    :to="'/product/' + product.id"
                    class="btn btn-primary btn-sm btn-pink"
                  >
                    Xem chi tiết
                  </router-link>
                  <button class="btn btn-outline-pink btn-sm" @click="quickView(product)">
                    Xem nhanh
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Pagination -->
        <nav>
          <ul class="pagination justify-content-center">
            <li class="page-item" :class="{ disabled: currentPage === 1 }">
              <a class="page-link" href="#" @click.prevent="currentPage--">
                <i class="bi bi-chevron-left"></i>
              </a>
            </li>
            <li
              class="page-item"
              v-for="page in totalPages"
              :key="page"
              :class="{ active: currentPage === page }"
            >
              <a class="page-link" href="#" @click.prevent="currentPage = page">{{ page }}</a>
            </li>
            <li class="page-item" :class="{ disabled: currentPage === totalPages }">
              <a class="page-link" href="#" @click.prevent="currentPage++">
                <i class="bi bi-chevron-right"></i>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'

const categories = ref([])
const products = ref([])
const selectedCategory = ref(null)
const currentPage = ref(1)
const itemsPerPage = 6

const filteredProducts = computed(() => {
  if (selectedCategory.value) {
    return products.value.filter((product) => product.categoryId === selectedCategory.value)
  }
  return products.value
})

const totalPages = computed(() => Math.ceil(filteredProducts.value.length / itemsPerPage))

const paginatedProducts = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage
  const end = start + itemsPerPage
  return filteredProducts.value.slice(start, end)
})

onMounted(() => {
  // categories.value = JSON.parse(localStorage.getItem('categories')) || []
  // products.value = JSON.parse(localStorage.getItem('products')) || []
  // // Khởi tạo currentImageIndex cho mỗi sản phẩm
  // products.value.forEach((product) => {
  //   product.currentImageIndex = product.currentImageIndex || 0
  // })
  categories.value = JSON.parse(localStorage.getItem('categories')) || []
  let storedProducts = JSON.parse(localStorage.getItem('products')) || []

  // Fix dữ liệu cũ: nếu có 'images' là mảng -> chuyển về 'image'
  storedProducts = storedProducts.map((product) => {
    if (Array.isArray(product.images) && product.images.length > 0) {
      product.image = product.images[0]
    }
    product.currentImageIndex = 0
    return product
  })

  // Lưu lại localStorage đã fix
  localStorage.setItem('products', JSON.stringify(storedProducts))

  products.value = storedProducts
})

const handleImageError = (event) => {
  console.error('Không thể tải ảnh:', event.target.src)
  event.target.src = 'https://via.placeholder.com/300'
}

const quickView = (product) => {
  alert(`Xem nhanh: ${product.name}\nGiá: ${product.price}₫\nMô tả: ${product.description}`)
}
</script>

<style scoped>
.product-container {
  background: linear-gradient(180deg, #f8f9fa 0%, #e9ecef 100%); /* Gradient xám nhạt */
  border-radius: 15px;
  padding: 2rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
}

.category-title {
  color: #00575c;
  font-weight: bolder;
  position: relative;
  margin-bottom: 2rem !important;
}

.category-title::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -5px;
  width: 50px;
  height: 3px;
  background-color: #00575c;
}

.list-group-item {
  cursor: pointer;
  transition: all 0.3s ease;
  border-radius: 8px;
  margin-bottom: 0.5rem;
  background-color: #fff;
  border: 1px solid #ddd;
}

.list-group-item:hover {
  background-color: #00575c;
  transform: translateX(5px);
}

.list-group-item.active {
  background-color: #00575c;
  border-color: #00575c;
  color: white;
}

.badge {
  font-size: 0.8rem;
  padding: 0.3rem 0.6rem;
  border-radius: 12px;
}

.product-card {
  border: none;
  border-radius: 15px;
  overflow: hidden;
  background-color: #fff;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
  height: 100%; /* Đảm bảo card có chiều cao đồng đều */
}

.product-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
}

.image-container {
  position: relative;
  width: 100%;
  aspect-ratio: 1 / 1; /* Tỷ lệ khung hình 1:1 */
  overflow: hidden;
}

.product-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  transition: opacity 0.3s ease;
}

.content-container {
  min-height: 200px; /* Chiều cao tối thiểu để đảm bảo đồng đều */
}

.product-name {
  color: #00575c;
  font-size: 1.1rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
}

.rating i {
  font-size: 0.9rem;
}

.product-description {
  font-size: 0.9rem;
  line-height: 1.4;
  margin-bottom: 0.5rem;
  color: #6c757d;
}

.price {
  color: #ffc107;
  font-size: 1.2rem;
  margin-bottom: 1rem;
}

.text-pink {
  color: #00575c;
}

.text-yellow {
  color: #ffc107;
}

.btn-pink {
  background-color: #00575c;
  border-color: #00575c;
  border-radius: 20px;
  transition:
    background-color 0.3s ease,
    transform 0.3s ease;
}

.btn-pink:hover {
  background-color: #00575c;
  border-color: #00575c;
  transform: scale(1.05);
}

.btn-outline-pink {
  border-color: #00575c;
  color: #00575c;
  border-radius: 20px;
  transition:
    background-color 0.3s ease,
    color 0.3s ease,
    transform 0.3s ease;
}

.btn-outline-pink:hover {
  background-color: #00575c;
  color: #fff;
  transform: scale(1.05);
}

.page-item.active .page-link {
  background-color: #00575c;
  border-color: #00575c;
  color: white;
}

.page-link {
  color: #00575c;
  border-radius: 50%;
  margin: 0 5px;
  transition: all 0.3s ease;
}

.page-link:hover {
  background-color: #00575c;
  color: white;
  border-color: #00575c;
}

/* Điều chỉnh cho thiết bị di động */
@media (max-width: 767px) {
  .product-container {
    padding: 1rem;
  }

  .category-title::after {
    left: 50%;
    transform: translateX(-50%);
  }

  .list-group-item {
    font-size: 0.9rem;
  }

  .product-card {
    margin-bottom: 1.5rem;
  }

  .image-container {
    aspect-ratio: 1 / 1; /* Giữ tỷ lệ khung hình trên thiết bị di động */
  }

  .content-container {
    min-height: 220px; /* Điều chỉnh chiều cao tối thiểu cho thiết bị di động */
  }
}
</style>
