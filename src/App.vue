<script setup >
  import { ref } from 'vue'
  
  import ChevronUp from 'vue-material-design-icons/ChevronUp.vue';
  import ChevronDown from 'vue-material-design-icons/ChevronDown.vue';
  import ChevronRight from 'vue-material-design-icons/ChevronRight.vue';
  import ChevronLeft from 'vue-material-design-icons/ChevronLeft.vue';

  let openMenu = ref (false)

  const toggleMenu = () => {
  openMenu.value = !openMenu.value;
  };
</script>

<template>
  <div class="custom-navbar">
    <div class="custom-navbar-inner">
      <button type="button" class="button-arrow">
        <ChevronLeft fillColor="#FFFFFF" :size="30" />
      </button>
      <button type="button" class="button-arrow">
        <ChevronRight fillColor="#FFFFFF" :size="30" />
      </button>
    </div>

  <button @click="toggleMenu" :class="{ 'custom-navbar-button': true, 'active': openMenu }">

  <div class="user-info">
    <img class="rounded-full" width="27" src="https://avatars.githubusercontent.com/u/113352831?v=4" />
    <div class="user-details">Oksana Baklan Dev</div>
      <ChevronDown v-if="!openMenu" class="chevron-icon" />
        <ChevronUp v-else class="chevron-icon" />
  </div>
  </button>

            <span v-if="openMenu"
                class="menu-container">
                <ul class="menu-list">
                    <li class="menu-item">Profile</li>
                    <li class="menu-item">Log out</li>
                </ul>
            </span>

         <div id="SideNav">

         </div>
  </div>
</template>

<style>
.custom-navbar {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width:100%;
  height: 60px;
  position: fixed;
  right: 0;
  z-index: 20;
  background-color: rgba(16, 16, 16, 0.8);
}
@media screen and (min-width: 767px) {
  .custom-navbar{
      width: calc(100% - 240px);
  justify-content: space-between;

  }
}

.custom-navbar-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left:  0.8rem;
  margin-right: 0.8rem;
}

.button-arrow {
  border-radius: 50%;
  background-color: black;
  padding: 1px;
  cursor: pointer;
  margin-left: 4px;
}

.custom-navbar-button {
  background-color: black;
  transition: background-color 0.3s ease; 
  border-radius: 9999px;
  padding: 0.5rem;
  margin-right: 0.8rem;
  cursor: pointer;
}

.custom-navbar-button:hover {
  background-color: #282828;
}

.custom-navbar-button img {
  border-radius: 9999px;
}

.custom-navbar-button .text-white {
  font-size: 14px; 
  font-weight: bold;
  margin-left: 1.5rem;
}

.user-info {
  display: flex;
  align-items: center;
}

.user-info img {
  width: 27px;
  height: 27px;
  border-radius: 50%;
}

.user-info .user-details {
  color: #fff;
  font-size: 14px;
  font-weight: bold;
  margin-left: 1.5rem;
}

.user-info .chevron-icon {
  cursor: pointer;
  color: #FFFFFF;
  width: 25px;
  height: 25px;
}

.menu-container {
  position: fixed;
  width: 190px;
  background-color: #282828;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  z-index: 50;
  border-radius: 4px;
  top: 52px;
  right: 35px;
  padding: 1px;
  cursor: pointer;
}

.menu-list {
  list-style: none;
  margin: 0;
  padding: 0;
}

.menu-item {
  font-size: 14px;
  font-weight: bold;
  color: #ccc;
  padding: 10px 15px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  border-bottom: 1px solid #666;
}

.menu-item:hover {
  background-color: #3E3D3D;
  color: #fff;
  border-bottom: 1px solid #3E3D3D;
}
 

@media screen and (min-width: 767px) {
#SideNav {
    height: 200%;
    padding: 6px;
    width: 240px;
    position: fixed;
    left:0;
    z-index: 50;
    background-color: black;
}
}

</style>


