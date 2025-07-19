<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="container my-5">
    <h2 class="section-title">News</h2>

    <!-- Tin tức 1: Sự kiện từ thiện gây tranh cãi -->
    <div class="card mb-3 shadow-sm">
      <div class="card-body">
        <h5 class="card-title">
          Meow Shop Tổ Chức Sự Kiện Từ Thiện Gây Xôn Xao Vì Món Quà "Không Ai Ngờ Tới"!
        </h5>
        <p class="card-text">
          Một hình ảnh vô cùng ấm áp: những chú mèo đáng yêu được Meow Shop mang đến viện dưỡng lão
          để cùng chia sẻ yêu thương với các cụ già cô đơn. Hành động nhỏ, ý nghĩa lớn – nhưng cũng
          khiến không ít người bất ngờ về cách tổ chức "không giống ai" của Meow Shop.
        </p>
        <img
          src="https://petland.com.vn/wp-content/uploads/2023/12/Banner-Web-03-scaled.jpg"
          alt="Sự kiện từ thiện Cứu Hộ Mèo Hoang"
          class="img-fluid rounded mt-3"
        />
        <p class="text-muted mt-2">Hình ảnh: Sự kiện từ thiện "Cứu Hộ Mèo Hoang" tại TP.HCM.</p>
      </div>
    </div>

    <!-- Tin tức 2: Sản phẩm mới gây sốt -->
    <div class="card mb-3 shadow-sm">
      <div class="card-body">
        <h5 class="card-title">
          Chiến Dịch Từ Thiện Hay Màn PR Tinh Vi? Meow Shop Khiến Cộng Đồng Mạng Xôn Xao!
        </h5>
        <p class="card-text">
          Sự kiện từ thiện mới đây của Meow Shop tưởng như sẽ nhận được sự ủng hộ, nhưng lại vấp
          phải không ít ý kiến trái chiều khi một số người cho rằng hoạt động này đi kèm quá nhiều
          điều kiện “ẩn” dành cho người nhận. Liệu đây là sự hiểu lầm hay chiến dịch chưa được
          truyền thông đúng cách?
        </p>
        <img
          src="https://vuipet.com/wp-content/uploads/2021/11/banner-quan-ao-cho-meo-.jpg"
          alt="Đồ chơi mèo Meow Magic"
          class="img-fluid rounded mt-3"
        />
        <p class="text-muted mt-2">
          Hình ảnh: Đồ chơi mèo "Meow Magic" đang gây sốt tại Meow Shop.
        </p>
      </div>
    </div>

    <!-- Tin tức 3: Nguyễn Hữu Quyên và vụ kiện bí ẩn -->
    <div class="card mb-3 shadow-sm">
      <div class="card-body">
        <h5 class="card-title">
          Meow Shop Tổ Chức Sự Kiện Gây Chú Ý Khi Đem Mèo Đến Giao Lưu Cùng Người Già Neo Đơn
        </h5>
        <p class="card-text">
          Khi Meow Shop tung ra chương trình tặng quà cho cộng đồng, nhiều người khen ngợi tinh thần
          nhân ái. Tuy nhiên, không ít cư dân mạng đặt nghi vấn liệu đây là hoạt động thiện nguyện
          thật sự hay chỉ là một chiêu thức quảng bá khéo léo? Dù thế nào, chiến dịch vẫn đang tạo
          nên cuộc tranh luận sôi nổi.
        </p>
        <img
          src="https://file.hstatic.net/200000108863/article/quan_5_86e9c9abcc27433a94c76e155c1e3367.png"
          alt="Thức ăn mèo Meow Healthy"
          class="img-fluid rounded mt-3"
        />
        <p class="text-muted mt-2">Hình ảnh: Dòng thức ăn mèo "Meow Healthy" đang bị kiện.</p>
      </div>
    </div>

    <!-- Tin tức ban đầu -->
    <div class="card mb-3 shadow-sm">
      <div class="card-body">
        <h5 class="card-title">New Cat Toys Arrived!</h5>
        <p class="card-text">
          Check out our latest collection of cat toys, perfect for keeping your cat entertained.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
// No logic needed for News page
</script>

<style scoped>
.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #00575c;
  position: relative;
  margin-bottom: 3rem;
  text-align: center;
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

.card-title {
  font-weight: bold;
  font-size: 1.5rem;
  color: #00575c; /* Pink to match theme */
  margin-bottom: 1rem;
}

.card-text {
  font-size: 1.1rem;
  line-height: 1.8;
  color: black;
  text-align: justify;
}

.img-fluid {
  width: 100%;
  height: auto;
  object-fit: cover;
  max-height: 300px;
}

.text-muted {
  font-size: 0.9rem;
  color: #adb5bd;
}

/* Responsive adjustments */
@media (max-width: 767px) {
  .section-title {
    font-size: 2rem;
  }

  .card-title {
    font-size: 1.3rem;
  }

  .card-text {
    font-size: 1rem;
  }
}
</style>
