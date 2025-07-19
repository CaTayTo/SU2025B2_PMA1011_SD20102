<template>
  <div class="container my-5">
    <h2 class="section-title">Manage Products</h2>
    <form @submit.prevent="addProduct" class="mb-4">
      <div class="row">
        <div class="col-md-3">
          <input
            type="text"
            class="form-control"
            v-model="newProduct.name"
            placeholder="Product name"
            required
          />
        </div>
        <div class="col-md-2">
          <input
            type="number"
            class="form-control"
            v-model="newProduct.price"
            placeholder="Price"
            required
          />
        </div>
        <div class="col-md-2">
          <select class="form-control" v-model="newProduct.categoryId" required>
            <option value="" disabled>Select Category</option>
            <option v-for="category in categories" :key="category.id" :value="category.id">
              {{ category.name }}
            </option>
          </select>
        </div>
        <div class="col-md-3">
          <input
            type="text"
            class="form-control"
            v-model="newProduct.image"
            placeholder="Image URL"
            required
          />
        </div>
        <div class="col-md-2">
          <button type="submit" class="btn btn-primary w-100">Add</button>
        </div>
      </div>
    </form>
    <table class="table table-hover">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Price</th>
          <th>Category</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in products" :key="product.id">
          <td>{{ product.id }}</td>
          <td>
            <span v-if="!product.editing">{{ product.name }}</span>
            <input v-else v-model="product.name" class="form-control" />
          </td>
          <td>
            <span v-if="!product.editing">{{ product.price }}</span>
            <input v-else v-model="product.price" type="number" class="form-control" />
          </td>
          <td>
            <span v-if="!product.editing">{{ getCategoryName(product.categoryId) }}</span>
            <select v-else v-model="product.categoryId" class="form-control">
              <option v-for="category in categories" :key="category.id" :value="category.id">
                {{ category.name }}
              </option>
            </select>
          </td>
          <td>
            <button
              style="margin-right: 30px"
              class="btn btn-warning btn-sm me-2"
              @click="toggleEdit(product)"
            >
              {{ product.editing ? 'Save' : 'Edit' }}
            </button>
            <button class="btn btn-danger btn-sm" @click="deleteProduct(product.id)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const products = ref([])
const categories = ref([])
const newProduct = ref({
  name: '',
  price: 0,
  categoryId: '',
  image: '',
  description: 'A great product for cats',
  isBestSeller: false,
  isNew: false,
  stock: 10,
})

const fetchCategories = () => {
  categories.value = JSON.parse(localStorage.getItem('categories')) || []
}

const fetchProducts = () => {
  products.value = (JSON.parse(localStorage.getItem('products')) || []).map((product) => ({
    ...product,
    editing: false,
  }))
}

const addProduct = () => {
  let storedProducts = JSON.parse(localStorage.getItem('products')) || []
  storedProducts.push({
    id: storedProducts.length + 1,
    ...newProduct.value,
  })
  localStorage.setItem('products', JSON.stringify(storedProducts))
  newProduct.value = {
    name: '',
    price: 0,
    categoryId: '',
    image: '',
    description: 'A great product for cats',
    isBestSeller: false,
    isNew: false,
    stock: 10,
  }
  fetchProducts()
}

const toggleEdit = (product) => {
  if (product.editing) {
    let storedProducts = JSON.parse(localStorage.getItem('products')) || []
    storedProducts = storedProducts.map((p) =>
      p.id === product.id
        ? { ...p, name: product.name, price: product.price, categoryId: product.categoryId }
        : p,
    )
    localStorage.setItem('products', JSON.stringify(storedProducts))
  }
  product.editing = !product.editing
}

const deleteProduct = (id) => {
  let storedProducts = JSON.parse(localStorage.getItem('products')) || []
  storedProducts = storedProducts.filter((p) => p.id !== id)
  localStorage.setItem('products', JSON.stringify(storedProducts))
  fetchProducts()
}

const getCategoryName = (categoryId) => {
  const category = categories.value.find((cat) => cat.id === categoryId)
  return category ? category.name : 'Unknown'
}

onMounted(() => {
  const user = JSON.parse(localStorage.getItem('user'))
  if (!user || user.role !== 'admin') {
    router.push('/login')
    return
  }
  fetchCategories()
  fetchProducts()
})
</script>
