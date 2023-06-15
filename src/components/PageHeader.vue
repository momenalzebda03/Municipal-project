<template>
  <div>
    <div class="div_show">
      <nav class="navbar navbar-expand-lg navbar-light border-2 border-bottom pt-4">
        <div class="container-fluid px-2 px-md-5">
          <div class="div_respons d-flex justify-content-between align-items-center">
            <router-link to="/" class="div_bottom text-center w-100">
              <img src="../assets/image_logo/ImageLogo.png" alt="">
            </router-link>
            <div class="text-center div_mia">
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
            </div>
          </div>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <div class="d-flex justify-content-between w-100 flex-column flex-lg-row">
              <div class="d-flex gap-0 gap-lg-4 text-center justify-content-center flex-column flex-md-row my-3 my-lg-0">
                <div class="fw-bold d-flex gap-2 align-items-center justify-content-center icon_hover">
                  <span id="icon" class="fas fa-sun icon_click" @click="click_icon"></span>
                  <span>+42°C</span>
                </div>
                <div class="icon_hover">
                  <i class="fas fa-clock me-2"></i>
                  <span class="text_date">الإثنين 1 محرم 1443 - 09 أغسطس 2021 |
                    11:46 صباحا</span>
                </div>
              </div>
              <router-link to="/" class="image_none">
                <img src="../assets/image_logo/ImageLogo.png" alt="" class="position-absolute image_center">
              </router-link>
              <li class="nav-item dropdown nav-link text-center">
                <a class="text-black icon_hover text-decoration-none dropdown-toggle w-50" href="#" id="navbarDropdown"
                  role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <span @click="click_rotate" class="dropdown-text">العربية</span>
                  <i @click="click_rotate" class="fas fa-globe-americas ms-2"></i>
                </a>
                <ul class="dropdown-menu w-100" aria-labelledby="navbarDropdown">
                  <li><a class="dropdown-item" href="#">العربية</a></li>
                  <li><a class="dropdown-item" href="#">الانجليزية</a></li>
                </ul>
                <i class="fas fa-search icon_hover me-3"></i>
                <i class="fas fa-user icon_hover"></i>
              </li>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderCpap',
  data() {
    return {
      boolen: true
    }
  },
  methods: {
    click_rotate() {
      var dropdownToggle = document.querySelector(".dropdown-toggle");
      dropdownToggle.classList.toggle("rotate_100");
    },
    click_icon() {
      var icon = document.getElementById("icon");
      if (this.boolen == true) {
        icon.classList = "fas fa-moon icon_click";
        this.boolen = false;
      } else {
        icon.classList = "fas fa-sun icon_click";
        this.boolen = true;
      }
    }
  }
}
</script>