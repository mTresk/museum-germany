<template>
    <PageIndex :page-next="pageNext" :page-prev="pagePrev">
        <div class="screen__content">
            <div class="screen__images">
                <div style="width: 520px; height: 340px; margin: 0 40px" class="screen__image screen__image-ibg">
                    <img src="img/2.jpg" alt=""/>
                </div>
                <div style="width: 520px; height: 340px; margin: 0 40px" class="screen__image screen__image-ibg">
                    <img src="img/3.jpg" alt=""/>
                </div>
                <div style="width: 520px; height: 340px; margin: 0 40px" class="screen__image screen__image-ibg">
                    <img src="img/4.jpg" alt=""/>
                </div>
            </div>
            <div class="screen__images">
                <div style="width: 520px; height: 340px; margin: 0 40px" class="screen__image screen__image-ibg">
                    <img src="img/5.jpg" alt=""/>
                </div>
                <div style="width: 520px; height: 340px; margin: 0 40px" class="screen__image screen__image-ibg">
                    <img src="img/6.jpg" alt=""/>
                </div>
                <div style="width: 520px; height: 340px; margin: 0 40px" class="screen__image screen__image-ibg">
                    <img src="img/7.jpg" alt=""/>
                </div>
            </div>
        </div>
    </PageIndex>
</template>

<script setup>
import PageIndex from '@/views/PageIndex.vue';

const pagePrev = 'page-1';
const pageNext = 'page-3';
</script>
