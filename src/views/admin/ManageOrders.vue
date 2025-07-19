<template>
  <div class="container my-5">
    <h2 class="section-title">Manage Orders</h2>
    <div v-if="orders.length === 0" class="alert alert-info">No orders available.</div>
    <div v-else>
      <table class="table table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>User ID</th>
            <th>Date</th>
            <th>Total</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="order in orders" :key="order.id">
            <td>{{ order.id }}</td>
            <td>{{ order.userId }}</td>
            <td>{{ new Date(order.date).toLocaleDateString() }}</td>
            <td>${{ order.total }}</td>
            <td>
              <select v-model="order.status" @change="updateStatus(order)">
                <option value="completed">Completed</option>
                <option value="shipped">Shipped</option>
                <option value="delivered">Delivered</option>
              </select>
            </td>
            <td>
              <button class="btn btn-danger btn-sm" @click="deleteOrder(order.id)">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const orders = ref([])

const fetchOrders = () => {
  orders.value = JSON.parse(localStorage.getItem('orders')) || []
}

const updateStatus = (order) => {
  let storedOrders = JSON.parse(localStorage.getItem('orders')) || []
  storedOrders = storedOrders.map((o) => (o.id === order.id ? { ...o, status: order.status } : o))
  localStorage.setItem('orders', JSON.stringify(storedOrders))
}

const deleteOrder = (id) => {
  let storedOrders = JSON.parse(localStorage.getItem('orders')) || []
  storedOrders = storedOrders.filter((o) => o.id !== id)
  localStorage.setItem('orders', JSON.stringify(storedOrders))
  fetchOrders()
}

onMounted(() => {
  const user = JSON.parse(localStorage.getItem('user'))
  if (!user || user.role !== 'admin') {
    router.push('/login')
    return
  }
  fetchOrders()
})
</script>
