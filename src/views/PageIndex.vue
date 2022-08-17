<template>
	<main class="page">
		<div class="screen">
			<Background />
			<div class="screen__container">
				<Logo />
				<div class="screen__body">
					<Doves />
					<slot />
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
import { animate } from '@/functions/animate';

const props = defineProps({
	pageNext: String,
	pagePrev: String,
});

onMounted(() => {
	animate();
});
</script>
