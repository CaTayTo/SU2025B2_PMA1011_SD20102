<!-- eslint-disable vue/multi-word-component-names
<template>
  <div class="banner">
    <img
      src="https://vuipet.com/wp-content/uploads/2021/11/banner-thuc-an-cho-meo.jpg"
      alt="Banner cửa hàng thú cưng"
      class="banner-image"
      @error="handleImageError"
    />
  </div>
  <div class="container my-5">
    <h2 class="section-title">Contact Us</h2>
    <form class="col-md-6 mx-auto" @submit.prevent="submitForm">
      <div class="mb-3">
        <label for="name" class="form-label">Name</label>
        <input type="text" class="form-control" id="name" v-model="name" required />
      </div>
      <div class="mb-3">
        <label for="email" class="form-label">Email</label>
        <input type="email" class="form-control" id="email" v-model="email" required />
      </div>
      <div class="mb-3">
        <label for="message" class="form-label">Message</label>
        <textarea class="form-control" id="message" rows="5" v-model="message" required></textarea>
      </div>
      <button type="submit" class="btn btn-primary w-100">Send</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const name = ref('')
const email = ref('')
const message = ref('')

const submitForm = () => {
  alert('Thank you for your message! We will get back to you soon.')
  name.value = ''
  email.value = ''
  message.value = ''
}
</script>

<style scoped>
.banner {
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.banner-image {
  max-height: 100%;
  width: 100%;
  object-fit: contain;
}

.image-container {
  position: relative;
  overflow: hidden;
  border-radius: 10px;
}
</style> -->
<template>
  <div class="container my-5">
    <div class="row align-items-center">
      <!-- Banner bên trái -->
      <div class="col-md-6 mb-4 mb-md-0">
        <div class="banner">
          <img
            src="https://cdn2.fptshop.com.vn/unsafe/Uploads/images/tin-tuc/168364/Originals/meme-con-meo%20(1).jpg"
            alt="Banner cửa hàng thú cưng"
            class="banner-image"
            @error="handleImageError"
          />
        </div>
      </div>

      <!-- Form bên phải -->
      <div class="col-md-6">
        <h2 class="section-title mb-4">Liên hệ với chúng tôi</h2>
        <form @submit.prevent="submitForm">
          <div class="mb-3">
            <label for="name" class="form-label">Họ tên</label>
            <input type="text" class="form-control" id="name" v-model="name" required />
          </div>
          <div class="mb-3">
            <label for="email" class="form-label">Email</label>
            <input type="email" class="form-control" id="email" v-model="email" required />
          </div>
          <div class="mb-3">
            <label for="message" class="form-label">Nội dung</label>
            <textarea
              class="form-control"
              id="message"
              rows="5"
              v-model="message"
              required
            ></textarea>
          </div>
          <button type="submit" class="btn btn-primary w-100">Gửi ngay</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const name = ref('')
const email = ref('')
const message = ref('')

const submitForm = () => {
  alert('Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi sớm nhất có thể.')
  name.value = ''
  email.value = ''
  message.value = ''
}
</script>

<style scoped>
.banner {
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.banner-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.btn-primary {
  background: #00575c;
}
.section-title::after {
  background: #00575c;
}
</style>
