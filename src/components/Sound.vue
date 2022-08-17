<template>
    <div @click="togglePlay" class="sound">
        <img class="sound__icon" src="img/sound-off.svg" alt=""/>
        <audio class="sound__audio" src="files/germany.mp3"></audio>
    </div>
</template>

<script setup>
import {ref} from "vue";

const isPlaying = ref(false)

const togglePlay = () => {
    const icon = document.querySelector('.sound__icon');
    const audio = document.querySelector('.sound__audio');

    audio.onended = () => {
        icon.src = 'img/sound-off.svg';
    };
    if (isPlaying.value) {
        audio.pause();
        icon.src = 'img/sound-off.svg';
    } else {
        audio.play();
        icon.src = 'img/sound-on.svg';
    }

    audio.onplaying = () => {
        isPlaying.value = true;
    };
    audio.onpause = () => {
        isPlaying.value = false;
    };
}
</script>