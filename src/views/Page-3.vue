<template>
	<main class="page">
		<div class="screen">
			<Background />
			<div class="screen__container">
				<Logo />
				<div class="screen__body">
					<Doves />
					<div class="screen__content">
						<div class="screen__images">
							<div style="width: 800px; height: 570px" class="screen__image screen__image-ibg">
								<img src="img/8.jpg" alt="" />
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
					<Navigation :page-next="pageNext" :page-prev="pagePrev" />
				</div>
			</div>
		</div>
	</main>
</template>

<script setup>
import Navigation from '@/components/Navigation';
import Background from '@/components/Background';
import Logo from '@/components/Logo';
import Doves from '@/components/Doves';
import { onMounted } from 'vue';
import store from '@/store/index';

const pagePrev = 'page-2';
const pageNext = 'page-4';

onMounted(() => {
	store.dispatch('animate');
});
</script>
