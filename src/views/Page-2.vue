<template>
  <main class="page">
    <div class="screen">
      <Background/>
      <div class="screen__container">
        <Logo/>
        <div class="screen__body">
          <Doves/>
          <div class="screen__content">
            <div class="screen__images">
              <div style="width: 520px; height: 340px; margin: 0 40px" class="screen__image screen__image-ibg">
                <img src="/img/2.jpg" alt="" />
              </div>
              <div style="width: 520px; height: 340px; margin: 0 40px" class="screen__image screen__image-ibg">
                <img src="/img/3.jpg" alt="" />
              </div>
              <div style="width: 520px; height: 340px; margin: 0 40px" class="screen__image screen__image-ibg">
                <img src="/img/4.jpg" alt="" />
              </div>
            </div>
            <div class="screen__images">
              <div style="width: 520px; height: 340px; margin: 0 40px" class="screen__image screen__image-ibg">
                <img src="/img/5.jpg" alt="" />
              </div>
              <div style="width: 520px; height: 340px; margin: 0 40px" class="screen__image screen__image-ibg">
                <img src="/img/6.jpg" alt="" />
              </div>
              <div style="width: 520px; height: 340px; margin: 0 40px" class="screen__image screen__image-ibg">
                <img src="/img/7.jpg" alt="" />
              </div>
            </div>
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
import Background from "@/components/Background";
import Logo from "@/components/Logo";
import Doves from "@/components/Doves";

export default {
  name: "Page-2",
  data() {
    return {
      pagePrev: 'page-1',
      pageNext: 'page-3',
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