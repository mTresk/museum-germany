<template>
  <main class="page">
    <div class="screen">
      <Background/>
      <div class="screen__container">
        <Logo/>
        <div class="screen__body">
          <Doves/>
          <h2 class="screen__subtitle">Выставочная порода</h2>
          <div class="screen__content">
            <p class="screen__text">Один из главных признаков породы – праздничный внешний вид.</p>
            <p class="screen__text">Птица должна выглядеть как сильный летун.</p>
            <p class="screen__text">
              Выставки обычно проводятся зимой или в начале марта, после племенного периода, чтобы не навредить будущему потомству. Учитывают и период линьки.
              В это время птиц подкармливают добавками, которые увеличивают интенсивность цвета перьев и блеск. Например, голубям с жёлтым окрасом, добавляют
              в корм кукурузу. Для того, чтобы выглядеть красиво, птица должна перелинять полностью.
            </p>
            <p class="screen__text">Основные породные признаки:</p>
            <ul class="screen__text">
              <li>горизонтальная стойка;</li>
              <li>тонкий прямой профиль;</li>
              <li>широкое расстояние между глазами;</li>
              <li>пропорциональное, выраженное телосложение;</li>
              <li>гладкое оперение, плотно прилегающее к туловищу.</li>
            </ul>
            <p class="screen__text">
              У сизых и чёрных голубей клюв тёмного цвета, а у цветастых и светлых – рогового. Окрас должен быть чётким и равномерным, пояса - узкими,
              интенсивно окрашенными. Основной цвет должен покрывать всё тело голубя.
            </p>
          </div>
          <Navigation :page-next="pageNext" :page-prev="pagePrev"/>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import {mapActions} from 'vuex'
import Navigation from "@/components/Navigation";
import Doves from "@/components/Doves";
import Logo from "@/components/Logo";
import Background from "@/components/Background";

export default {
  name: "Page-7",
  data() {
    return {
      pagePrev: 'page-6',
      pageNext: 'home',
    }
  },
  components: {
    Doves,
    Logo,
    Background,
    Navigation
  },
  mounted() {
    this.animate()
  },
  methods: {
    ...mapActions([
      'animate'
    ]),
  }
}
</script>