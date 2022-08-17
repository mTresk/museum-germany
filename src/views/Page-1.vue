<template>
	<main class="page">
		<div class="screen">
			<Background />
			<div class="screen__container">
				<Logo />
				<div class="screen__body">
					<Doves />
					<h2 class="screen__subtitle">Немецкий голубь</h2>
					<div class="screen__content">
						<div class="screen__images">
							<div style="width: 800px; height: 500px" class="screen__image screen__image-ibg">
								<img src="img/1.jpg" alt="" />
							</div>
							<div class="screen__info screen__info_right">
								<p class="screen__text">В начале ХХ столетия появились немецкие выставочные голуби (другое название – немецкий гомер).</p>
								<p class="screen__text">
									Голубеводы Германии приступили к выведению выставочной породы на основе немецких летных почтовых. Эти птицы — немецкий вариант английского и
									бельгийского выставочных голубей. По замыслу селекционеров немецкий выставочный должен быть не только самым красивым, но и скороспелым.
								</p>
								<p class="screen__text">
									Сегодня это действительно красивый и очень продуктивный голубь. Он производит впечатление облагороженного почтового, выведенного специально для
									выставок, сильного летуна.
								</p>
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

const pagePrev = 'home';
const pageNext = 'page-2';

onMounted(() => {
	store.dispatch('animate');
});
</script>
