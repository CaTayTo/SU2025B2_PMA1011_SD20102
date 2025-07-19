<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="about-container d-flex flex-column">
    <!-- Header Section -->
    <!-- Banner tràn viền, chỉ chứa hình ảnh -->
    <div class="banner">
      <img
        src="../img/1.png"
        alt="Banner cửa hàng thú cưng"
        class="banner-image"
        @error="handleImageError"
      />
    </div>
    <div class="container my-3">
      <h2 class="section-title text-center">Giới thiệu về chúng tôi</h2>
      <p class="text-center lead">
        Chúng tôi là Meow Shop, điểm đến duy nhất của bạn cho mọi thứ liên quan đến mèo. Từ đồ chơi
        đến nội thất, chúng tôi có mọi thứ mà người bạn mèo của bạn cần!
      </p>
    </div>

    <!-- Blog Content Section -->
    <div class="blog-section container my-5">
      <div class="row">
        <!-- Sứ mệnh của chúng tôi -->
        <div class="col-md-12 mb-4">
          <h3 class="blog-title">Sứ mệnh của chúng tôi</h3>
          <p class="blog-text">
            Tại Meow Shop, chúng tôi không chỉ là một cửa hàng bán đồ cho mèo, mà còn là một cộng
            đồng dành cho những người yêu mèo thực thụ. Sứ mệnh của chúng tôi là mang đến cho những
            chú mèo của bạn những sản phẩm chất lượng cao, an toàn và phù hợp nhất để chúng có thể
            sống một cuộc sống khỏe mạnh, hạnh phúc và tràn đầy niềm vui. Chúng tôi hiểu rằng mỗi
            chú mèo đều có tính cách và nhu cầu riêng, vì vậy chúng tôi không ngừng tìm kiếm và cung
            cấp các sản phẩm đa dạng, từ thức ăn dinh dưỡng, đồ chơi kích thích trí não, đến những
            chiếc giường êm ái giúp mèo của bạn có những giấc ngủ ngon nhất. Chúng tôi tin rằng, khi
            mèo của bạn hạnh phúc, bạn cũng sẽ hạnh phúc. Đó chính là động lực để Meow Shop không
            ngừng phát triển và cải thiện từng ngày.
          </p>
        </div>

        <!-- Tại sao chọn Meow Shop? -->
        <div class="col-md-12 mb-4">
          <h3 class="blog-title">Tại sao chọn Meow Shop?</h3>
          <p class="blog-text">
            Meow Shop không chỉ đơn thuần là một cửa hàng trực tuyến, mà còn là nơi bạn có thể tìm
            thấy sự tận tâm và chuyên nghiệp trong từng sản phẩm mà chúng tôi cung cấp. Chúng tôi tự
            hào là đối tác của nhiều thương hiệu nổi tiếng trên toàn thế giới, đảm bảo rằng mỗi sản
            phẩm bạn mua tại Meow Shop đều đạt tiêu chuẩn cao nhất về chất lượng và an toàn. Đội ngũ
            của chúng tôi bao gồm những người yêu mèo thực thụ, luôn sẵn sàng tư vấn và hỗ trợ bạn
            trong việc chọn lựa sản phẩm phù hợp nhất với chú mèo của bạn. Ngoài ra, chúng tôi còn
            cung cấp các dịch vụ giao hàng nhanh chóng, chính sách đổi trả linh hoạt và nhiều ưu đãi
            đặc biệt dành riêng cho khách hàng thân thiết. Hãy để Meow Shop đồng hành cùng bạn trong
            hành trình chăm sóc và yêu thương người bạn mèo của mình!
          </p>
        </div>

        <!-- Cam kết của chúng tôi với cộng đồng yêu mèo -->
        <div class="col-md-12 mb-4">
          <h3 class="blog-title">Cam kết của chúng tôi với cộng đồng yêu mèo</h3>
          <p class="blog-text">
            Meow Shop không chỉ tập trung vào việc kinh doanh mà còn cam kết đóng góp cho cộng đồng
            yêu mèo trên toàn quốc. Chúng tôi thường xuyên tổ chức các chương trình từ thiện, quyên
            góp thức ăn và vật dụng cho các trung tâm cứu hộ mèo, cũng như hỗ trợ các chiến dịch
            nâng cao nhận thức về việc chăm sóc và bảo vệ mèo hoang. Bên cạnh đó, Meow Shop còn hợp
            tác với các bác sĩ thú y để cung cấp thông tin hữu ích về sức khỏe và dinh dưỡng cho
            mèo, giúp người nuôi mèo có thêm kiến thức để chăm sóc thú cưng của mình tốt hơn. Chúng
            tôi tin rằng, mỗi chú mèo đều xứng đáng được yêu thương và chăm sóc, và Meow Shop sẽ
            luôn nỗ lực để góp phần tạo nên một thế giới tốt đẹp hơn cho những người bạn mèo. Hãy
            cùng chúng tôi lan tỏa tình yêu dành cho mèo đến khắp mọi nơi!
          </p>
        </div>
      </div>
    </div>

    <!-- Spacer to push footer to bottom -->
    <div class="spacer flex-grow-1"></div>

    <!-- Footer Section -->
  </div>
</template>

<script setup>
// import { ref } from 'vue'

// // const email = ref('')

// // // const subscribe = () => {
// // //   if (email.value) {
// // //     alert(`Cảm ơn bạn đã đăng ký với ${email.value}!`)
// // //     email.value = '' // Xóa nội dung input sau khi gửi
// // //   }
// // // }
</script>

<style scoped>
.about-container {
  background-color: #ffffff; /* White background for the main section */
  min-height: 100vh; /* Đảm bảo chiều cao tối thiểu bằng viewport */
}

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

/* Header Section */
.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #00575c;
  position: relative;
  margin-bottom: 2rem;
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

.lead {
  font-size: 1.2rem;
  color: black;
  margin-bottom: 3rem;
}

/* Blog Section */
.blog-section {
  padding: 2rem 0;
}

.blog-title {
  font-size: 1.8rem;
  font-weight: 600;
  color: #00575c; /* Pink to match theme */
  margin-bottom: 1rem;
}

.blog-text {
  font-size: 1.1rem;
  line-height: 1.8;
  color: black;
  text-align: justify;
}

/* Info Section */
.info-section {
  background-color: #343a40; /* Dark grey background */
  padding: 3rem 0;
}

.footer-title {
  color: #00575c; /* Pink to match theme */
  margin-bottom: 1.5rem;
  font-weight: 600;
}

.text-light {
  color: #f8f9fa !important;
}

.text-light a {
  color: #f8f9fa;
  text-decoration: none;
  transition: color 0.3s ease;
}

.text-light a:hover {
  color: #00575c;
}

.social-icons {
  display: flex;
  gap: 1rem;
}

.social-icon {
  font-size: 1.5rem;
  color: #f8f9fa;
  transition:
    color 0.3s ease,
    transform 0.3s ease;
}

.social-icon:hover {
  color: #00575c;
  transform: scale(1.2);
}

.form-control {
  border-radius: 20px;
  border: 1px solid #ced4da;
  padding: 0.5rem 1rem;
  background-color: #ffffff;
}

.btn-pink {
  background-color: #00575c;
  border-color: #00575c;
  border-radius: 20px;
  transition:
    background-color 0.3s ease,
    transform 0.3s ease;
  text-transform: uppercase;
  font-size: 0.9rem;
  padding: 0.5rem 1.5rem;
}

.btn-pink:hover {
  background-color: #e65b50;
  border-color: #e65b50;
  transform: scale(1.05);
}

/* Footer Section */
.footer {
  background-color: #343a40; /* Same dark grey as info section */
  padding: 1rem 0;
}

/* Spacer to push footer down */
.spacer {
  flex-grow: 1;
}

/* Responsive adjustments */
@media (max-width: 767px) {
  .info-section {
    text-align: center;
  }

  .social-icons {
    justify-content: center;
  }

  .form-control,
  .btn-pink {
    width: 100%;
    margin-bottom: 0.5rem;
  }

  .footer-title {
    margin-top: 1rem;
  }

  .section-title {
    font-size: 2rem;
  }

  .lead {
    font-size: 1rem;
  }

  .blog-title {
    font-size: 1.5rem;
  }

  .blog-text {
    font-size: 1rem;
  }
}
</style>
