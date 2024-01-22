<script setup>
import { ref, onMounted } from 'vue';
import SongRow from '../components/SongRow.vue';
import Play from 'vue-material-design-icons/Play.vue';
import Pause from 'vue-material-design-icons/Pause.vue';
import DotsHorizontal from 'vue-material-design-icons/DotsHorizontal.vue';
import Heart from 'vue-material-design-icons/Heart.vue';
import ClockTimeThreeOutline from 'vue-material-design-icons/ClockTimeThreeOutline.vue';
import { getPlaylistTracks } from '../API/spotifyService';

let playlistTracks = ref([]);
let albumImg = ref('');
let label = ref('');
let loader = ref(true);
let tracksList = ref([]);

onMounted(async () => {
  try {
    const tracks = await getPlaylistTracks();
    playlistTracks = JSON.parse(JSON.stringify(tracks)).albums[0];

    if (playlistTracks) {
      loader.value = false;
      albumImg.value = playlistTracks.images[0]?.url || '';
      tracksList = JSON.parse(JSON.stringify(playlistTracks.tracks.items));
      label.value = playlistTracks.label;
    }
    // console.log(tracksList)

  } catch (error) {
    console.error('Error fetching playlist tracks:', error);
  }
});
</script>

<template>
  <div class="container">
    <button type="button" class="browse-button">
      {{ playlistTracks.name }}
    </button>

    <div class="spacer"></div>
    <div class="album-container">
      <img v-if="!loader" width="140" :src="albumImg" alt="album cover">
      <span v-else>No album cover available</span>
      <div class="album-box">
        <div style="font-size: 33px;" class="album-text">
          {{ playlistTracks.name }}
        </div>

        <div class="album-info">
          <div class="album-title">Album</div>
          <div class="circle" />
          <div class="release-info">
            <span class="release-year">{{ playlistTracks.release_date }}</span>
          </div>
          <div class="circle" />
          <div class="song-info-container">
            <span>{{ playlistTracks.total_tracks }} songs</span>
          </div>
        </div>

        <div class="playbar-controls">
          <button @click="playFunc()">
            <Play v-if="!isPlaying" fillColor="#181818" :size="25" />
            <Pause v-else fillColor="#181818" :size="25" />
          </button>
          <button type="button">
            <Heart fillColor="#1BD760" :size="30" />
          </button>
          <button type="button">
            <DotsHorizontal fillColor="#FFFFFF" :size="25" />
          </button>
        </div>
      </div>
    </div>

    <div class="list-container"></div>
    <div class="list">
      <div class="list-content">
        <div>#</div>
        <div>Title</div>
      </div>
      <div>
        <ClockTimeThreeOutline fillColor="#FFFFFF" :size="18" />
      </div>
    </div>
    <div class="list-border"></div>
    <div class="custom-margin"></div>
    <ul class="custom-list" v-for="track, index in tracksList" :key="track">
      <SongRow :artist="label" :track="track" :tracks="tracksList" :index="++index" />
    </ul>
  </div>
</template>

<style >
.container {
  padding: 2rem;
  margin-top: 70px;
  margin-bottom: 100px;
  display: block;
}


.browse-button {
  color: white;
  font-size: 2rem;
  font-weight: bold;
  cursor: pointer;
  transition: underline 0.2s ease-in-out;
}

.browse-button:hover {
  text-decoration: underline;
}


.spacer {
  padding: 1.5rem 0;
}

.album-container {
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
}

.album-box {
  width: 100%;
  margin-left: 10px;
}

.album-text {
  font-size: 33px;
  color: white;
  width: 100%;
  cursor: pointer;
  top: 0;
}

.album-text:hover {
  text-decoration: underline;
}

.album-text.font-bold {
  font-weight: bold;
}

.album-info {
  color: #b3b3b3;
  font-size: 13px;
  display: flex;
  align-items: center;
}

.album-title {
  display: flex;
}

.release-info {
  margin-left: 2px;
  display: flex;
}

.circle {
  margin-left: 5px;
  width: 2px;
  height: 2px;
  background-color: rgb(189, 189, 189);
  border-radius: 100%;
}

.release-year {
  margin-left: 2px;
}

.song-info-container {
  display: flex;
  margin-left: 2px;
}


.song-info-container span {
  margin-left: 2px;

}

.playbar-controls {
  display: flex;
  gap: 4px;
  align-items: center;
  justify-content: flex-start;
  bottom: 0;
  margin-bottom: 1.5rem;
}

.playbar-controls button {
  padding: 0.25rem;
  border-radius: 50%;
}

.playbar-controls button:first-child {
  margin-right: 0.75rem;
  background-color: white;
}

.playbar-controls button:last-child {
  margin-left: 0.75rem;
}

.list-container {
  margin-top: 6px;
}

.list {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2px 5px;
}

.list-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #A0A0A0;
}

.list-content div {
  margin-right: 17px;
}

.list-border {
  border-bottom: 1px solid #2A2A2A;
  margin-top: 2px;
}

.custom-margin {
  margin-bottom: 4px;
}

.custom-list {
  width: 100%;
}
</style>
