<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="container my-5">
    <h2 class="section-title">Your Orders</h2>
    <div v-if="orders.length === 0" class="alert alert-info">You have no orders.</div>
    <div v-else>
      <div class="card mb-3 shadow-sm" v-for="order in orders" :key="order.id">
        <div class="card-body">
          <h5 class="card-title">Order #{{ order.id }}</h5>
          <p class="card-text">Date: {{ new Date(order.date).toLocaleDateString() }}</p>
          <p class="card-text">Total: ${{ order.total }}</p>
          <p class="card-text">Status: {{ order.status }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const orders = ref([])

onMounted(() => {
  const user = JSON.parse(localStorage.getItem('user'))
  if (!user) {
    router.push('/login')
    return
  }
  const storedOrders = JSON.parse(localStorage.getItem('orders')) || []
  orders.value = storedOrders.filter((order) => order.userId === user.id)
})
</script>

<style scope>
.section-title::after {
  background: #00575c;
}
</style>
