<template>
  <div>
    <div class="div_show">
      <nav class="navbar navbar-expand-lg navbar-light border-2 border-bottom pt-4">
        <div class="container-fluid px-5">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <div class="d-flex justify-content-between w-100">
              <div class="navbar-nav mb-2 mb-lg-0">
                <div class="d-flex gap-4">
                  <div class="fw-bold d-flex gap-2 align-items-center icon_hover">
                    <span id="icon" class="fas fa-sun icon_click" @click="click_icon"></span>
                    <span>+42°C</span>
                  </div>
                  <div class="d-flex gap-2 align-items-center icon_hover">
                    <i class="fas fa-clock"></i>
                    <span class="text-center">الإثنين 1 محرم 1443 - 09 أغسطس 2021 | 11:46 صباحا</span>
                  </div>
                </div>
              </div>
              <div class="div_center">
                <img src="../assets/image_logo/ImageLogo.png" alt="" class="position-absolute">
              </div>
              <li class="nav-item dropdown nav-link">
                <a class="text-black icon_hover text-decoration-none dropdown-toggle w-50" href="#" id="navbarDropdown"
                  role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <span @click="click_rotate" class="dropdown-text">العربية</span>
                  <i @click="click_rotate" class="fas fa-globe-americas ms-2"></i>
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
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

<!-- created() {
  this.changePageTitle('الألبومات');
},
changePageTitle(newTitle) {
  document.title = newTitle;
}, -->