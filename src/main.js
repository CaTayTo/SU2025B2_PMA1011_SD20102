import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
// import 'bootstrap'
// import 'bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap/dist/js/bootstrap.bundle.min.js'

// Seed initial data in localStorage
const initializeData = () => {
  if (!localStorage.getItem('users')) {
    localStorage.setItem(
      'users',
      JSON.stringify([
        { id: 1, email: 'admin@meowshop.com', password: 'Admin123!', role: 'admin' },
        { id: 2, email: 'customer@meowshop.com', password: 'Customer123!', role: 'customer' },
      ]),
    )
  }

  // Initialize categories
  localStorage.setItem(
    'categories',
    JSON.stringify([
      { id: 1, name: 'Toys' },
      { id: 2, name: 'Accessories' },
      { id: 3, name: 'Food' },
      { id: 4, name: 'Grooming' },
    ]),
  )

  // Initialize products with multiple images
  localStorage.setItem(
    'products',
    JSON.stringify([
      {
        id: 1,
        categoryId: 3,
        name: 'Thức ăn mèo Maximum 1kg',
        price: 499,
        images: [
          'https://cdn.shopify.com/s/files/1/0624/1746/9697/products/hat-reflex-plus-kitten-cho-meo-con-nhap-khau-tho-nhi-ky-paddy-1_600x600.jpg?v=1660972363',
          'https://product.hstatic.net/200000264739/product/whiskas_junior_d07b5a33f32d493a86847b2396e7c068.jpg',
          'https://wcomvn.s3.ap-southeast-1.amazonaws.com/image/2021/04/07142821/bao-bi-thuc-an-cho-meo-mau-xanh-bb07042021-053.jpeg',
        ],
        description: 'Thức ăn chất lượng cao cho mèo trưởng thành',
        isBestSeller: true,
        isNew: false,
        stock: 20,
      },
      {
        id: 2,
        categoryId: 3,
        name: 'Thức ăn mèo con Me-O',
        price: 399,
        images: [
          'https://bizweb.dktcdn.net/100/298/319/products/1.jpg?v=1555924694530',
          'https://cdn.shopify.com/s/files/1/0624/1746/9697/products/hat-reflex-plus-kitten-cho-meo-con-nhap-khau-tho-nhi-ky-paddy-1_600x600.jpg?v=1660972363',
          'https://wcomvn.s3.ap-southeast-1.amazonaws.com/image/2021/04/07142821/bao-bi-thuc-an-cho-meo-mau-xanh-bb07042021-053.jpeg',
        ],
        description: 'Thức ăn dinh dưỡng cho mèo con',
        isBestSeller: false,
        isNew: true,
        stock: 15,
      },
      {
        id: 3,
        categoryId: 3,
        name: 'Thức ăn mèo con Whiskas 1.1kg',
        price: 599,
        images: [
          'https://cdn-img-v2.mybota.vn/uploadv2/web/12/12107/product/2022/12/08/09/04/1670475653_995476ec0fd304a974d8d4d365bd8200.jpg',
          'https://bizweb.dktcdn.net/100/298/319/products/1.jpg?v=1555924694530',
          'https://wcomvn.s3.ap-southeast-1.amazonaws.com/image/2021/04/07142821/bao-bi-thuc-an-cho-meo-mau-xanh-bb07042021-053.jpeg',
        ],
        description: 'Thức ăn Whiskas dành cho mèo con',
        isBestSeller: true,
        isNew: true,
        stock: 12,
      },
      {
        id: 4,
        categoryId: 3,
        name: 'Thức ăn mèo Whiskas 1kg',
        price: 550,
        images: [
          'https://cdn.shopify.com/s/files/1/0624/1746/9697/products/hat-reflex-plus-kitten-cho-meo-con-nhap-khau-tho-nhi-ky-paddy-1_600x600.jpg?v=1660972363',
          'https://cdn-img-v2.mybota.vn/uploadv2/web/12/12107/product/2022/12/08/09/04/1670475653_995476ec0fd304a974d8d4d365bd8200.jpg',
          'https://bizweb.dktcdn.net/100/298/319/products/1.jpg?v=1555924694530',
        ],
        description: 'Thức ăn Whiskas cho mèo trưởng thành',
        isBestSeller: true,
        isNew: true,
        stock: 10,
      },
      {
        id: 5,
        categoryId: 3,
        name: 'Thức ăn mèo Zoi 1kg',
        price: 450,
        images: [
          'https://wcomvn.s3.ap-southeast-1.amazonaws.com/image/2021/04/07142821/bao-bi-thuc-an-cho-meo-mau-xanh-bb07042021-053.jpeg',
          'https://cdn.shopify.com/s/files/1/0624/1746/9697/products/hat-reflex-plus-kitten-cho-meo-con-nhap-khau-tho-nhi-ky-paddy-1_600x600.jpg?v=1660972363',
          'https://cdn-img-v2.mybota.vn/uploadv2/web/12/12107/product/2022/12/08/09/04/1670475653_995476ec0fd304a974d8d4d365bd8200.jpg',
        ],
        description: 'Thức ăn cao cấp cho mèo mọi lứa tuổi',
        isBestSeller: true,
        isNew: true,
        stock: 18,
      },
      {
        id: 6,
        categoryId: 3,
        name: 'Thức ăn mèo Royal Canin 1kg',
        price: 650,
        images: [
          'https://cdn.shopify.com/s/files/1/0624/1746/9697/products/hat-reflex-plus-kitten-cho-meo-con-nhap-khau-tho-nhi-ky-paddy-1_600x600.jpg?v=1660972363',
          'https://wcomvn.s3.ap-southeast-1.amazonaws.com/image/2021/04/07142821/bao-bi-thuc-an-cho-meo-mau-xanh-bb07042021-053.jpeg',
          'https://cdn-img-v2.mybota.vn/uploadv2/web/12/12107/product/2022/12/08/09/04/1670475653_995476ec0fd304a974d8d4d365bd8200.jpg',
        ],
        description: 'Dinh dưỡng cân bằng cho mèo trưởng thành',
        isBestSeller: false,
        isNew: false,
        stock: 25,
      },
      {
        id: 7,
        categoryId: 3,
        name: 'Thức ăn mèo Purina Cat Chow 1kg',
        price: 420,
        images: [
          'https://cdn-img-v2.mybota.vn/uploadv2/web/12/12107/product/2022/12/08/09/04/1670475653_995476ec0fd304a974d8d4d365bd8200.jpg',
          'https://bizweb.dktcdn.net/100/298/319/products/1.jpg?v=1555924694530',
          'https://wcomvn.s3.ap-southeast-1.amazonaws.com/image/2021/04/07142821/bao-bi-thuc-an-cho-meo-mau-xanh-bb07042021-053.jpeg',
        ],
        description: 'Chế độ ăn hoàn chỉnh cho mèo trưởng thành',
        isBestSeller: false,
        isNew: true,
        stock: 30,
      },
      {
        id: 8,
        categoryId: 3,
        name: 'Thức ăn mèo Hills Science Diet 1kg',
        price: 700,
        images: [
          'https://wcomvn.s3.ap-southeast-1.amazonaws.com/image/2021/04/07142821/bao-bi-thuc-an-cho-meo-mau-xanh-bb07042021-053.jpeg',
          'https://cdn.shopify.com/s/files/1/0624/1746/9697/products/hat-reflex-plus-kitten-cho-meo-con-nhap-khau-tho-nhi-ky-paddy-1_600x600.jpg?v=1660972363',
          'https://cdn-img-v2.mybota.vn/uploadv2/web/12/12107/product/2022/12/08/09/04/1670475653_995476ec0fd304a974d8d4d365bd8200.jpg',
        ],
        description: 'Thức ăn được bác sĩ thú y khuyên dùng',
        isBestSeller: true,
        isNew: false,
        stock: 15,
      },
      {
        id: 9,
        categoryId: 3,
        name: 'Thức ăn mèo Iams Proactive Health 1kg',
        price: 480,
        images: [
          'https://bizweb.dktcdn.net/100/298/319/products/1.jpg?v=1555924694530',
          'https://cdn-img-v2.mybota.vn/uploadv2/web/12/12107/product/2022/12/08/09/04/1670475653_995476ec0fd304a974d8d4d365bd8200.jpg',
          'https://wcomvn.s3.ap-southeast-1.amazonaws.com/image/2021/04/07142821/bao-bi-thuc-an-cho-meo-mau-xanh-bb07042021-053.jpeg',
        ],
        description: 'Hỗ trợ tiêu hóa khỏe mạnh',
        isBestSeller: false,
        isNew: true,
        stock: 20,
      },
      {
        id: 10,
        categoryId: 3,
        name: 'Thức ăn mèo Blue Buffalo 1kg',
        price: 600,
        images: [
          'https://cdn.shopify.com/s/files/1/0624/1746/9697/products/hat-reflex-plus-kitten-cho-meo-con-nhap-khau-tho-nhi-ky-paddy-1_600x600.jpg?v=1660972363',
          'https://wcomvn.s3.ap-southeast-1.amazonaws.com/image/2021/04/07142821/bao-bi-thuc-an-cho-meo-mau-xanh-bb07042021-053.jpeg',
          'https://cdn-img-v2.mybota.vn/uploadv2/web/12/12107/product/2022/12/08/09/04/1670475653_995476ec0fd304a974d8d4d365bd8200.jpg',
        ],
        description: 'Nguyên liệu tự nhiên cho mèo',
        isBestSeller: true,
        isNew: false,
        stock: 22,
      },
      {
        id: 11,
        categoryId: 3,
        name: 'Thức ăn mèo Nutro 1kg',
        price: 520,
        images: [
          'https://cdn-img-v2.mybota.vn/uploadv2/web/12/12107/product/2022/12/08/09/04/1670475653_995476ec0fd304a974d8d4d365bd8200.jpg',
          'https://bizweb.dktcdn.net/100/298/319/products/1.jpg?v=1555924694530',
          'https://wcomvn.s3.ap-southeast-1.amazonaws.com/image/2021/04/07142821/bao-bi-thuc-an-cho-meo-mau-xanh-bb07042021-053.jpeg',
        ],
        description: 'Nguyên liệu không biến đổi gen cho mèo',
        isBestSeller: false,
        isNew: true,
        stock: 18,
      },
      {
        id: 12,
        categoryId: 3,
        name: 'Thức ăn ướt Fancy Feast',
        price: 300,
        images: [
          'https://wcomvn.s3.ap-southeast-1.amazonaws.com/image/2021/04/07142821/bao-bi-thuc-an-cho-meo-mau-xanh-bb07042021-053.jpeg',
          'https://cdn.shopify.com/s/files/1/0624/1746/9697/products/hat-reflex-plus-kitten-cho-meo-con-nhap-khau-tho-nhi-ky-paddy-1_600x600.jpg?v=1660972363',
          'https://cdn-img-v2.mybota.vn/uploadv2/web/12/12107/product/2022/12/08/09/04/1670475653_995476ec0fd304a974d8d4d365bd8200.jpg',
        ],
        description: 'Thức ăn ướt thượng hạng cho mèo',
        isBestSeller: true,
        isNew: false,
        stock: 25,
      },
      {
        id: 13,
        categoryId: 3,
        name: 'Thức ăn mèo Taste of the Wild 1kg',
        price: 580,
        images: [
          'https://bizweb.dktcdn.net/100/298/319/products/1.jpg?v=1555924694530',
          'https://cdn-img-v2.mybota.vn/uploadv2/web/12/12107/product/2022/12/08/09/04/1670475653_995476ec0fd304a974d8d4d365bd8200.jpg',
          'https://wcomvn.s3.ap-southeast-1.amazonaws.com/image/2021/04/07142821/bao-bi-thuc-an-cho-meo-mau-xanh-bb07042021-053.jpeg',
        ],
        description: 'Thức ăn không ngũ cốc cho mèo',
        isBestSeller: false,
        isNew: true,
        stock: 20,
      },
      {
        id: 14,
        categoryId: 3,
        name: 'Thức ăn mèo Orijen 1kg',
        price: 750,
        images: [
          'https://cdn.shopify.com/s/files/1/0624/1746/9697/products/hat-reflex-plus-kitten-cho-meo-con-nhap-khau-tho-nhi-ky-paddy-1_600x600.jpg?v=1660972363',
          'https://wcomvn.s3.ap-southeast-1.amazonaws.com/image/2021/04/07142821/bao-bi-thuc-an-cho-meo-mau-xanh-bb07042021-053.jpeg',
          'https://cdn-img-v2.mybota.vn/uploadv2/web/12/12107/product/2022/12/08/09/04/1670475653_995476ec0fd304a974d8d4d365bd8200.jpg',
        ],
        description: 'Thức ăn phù hợp sinh học cho mèo',
        isBestSeller: true,
        isNew: false,
        stock: 15,
      },
      {
        id: 15,
        categoryId: 3,
        name: 'Thức ăn mèo Acana 1kg',
        price: 680,
        images: [
          'https://cdn-img-v2.mybota.vn/uploadv2/web/12/12107/product/2022/12/08/09/04/1670475653_995476ec0fd304a974d8d4d365bd8200.jpg',
          'https://bizweb.dktcdn.net/100/298/319/products/1.jpg?v=1555924694530',
          'https://wcomvn.s3.ap-southeast-1.amazonaws.com/image/2021/04/07142821/bao-bi-thuc-an-cho-meo-mau-xanh-bb07042021-053.jpeg',
        ],
        description: 'Chế độ ăn giàu protein cho mèo',
        isBestSeller: false,
        isNew: true,
        stock: 18,
      },
      {
        id: 16,
        categoryId: 3,
        name: 'Thức ăn mèo Wellness Core 1kg',
        price: 620,
        images: [
          'https://wcomvn.s3.ap-southeast-1.amazonaws.com/image/2021/04/07142821/bao-bi-thuc-an-cho-meo-mau-xanh-bb07042021-053.jpeg',
          'https://cdn.shopify.com/s/files/1/0624/1746/9697/products/hat-reflex-plus-kitten-cho-meo-con-nhap-khau-tho-nhi-ky-paddy-1_600x600.jpg?v=1660972363',
          'https://cdn-img-v2.mybota.vn/uploadv2/web/12/12107/product/2022/12/08/09/04/1670475653_995476ec0fd304a974d8d4d365bd8200.jpg',
        ],
        description: 'Thức ăn không ngũ cốc, giàu protein',
        isBestSeller: true,
        isNew: false,
        stock: 20,
      },
      {
        id: 17,
        categoryId: 3,
        name: 'Thức ăn mèo Merrick Purrfect Bistro 1kg',
        price: 590,
        images: [
          'https://bizweb.dktcdn.net/100/298/319/products/1.jpg?v=1555924694530',
          'https://cdn-img-v2.mybota.vn/uploadv2/web/12/12107/product/2022/12/08/09/04/1670475653_995476ec0fd304a974d8d4d365bd8200.jpg',
          'https://wcomvn.s3.ap-southeast-1.amazonaws.com/image/2021/04/07142821/bao-bi-thuc-an-cho-meo-mau-xanh-bb07042021-053.jpeg',
        ],
        description: 'Chế độ ăn lành mạnh cho mèo trưởng thành',
        isBestSeller: false,
        isNew: true,
        stock: 22,
      },
      {
        id: 18,
        categoryId: 3,
        name: 'Thức ăn mèo Instinct Raw Boost 1kg',
        price: 710,
        images: [
          'https://cdn.shopify.com/s/files/1/0624/1746/9697/products/hat-reflex-plus-kitten-cho-meo-con-nhap-khau-tho-nhi-ky-paddy-1_600x600.jpg?v=1660972363',
          'https://wcomvn.s3.ap-southeast-1.amazonaws.com/image/2021/04/07142821/bao-bi-thuc-an-cho-meo-mau-xanh-bb07042021-053.jpeg',
          'https://cdn-img-v2.mybota.vn/uploadv2/web/12/12107/product/2022/12/08/09/04/1670475653_995476ec0fd304a974d8d4d365bd8200.jpg',
        ],
        description: 'Hạt khô kết hợp nguyên liệu tươi',
        isBestSeller: true,
        isNew: false,
        stock: 17,
      },
    ]),
  )

  if (!localStorage.getItem('cart')) {
    localStorage.setItem('cart', JSON.stringify([]))
  }
  if (!localStorage.getItem('orders')) {
    localStorage.setItem('orders', JSON.stringify([]))
  }
}

initializeData()

const app = createApp(App)
app.use(router)
app.mount('#app')
