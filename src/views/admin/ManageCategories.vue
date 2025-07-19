<template>
  <div class="container my-5">
    <h2 class="section-title">Manage Categories</h2>
    <form @submit.prevent="addCategory" class="mb-4">
      <div class="input-group">
        <input
          type="text"
          class="form-control"
          v-model="newCategory"
          placeholder="New category name"
          required
        />
        <button type="submit" class="btn btn-primary">Add</button>
      </div>
    </form>
    <table class="table table-hover">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="category in categories" :key="category.id">
          <td>{{ category.id }}</td>
          <td>
            <span v-if="!category.editing">{{ category.name }}</span>
            <input v-else v-model="category.name" class="form-control" />
          </td>
          <td>
            <button
              style="margin-right: 30px"
              class="btn btn-warning btn-sm me-2"
              @click="toggleEdit(category)"
            >
              {{ category.editing ? 'Save' : 'Edit' }}
            </button>
            <button class="btn btn-danger btn-sm" @click="deleteCategory(category.id)">
              Delete
            </button>
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
const categories = ref([])
const newCategory = ref('')

const fetchCategories = () => {
  categories.value = (JSON.parse(localStorage.getItem('categories')) || []).map((category) => ({
    ...category,
    editing: false,
  }))
}

const addCategory = () => {
  let storedCategories = JSON.parse(localStorage.getItem('categories')) || []
  storedCategories.push({
    id: storedCategories.length + 1,
    name: newCategory.value,
  })
  localStorage.setItem('categories', JSON.stringify(storedCategories))
  newCategory.value = ''
  fetchCategories()
}

const toggleEdit = (category) => {
  if (category.editing) {
    let storedCategories = JSON.parse(localStorage.getItem('categories')) || []
    storedCategories = storedCategories.map((c) =>
      c.id === category.id ? { ...c, name: category.name } : c,
    )
    localStorage.setItem('categories', JSON.stringify(storedCategories))
  }
  category.editing = !category.editing
}

const deleteCategory = (id) => {
  let storedCategories = JSON.parse(localStorage.getItem('categories')) || []
  storedCategories = storedCategories.filter((c) => c.id !== id)
  localStorage.setItem('categories', JSON.stringify(storedCategories))
  fetchCategories()
}

onMounted(() => {
  const user = JSON.parse(localStorage.getItem('user'))
  if (!user || user.role !== 'admin') {
    router.push('/login')
    return
  }
  fetchCategories()
})
</script>
