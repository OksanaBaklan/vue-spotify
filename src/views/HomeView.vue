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

        <div class="flex-container">
            <HomeCard image="https://picsum.photos/id/30/300/300" title="Title is here" subTitle="Subtitle is here" />
            <HomeCard image="https://picsum.photos/id/45/300/300" title="Title is here" subTitle="Subtitle is here" />
            <HomeCard class="md:block hidden" image="https://picsum.photos/id/65/300/300" title="Title is here" subTitle="Subtitle is here" />
            <HomeCard class="lg:block hidden" image="https://picsum.photos/id/67/300/300" title="Title is here" subTitle="Subtitle is here" />
            <HomeCard class="xl:block hidden" image="https://picsum.photos/id/100/300/300" title="Title is here" subTitle="Subtitle is here" />
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

        <div class="flex-container">
            <HomeCard image="https://picsum.photos/id/120/300/300" title="Title is here" subTitle="Subtitle is here" />
            <HomeCard image="https://picsum.photos/id/110/300/300" title="Title is here" subTitle="Subtitle is here" />
            <HomeCard class="md:block hidden" image="https://picsum.photos/id/221/300/300" title="Title is here" subTitle="Subtitle is here" />
            <HomeCard class="lg:block hidden" image="https://picsum.photos/id/232/300/300" title="Title is here" subTitle="Subtitle is here" />
            <HomeCard class="xl:block hidden" image="https://picsum.photos/id/187/300/300" title="Title is here" subTitle="Subtitle is here" />
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

        <div class="flex-container">
            <HomeCard image="https://picsum.photos/id/88/300/300" title="Title is here" subTitle="Subtitle is here" />
            <HomeCard image="https://picsum.photos/id/243/300/300" title="Title is here" subTitle="Subtitle is here" />
            <HomeCard class="md:block hidden" image="https://picsum.photos/id/123/300/300" title="Title is here" subTitle="Subtitle is here" />
            <HomeCard class="lg:block hidden" image="https://picsum.photos/id/121/300/300" title="Title is here" subTitle="Subtitle is here" />
            <HomeCard class="xl:block hidden" image="https://picsum.photos/id/99/300/300" title="Title is here" subTitle="Subtitle is here" />
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

.flex-container {
  display: flex;
  align-items: center;
}
</style>