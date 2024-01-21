<script setup >
  import { ref, onMounted  } from 'vue'
  import { RouterLink, RouterView } from 'vue-router'

import MenuItem from "./components/MenuItem.vue"

  import ChevronUp from 'vue-material-design-icons/ChevronUp.vue';
  import ChevronDown from 'vue-material-design-icons/ChevronDown.vue';
  import ChevronRight from 'vue-material-design-icons/ChevronRight.vue';
  import ChevronLeft from 'vue-material-design-icons/ChevronLeft.vue';

  let openMenu = ref(false)
  let openMenuLogo = ref (false)
  let isMobile = ref(false);


  const toggleMenu = () => {
  openMenu.value = !openMenu.value;
  };

  const toggleMenuLogo = () => {
  openMenuLogo.value = !openMenuLogo.value;
  console.log(openMenuLogo.value)
  };

onMounted(() => {
  const isMobileMediaQuery = window.matchMedia('(max-width: 768px)');
  isMobile.value = isMobileMediaQuery.matches;

  isMobileMediaQuery.addEventListener('change', (event) => {
    isMobile.value = event.matches;
  });
})
  
</script>

<template>
  <div class="custom-navbar">

   <button @click="toggleMenuLogo" :class="{ 'logo': true, 'active': openMenuLogo }">   
    <div class="logo"> 
      <RouterLink to="/" >
        <img width="47"  src="/favicon.png" />
      </RouterLink>
    </div>
  </button>

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
  </div>
           <div id="SideNav">
 <div v-if="isMobile">
          <div v-if="openMenuLogo" class="sideNav-container">
              <RouterLink to="/" >
                <button  @click="toggleMenuLogo" class="logoIsMobile">
                  <img width="125"  src="/images/icons/spotify-logo.png" />
                </button>
              </RouterLink>
              <div class="my-10"></div>
          <ul>
                <RouterLink to="/">
                    <MenuItem class="menu-item"  :iconSize="23" name="Home" iconString="home" pageUrl="/" />
                </RouterLink>
                <RouterLink to="/search">
                    <MenuItem class="menu-item" :iconSize="24" name="Search" iconString="search" pageUrl="/search" />
                </RouterLink>
                <RouterLink to="/library">
                    <MenuItem class="menu-item" :iconSize="23" name="Your Library" iconString="library" pageUrl="/library" />
                </RouterLink>
                <div class="gap"></div>
                <MenuItem :iconSize="24" name="Create Playlist" iconString="playlist" pageUrl="/playlist" />
                <MenuItem class="menu-item-liked-songs" :iconSize="27" name="Liked Songs" iconString="liked" pageUrl="/liked" />
              </ul>
              <div class="borderForNav"></div>
            <ul>
                <li class="font-semibold text-[13px] mt-3 text-gray-300 hover:text-white">My Playlist #1</li>
                <li class="font-semibold text-[13px] mt-3 text-gray-300 hover:text-white">My Playlist #2</li>
                <li class="font-semibold text-[13px] mt-3 text-gray-300 hover:text-white">My Playlist #3</li>
                <li class="font-semibold text-[13px] mt-3 text-gray-300 hover:text-white">My Playlist #4</li>
            </ul>
         </div>

 </div> 
  <div v-else>
              <RouterLink to="/" >
                <button >
                  <img width="125"  src="/images/icons/spotify-logo.png" />
                </button>
              </RouterLink>
              <div class="gap"></div>
          <ul>
                <RouterLink to="/">
                    <MenuItem class="menu-item"  :iconSize="23" name="Home" iconString="home" pageUrl="/" />
                </RouterLink>
                <RouterLink to="/search">
                    <MenuItem class="menu-item" :iconSize="24" name="Search" iconString="search" pageUrl="/search" />
                </RouterLink>
                <RouterLink to="/library">
                    <MenuItem class="menu-item" :iconSize="23" name="Your Library" iconString="library" pageUrl="/library" />
                </RouterLink>
                <div class="gap"></div>
                <MenuItem :iconSize="24" name="Create Playlist" iconString="playlist" pageUrl="/playlist" />
                <MenuItem class="menu-item-liked-songs" :iconSize="27" name="Liked Songs" iconString="liked" pageUrl="/liked" />
              </ul>
                <div class="borderForNav"></div>
            <ul>
                <li class="font-semibold text-[13px] mt-3 text-gray-300 hover:text-white">My Playlist #1</li>
                <li class="font-semibold text-[13px] mt-3 text-gray-300 hover:text-white">My Playlist #2</li>
                <li class="font-semibold text-[13px] mt-3 text-gray-300 hover:text-white">My Playlist #3</li>
                <li class="font-semibold text-[13px] mt-3 text-gray-300 hover:text-white">My Playlist #4</li>
            </ul>
  </div>

         </div>
    <div
        class="
          routerViewContainer
        "
    >
        <div ></div>
        <RouterView />
        <div ></div>
    </div>


</template>

<style>
.routerViewContainer{
  position: fixed;
  right: 0;
  top: 0;
  width:100%;
  overflow: auto;
  height: 100%;
  background: linear-gradient(to bottom, #1c1c1c, black);
  background-color: #000;
}

.routerViewContainer > div {
  margin-top: 70px;
  margin-bottom: 100px;
}

  .logo{
    display: block;
    margin-left: 0.8rem;
    cursor: pointer;
  }

  .logoIsMobile{
    padding-top: 0.3rem;
  }
  
.gap {
  margin-top: 2.5rem; 
  margin-bottom: 2.5rem; 
}
.borderForNav {
  border-bottom: 1px solid #4a5568; 
}
.custom-navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width:100%;
  height: 60px;
  position: fixed;
  right: 0;
  z-index: 20;
  background-color: rgba(16, 16, 16, 0.8);
}

.menuLogo-container {
  /* Add styles that should always be applied */
  list-style: none;
  padding: 0;
  margin: 0;
}

/* Conditional styles when openMenuLogo is true */
.menuLogo-container.active {
  display: block;
  width: 150px;
  background-color: #282828; /* Show the list when openMenuLogo is true */
}

.menuLogo-container li {
  /* Add styles for list items inside the .menuLogo-container */
  padding: 8px 0; /* Adjust padding as needed */
  border-bottom: 1px solid #ccc; /* Example border between list items */
}

.menuLogo-container li:last-child {
  border-bottom: none; /* Remove border on the last list item */
}
@media screen and (min-width: 767px) {
  .logo{
    display: none;
  }
  .routerViewContainer{
  width: calc(100% - 240px);

}
  .custom-navbar{
      width: calc(100% - 240px);
  justify-content: space-between;
  }
  .borderForNav {
  border-bottom: 1px solid #4a5568; 
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
.sideNav-container{
  display: block;
  background-color: black;
  width: 240px;
  position: fixed;
  left:0;
  z-index: 50;
  padding: 0.4rem;
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
.sideNav-container{
  display: block;
}
}
.router-link-menu-item {
  display: block;
  text-decoration: none;
  color: inherit; /* Inherits color from parent */
  transition: color 0.3s ease-in-out; /* Optional: Add a smooth transition effect */
}

/* CSS class for the common styles of MenuItem */
.menu-item {
  display: flex;
  align-items: center;
  padding: 10px; /* Adjust padding as needed */
  cursor: pointer;
  transition: background-color 0.3s ease-in-out; /* Optional: Add a smooth transition effect */
}
</style>


