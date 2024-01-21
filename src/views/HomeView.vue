<script setup>
    import HomeCard from '../components/HomeCard.vue';
</script>

<template>
    <div class="homeContainer">
        <button
            type="button"
            class="titleButton"
        >
            Podcasts for you
        </button>

        <div class="space"></div>

        <div class="containerHomeCard">
            <HomeCard class="home-card" image="https://picsum.photos/id/58/300/300" title="Title is here" subTitle="Subtitle is here" />
            <HomeCard class="home-card" image="https://picsum.photos/id/56/300/300" title="Title is here" subTitle="Subtitle is here" />
            <HomeCard class="home-card" image="https://picsum.photos/id/65/300/300" title="Title is here" subTitle="Subtitle is here" />
            <HomeCard class="home-card" image="https://picsum.photos/id/87/300/300" title="Title is here" subTitle="Subtitle is here" />
            <HomeCard class="home-card" image="https://picsum.photos/id/100/300/300" title="Title is here" subTitle="Subtitle is here" />
        </div>
    </div>

    <div class="homeContainer">
        <button
            type="button"
            class="titleButton"
        >
        Recommended radio
        </button>

        <div class="space"></div>

        <div class="containerHomeCard">
            <HomeCard  class="home-card" image="https://picsum.photos/id/120/300/300" title="Title is here" subTitle="Subtitle is here" />
            <HomeCard  class="home-card" image="https://picsum.photos/id/111/300/300" title="Title is here" subTitle="Subtitle is here" />
            <HomeCard  class="home-card" image="https://picsum.photos/id/221/300/300" title="Title is here" subTitle="Subtitle is here" />
            <HomeCard  class="home-card" image="https://picsum.photos/id/232/300/300" title="Title is here" subTitle="Subtitle is here" />
            <HomeCard  class="home-card" image="https://picsum.photos/id/187/300/300" title="Title is here" subTitle="Subtitle is here" />
        </div>
    </div>

    <div class="homeContainer">
        <button
            type="button"
            class="titleButton"
        >
        Recommended songs
        </button>

        <div class="space"></div>

        <div class="containerHomeCard">
            <HomeCard class="home-card" image="https://picsum.photos/id/88/300/300" title="Title is here" subTitle="Subtitle is here" />
            <HomeCard class="home-card" image="https://picsum.photos/id/243/300/300" title="Title is here" subTitle="Subtitle is here" />
            <HomeCard class="home-card" image="https://picsum.photos/id/113/300/300" title="Title is here" subTitle="Subtitle is here" />
            <HomeCard class="home-card" image="https://picsum.photos/id/121/300/300" title="Title is here" subTitle="Subtitle is here" />
            <HomeCard class="home-card" image="https://picsum.photos/id/99/300/300" title="Title is here" subTitle="Subtitle is here" />
        </div>
    </div>
</template>


<style>
.homeContainer {
 padding: 2rem;
}

.titleButton {
  color: white;
  font-size: 1.5rem;
  line-height: 2rem;
  margin-left: 1.2rem;
  font-weight: 600; 
  cursor: pointer;
  transition: text-decoration 0.3s ease-in-out;
}

.titleButton:hover {
  text-decoration: underline;
}

.space {
  padding-top: 1.5rem; 
}

.containerHomeCard {
  display: flex;
  overflow-x: auto;  
  gap: 1rem; 
}


.home-card {
  flex: 0 0 auto;
  width: 300px; 
}


@media (min-width: 768px) {
  .containerHomeCard {
    justify-content: space-between; 
  }

  .home-card {
    width: calc((100% / 2) - 10px);
  }
}

@media (min-width: 1024px) {
  .home-card {
    width: calc((100% / 3) - 10px);
  }
}

@media (min-width: 1280px) {
  .home-card {
    width: calc((100% / 4) - 10px); 
  }
}

@media (min-width: 1440px) {
  .home-card {
    width: calc((100% / 5) - 10px);
  }
}


</style>