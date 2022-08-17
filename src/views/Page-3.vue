<template>
    <PageIndex :page-next="pageNext" :page-prev="pagePrev">
        <div class="screen__content">
            <div class="screen__images">
                <div style="width: 800px; height: 570px" class="screen__image screen__image-ibg">
                    <img src="img/8.jpg" alt=""/>
                </div>
                <div class="screen__info screen__info_right">
                    <p class="screen__text">Достоинства:</p>
                    <ul class="screen__text">
                        <li>декоративный внешний вид;</li>
                        <li>высокая скорость полёта;</li>
                        <li>средняя дальность полёта (без остановки) около 1 000 км;</li>
                        <li>лёгкая обучаемость.</li>
                    </ul>
                    <p class="screen__text">Недостатки:</p>
                    <ul class="screen__text">
                        <li>относительная молодость породы;</li>
                        <li>требовательность к питанию;</li>
                        <li>необходимость задействовать большие площади для строительства голубятни.</li>
                    </ul>
                </div>
            </div>
        </div>
    </PageIndex>
</template>

<script setup>
import PageIndex from '@/views/PageIndex.vue';

const pagePrev = 'page-2';
const pageNext = 'page-4';
</script>
