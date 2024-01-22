<script setup>
import { ref, toRefs, onMounted } from 'vue'
import Heart from 'vue-material-design-icons/Heart.vue';
import Play from 'vue-material-design-icons/Play.vue';
import Pause from 'vue-material-design-icons/Pause.vue';

import { useSongStore } from '../stores/song';
import { storeToRefs } from 'pinia';


const useSong = useSongStore()
const { isPlaying, currentTrack } = storeToRefs(useSong)

let isHover = ref(false)
let isTrackTime = ref(null)

const props = defineProps({
    track: Object,
    artist: String,
    tracks: Array,
    index: Number,
})

const { track, artist, tracks, index } = toRefs(props)
onMounted(() => {


    const audio = new Audio(track.value.preview_url);

    audio.addEventListener('loadedmetadata', function () {
        const duration = track.value.duration_ms / 1000
        const minutes = Math.floor(duration / 60);
        const seconds = Math.floor(duration % 60);
        isTrackTime.value = minutes + ':' + seconds.toString().padStart(2, '0')
    });

})
</script>

<template>
    <li class="list-item" @mouseenter="isHover = true" @mouseleave="isHover = false">
        <div class="list-item-content">
            <div v-if="isHover" class="controls">
                <Play v-if="!isPlaying" fillColor="#FFFFFF" :size="25" @click="useSong.playOrPauseThisSong" />
                <Play v-else-if="isPlaying && currentTrack.name !== track.name" fillColor="#FFFFFF" :size="25"
                    @click="useSong.playOrPauseThisSong" />
                <Pause v-else fillColor="#FFFFFF" :size="25" @click="useSong.playOrPauseSong()" />
            </div>
            <div v-else class="index">
                <span :class="{ 'playing': currentTrack && currentTrack.name === track.name }">
                    {{ index }}
                </span>
            </div>
            <div class="track-info">
                <div :class="{ 'playing': currentTrack && currentTrack.name === track.name }" class="track-name">
                    {{ track.name }}
                </div>
                <div class="artist-info">{{ artist }}</div>
            </div>
        </div>
        <div class="heart-icon">
            <button type="button" v-if="isHover">
                <Heart fillColor="#1BD760" :size="22" />
            </button>
            <div v-if="isTrackTime" class="time-info">
                {{ isTrackTime }}
            </div>
        </div>
    </li>
</template>


<style>
.list-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 0.375rem;
}

.list-item:hover {
    background-color: #2a2929;
}

.list-item-content {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 1.5rem 0;
}

.list-item-content:hover .controls {
    cursor: pointer;
}

.controls {
    width: 40px;
    margin-left: 14px;
    margin-right: 6px;
    cursor: pointer;
    /* Corrected from `cursor: default` */
}

.controls button {
    background: none;
    border: none;
    cursor: pointer;
}

.index {
    color: white;
    /* Corrected from `text-white` */
    font-weight: bold;
    width: 40px;
    margin-left: 5px;
}

.track-info {
    flex: 1;
    margin-left: 10px;
}

.track-name {
    color: white;
    font-weight: bold;
}

.track-name.playing {
    color: #1BD760;
}

.artist-info {
    color: #A0A0A0;
    font-size: 13px;
}

.controls button+button {
    margin-left: 5px;
}

.heart-icon {
    display: flex;
    align-items: center;

}

.time-info {
    font-size: 12px;
    margin: 0 5px;
    color: #A0A0A0;
}
</style>
