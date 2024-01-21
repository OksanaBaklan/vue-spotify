
<script setup>
import { ref, toRefs } from 'vue'
import { RouterLink } from 'vue-router';
import uniqolor from 'uniqolor';
let randColor = ref('')
randColor.value = uniqolor.random()

const props = defineProps({ category: String, image: String })
const { category } = toRefs(props)
</script>

<template>
    <RouterLink to="library">
        <div
            v-if="randColor.color"
            :style="`background-color: ${randColor.color};`"
            class="category-container "
        >
            <div class="category-text">{{ category }}</div>
            <img
                class="category-image"
                :src="image || ''"
            >
        </div>
    </RouterLink>
</template>

<style>
  .category-container {
    position: relative;
    overflow: hidden;
    border-radius: 12px;
    aspect-ratio: 1;
  }

  .category-text {
    color: white;
    padding-top: 0.75rem;
    padding-left: 1rem;
    font-weight: 600;
    font-size: 1.44rem;
  }

  .category-image {
    position: absolute;
    filter: contrast(0.55);
    right: -0.875rem; 
    bottom: 0;
    max-width: 100px;
    transform: rotate(20deg);
  }
</style>

