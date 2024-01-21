<script setup>
import { toRefs } from 'vue'
import { RouterLink } from 'vue-router';

const props = defineProps({
    image: String,
    title: String,
    subTitle: String
})
const { image, title, subTitle } = toRefs(props)
</script>

<template>
    <RouterLink to="library">
        <div class="card-container">
            <img class="card-image" :src="image" alt="">
            <div class="card-title">{{ title }}</div>
            <div class="card-subtitle">{{ subTitle }}</div>
        </div>
    </RouterLink>
</template>

<style>
.card-container {
  background-color: #111111;
  width: fit-content;
  padding: 1rem;
  border-radius: 0.375rem; 
  margin: 0.5rem; 
  cursor: pointer;
  transition: background-color 0.3s ease-in-out; 
}

.card-container:hover {
  background-color: #252525; 
}

.card-image {
  border-radius: 0.375rem; 
}

.card-title {
  color: #ffffff; 
  padding-top: 0.25rem;
  font-weight: 600;
  font-size: 17px; 
}

.card-subtitle {
  color: #a0aec0;
  padding-top: 0.125rem;
  padding-bottom: 0.375rem; 
  font-size: 14px; 
}
</style>