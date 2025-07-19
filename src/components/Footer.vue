<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <footer class="footer">
    <div class="container">
      <div class="row gy-4 align-items-start">
        <!-- Cột 1: Logo -->
        <div class="col-md-4 col-lg-3">
          <div class="logo mb-2">ME<span class="highlight">OW</span></div>
          <p class="footer-text tagline">We Have Everything For Cat Here!</p>
        </div>

        <!-- Cột 2: Đơn hàng -->
        <div class="col-md-4 col-lg-2">
          <h6 class="footer-title">Where's my order?</h6>
          <button class="btn btn-order">TRACK ORDER</button>
          <p class="footer-text small mt-2">
            Please note, it may take longer than usual to fulfill orders due to the impacts of
            COVID-19.
          </p>
        </div>

        <!-- Cột 3: Shipping -->
        <div class="col-md-4 col-lg-2">
          <h6 class="footer-title">Shipping</h6>
          <ul class="list-unstyled footer-text">
            <li><a href="#">About Free Shipping</a></li>
            <li><a href="#">Shipping Information</a></li>
          </ul>
        </div>

        <!-- Cột 4: App -->
        <div class="col-md-6 col-lg-2">
          <h6 class="footer-title">Shopping App</h6>
          <p class="footer-text small">
            Try our View in Your Room feature, manage registries and save payment info.
          </p>
          <img
            src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
            alt="App Store"
            class="img-fluid app-store"
          />
        </div>

        <!-- Cột 5: Company & Social -->
        <div class="col-md-6 col-lg-2">
          <h6 class="footer-title">Our Company</h6>
          <ul class="list-unstyled footer-text">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Store locations</a></li>
          </ul>

          <h6 class="footer-title mt-3">Social Media</h6>
          <div class="d-flex gap-3 mb-2 social-icons">
            <a href="#" class="social-link"><i class="bi bi-facebook"></i></a>
            <a href="#" class="social-link"><i class="bi bi-instagram"></i></a>
            <a href="#" class="social-link"><i class="bi bi-youtube"></i></a>
            <a href="#" class="social-link"><i class="bi bi-twitter"></i></a>
            <a href="#" class="social-link"><i class="bi bi-pinterest"></i></a>
          </div>
          <p class="footer-text small">Show us your cat: #meowshop #themeowshop</p>
        </div>

        <!-- Cột 6: Policies -->
        <div class="col-md-12 col-lg-1">
          <h6 class="footer-title">Policies</h6>
          <ul class="list-unstyled footer-text">
            <li><a href="#">Shipping Policy</a></li>
            <li><a href="#">Refund Policy</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
          </ul>
        </div>
      </div>

      <hr class="bg-divider mt-5" />
      <p class="text-center footer-text small mb-0">
        Copyright © 2025 The Meow Shop. All rights reserved
      </p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: #fff;
  padding: 4rem 0;
  font-size: 0.95rem;
  color: #333;
}

.logo {
  font-size: 2.5rem;
  font-weight: 800;
  color: #007471;
  font-family: 'Arial Black', sans-serif;
}

.highlight {
  color: #fcbf3d;
}

.footer-title {
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #000;
}

.footer-text {
  color: #333;
}

.footer-text a {
  color: #007471;
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-text a:hover {
  color: #004d4d;
  text-decoration: underline;
}

.social-icons {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.social-link {
  color: #007471;
  font-size: 1.3rem;
  transition:
    color 0.3s ease,
    transform 0.2s ease;
}

.social-link:hover {
  color: #004d4d;
  transform: scale(1.2);
}

.btn-order {
  background-color: #007471;
  color: #fff;
  padding: 0.3rem 1rem;
  font-size: 0.8rem;
  border: none;
  border-radius: 999px;
  transition: background-color 0.3s ease;
}

.btn-order:hover {
  background-color: #004d4d;
}

.app-store {
  max-width: 140px;
  margin-top: 0.5rem;
}

hr.bg-divider {
  margin: 2.5rem 0 1rem;
  background-color: #ccc;
  height: 1px;
  border: none;
  opacity: 0.4;
}

@media (max-width: 767px) {
  .logo {
    text-align: center;
    font-size: 2rem;
  }

  .footer {
    text-align: center;
  }

  .d-flex.gap-3 {
    justify-content: center;
  }

  .social-icons {
    justify-content: center;
  }
}
</style>
