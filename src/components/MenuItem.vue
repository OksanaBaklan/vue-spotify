<script setup>
import { ref, toRefs, watchEffect } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute()


const props = defineProps({
    iconString: String,
    iconSize: Number,
    pageUrl: String,
    name: String
})

const { iconString, pageUrl, name, iconSize } = toRefs(props)

let icon = ref(null)
let textIsHover = ref(false)


watchEffect(() => {
    if (route.path == pageUrl.value) {
        icon.value = iconString.value + '-active'
        textIsHover.value = true
    } else {
        icon.value = iconString.value + '-inactive'
        textIsHover.value = false
    }
})


const isHover = () => {
    if (icon.value === iconString.value + '-active') return

    if (icon.value === iconString.value + '-inactive') {
        icon.value = iconString.value + '-inactive-hover'
        textIsHover.value = true
    } else if (icon.value === iconString.value + '-inactive-hover') {
        icon.value = iconString.value + '-inactive'
        textIsHover.value = false
    }
}
</script>


<template>
  <div>
  <li 
        class="custom-list-item" 
        @mouseenter="isHover()" 
        @mouseleave="isHover()"
    >
        <img :width="iconSize" :src="`/images/icons/${icon}.png`">
        <div
            :class="textIsHover ? 'text-white ' : 'text-gray-400'"
            class="list-text"
        >
            <span :class="route.path == pageUrl ? 'text-white' : ''">{{ name }}</span>
        </div>
    </li>
  </div>
</template>



<style>
.custom-list-item {
  display: flex;
  align-items: center;
  padding-bottom: 1rem;
  cursor: pointer;
}
.list-text{
  font-weight: 600; /* Equivalent to font-semibold in Tailwind */
  font-size: 14px;
  margin-left: 0.25rem; /* Equivalent to ml-4 in Tailwind */
  margin-top: 0.125rem;
}

</style>