import { defineStore } from 'pinia'

export const useSongStore = defineStore('song', {
  state: () => ({
    isPlaying: false,
    audio: null,
    currentTrack: null
  }),
  actions: {
    loadSong( track) {
        this.currentTrack = track

        if (this.audio && this.audio.src) {
            this.audio.pause()
            this.isPlaying = false
            this.audio.src = ''
        }

        this.audio = new Audio()
        this.audio.src = track.path

        setTimeout(() => {
            this.isPlaying = true
            this.audio.play()
        }, 200)
    },

    playOrPauseSong() {
        if (this.audio.paused) {
            this.isPlaying = true
            this.audio.play()
        } else {
            this.isPlaying = false
            this.audio.pause()
        }
    },

    playOrPauseThisSong(track) {
        if (!this.audio || !this.audio.src || (this.currentTrack.id !== track.id)) {
            this.loadSong(track)
            return
        }

        this.playOrPauseSong()
    },

    resetState() {
        this.isPlaying = false
        this.audio = null
        this.currentArtist = null
        this.currentTrack = null
    }
  },
  persist: true
})
