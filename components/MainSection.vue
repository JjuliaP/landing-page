<script lang="ts" setup>

import {onMounted} from "vue";
import CorporateBundle from "~/components/CorporateBundle.vue";
import Workshop from "~/components/Workshop.vue";
import type {HeroData} from "~/types/heroData.type";
import {getBundleAccessList, getCoursesData, getHeroData} from "~/lib/api";
import type {CourseData} from "~/types/courseData.type";
import type {BundleAccess} from "~/types/bundleAccess.type";

let heroData = ref<HeroData[]>();
let coursesData = ref<CourseData[]>();
let bundlesList = ref<BundleAccess[]>();

onMounted(async ()=>{
  heroData.value = await getHeroData();
  coursesData.value = await getCoursesData();
  bundlesList.value = (await getBundleAccessList()).sort((a, b) => a.order - b.order);
})

</script>

<template>
  <main class="flex flex-col sm:mx-4 md:mt-12 lg:mt-0">
    <section class="flex lg:flex-row sm:flex-col md:flex-col lg:gap-14 sm:gap-12 justify-center md:max-w-[602px] lg:max-w-full md:m-auto">
      <section class="lg:gap-14 sm:gap-6 flex flex-col items-start justify-center lg:max-w-[567px]">
        <h1 class="font-rubik md:text-5xl font-bold leading-[71.1px] sm:text-4xl text-white sm:text-center sm:m-auto lg:m-0">
          {{heroData?.[0].titleFirstPart}}
          <span class="text-green">{{heroData?.[0].highlightedTitle}}</span>
          {{heroData?.[0].titleLastPart}}</h1>
        <p class="font-rubik sm:text-base lg:text-2xl font-normal leading-[30px] text-lightWhite sm:text-center lg:text-left">
          {{heroData?.[0].paragraph}}</p>
        <button class="py-5 px-10 bg-green text-dark font-rubik text-base font-medium leading-[19px] text-center rounded-[10px] sm:m-auto lg:m-0">
          {{heroData?.[0].buttonText}}
        </button>
      </section>
      <img alt="people" src="@/assets/images/header-people.svg">
    </section>

    <section class="about-vue-background flex flex-col items-center">
      <section class="flex md:flex-row md:p-10 sm:p-6 about-vue justify-center sm:flex-col sm:mb-36 md:mb-0">
        <img alt="logo" class="lg:ml-20 md:mr-16 sm:w-16 sm:mb-8 sm:m-auto" src="@/assets/images/logo-big.svg">
        <div class="flex flex-col justify-center sm:gap-8 md:gap-0">
          <h2 class="font-rubik md:text-2xl sm:text-6 sm:text-center md:text-left font-bold lg:leading-[47.4px] sm:mb-4 sm:leading-[24px] text-white lg:mb-8">About Vue School corporate training</h2>
          <p class="font-rubik text-2xl font-normal leading-7 sm:text-center sm:text-sm md:text-left text-lightWhite">School is the #1 training resource for Vue.js and has provided the most comprehensive
            Vue.js video library in the world to over 140,000 developers. Private individuals and small to enterprise
            companies have used our services to develop their skills since 2016. </p>
        </div>
      </section>
      <section class="lg:flex justify-center gap-8 mb-[180px] sm:hidden">
        <img v-for="index in 6" :key="index" alt="google" src="@/assets/images/google.svg">
      </section>


      <section class="flex lg:flex-row sm:flex-col lg:gap-3.5 justify-center sm:mb-32 lg:m-0">
        <section class="lg:mb-[200px] max-w-xl flex flex-col gap-3.5 sm:mb-8 ">
          <h3 class="font-rubik lg:text-lg font-medium leading-7 sm:text-base font-color-gradient sm:text-center lg:text-left">YOUR #1 SOURCE OF VUE.JS COURSES</h3>
          <h1 class="font-rubik text-5xl font-bold lg:leading-[71.1px] sm:leading-[47px] text-lightWhite sm:text-center lg:text-left">Full Stack <span class="font-color-gradient">Vue Training</span> Solutions</h1>
        </section>
        <section class="flex flex-row lg:gap-16 sm:gap-6 training-solutions-numbers sm:justify-center">
          <section class="flex flex-col lg:gap-2.5 sm:gap-3">
            <p class="font-color-gradient lg:text-5xl sm:text-[64px] sm:leading-[75px] font-medium lg:leading-[107px] text-center font-rubik">{{coursesData?.[0].video}}</p>
            <div class="flex flex-row gap-2.5 justify-center">
              <img alt="video" src="@/assets/images/video-icon.svg">
              <span class="font-rubik text-sm font-normal leading-[17px] text-left text-lightWhite">Video lessons</span>
            </div>
          </section>
          <section class="flex flex-col  gap-2.5">
            <p class="font-color-gradient lg:text-5xl sm:text-[64px] sm:leading-[75px] font-medium lg:leading-[107px] text-center font-rubik">{{coursesData?.[0].courses}}</p>
            <div class="flex flex-row gap-2.5 justify-center">
              <img alt="book" src="@/assets/images/book-icon.svg">
              <span class="font-rubik text-sm font-normal leading-[17px] text-left text-lightWhite">Courses</span>
            </div>
          </section>
          <section class="flex flex-col gap-2.5">
            <p class="font-color-gradient lg:text-5xl sm:text-[64px] sm:leading-[75px] font-medium lg:leading-[107px] text-center font-rubik">{{coursesData?.[0].hours}}</p>
            <div class="flex flex-row gap-2.5 justify-center">
              <img alt="clock" src="@/assets/images/clock-icon.svg">
              <span class="font-rubik text-sm font-normal leading-[17px] text-left text-lightWhite">15 Hours</span>
            </div>
          </section>
        </section>
      </section>
    </section>

    <section class="flex flex-col items-center background lg:mb-40 sm:mb-32">
      <h1 class="text-center font-rubik md:text-5xl font-bold sm:leading-[47px] md:leading-[71.1px] sm:text-10 lg:max-w-[752px] text-lightWhite lg:mb-[120px] sm:mb-14">Discounted <span class="font-color-gradient">Corporate Training</span>  Bundles</h1>
      <section class="flex lg:flex-row sm:flex-col justify-center lg:gap-10 sm:gap-6">
        <CorporateBundle
            v-for="(bundle, index) in bundlesList"
            :key="index"
            :data = bundle
        ></CorporateBundle>
      </section>
    </section>

    <section class="lg:m-auto lg:mb-52 sm:mb-24">
      <section class="flex flex-row md:justify-center lg:justify-between lg:max-w-[1170px] lg:mx-auto mb-20">
        <h1 class="font-rubik md:text-5xl sm:text-[40px] font-bold lg:leading-[71.1px] sm:leading-[47.1px] text-white sm:text-center lg:text-left">Available Workshops</h1>
        <button class="text-dark bg-green py-5 px-10 font-rubik text-base font-medium leading-tight text-center rounded-xl sm:hidden lg:block">See all the workshops</button>
      </section>
      <section class="flex flex-row gap-8 sm:mb-10 lg:mb-0 overflow-x-scroll sm:relative">
        <Workshop></Workshop>
        <Workshop></Workshop>
        <Workshop></Workshop>
      </section>
      <button class="flex text-dark bg-green py-5 px-10 font-rubik text-base font-medium leading-tight text-center rounded-xl lg:hidden sm:mx-auto">See all the workshops</button>
    </section>
  </main>

  <footer class="flex lg:flex-row sm:flex-col justify-center pb-[131px] sm:px-4">
    <section class="flex flex-col lg:max-w-[470px] lg:m-0 lg:mr-[130px] sm:m-auto sm:mb-12">
      <img src="@/assets/images/logo.svg" alt="logo" class="w-[268px] mb-[85px] sm:mx-auto lg:mx-0">
      <p class="desktopP2 text-white mb-[61px] sm:text-center lg:text-left">Thanks to fine people like you, Vue School can proudly sponsor Evan and the future of Vue.js by being a Platinum Patreon</p>
      <h4 class="text-lightGrey desktopH4 mb-[37px] sm:text-center lg:text-left">FOLLOW US IN SOCIAL MEDIA</h4>
      <div class="flex flex-row lg:gap-11 sm:gap-3 sm:justify-center lg:justify-normal">
        <img src="@/assets/images/facebook.svg" alt="facebook">
        <img src="@/assets/images/twitter.svg" alt="twitter">
        <img src="@/assets/images/github.svg" alt="github">
        <img src="@/assets/images/linkedin.svg" alt="linkedin">
        <img src="@/assets/images/youtube.svg" alt="youtube">
      </div>
    </section>
    <section class="grid md:grid-cols-[210px_210px_210px] lg:grid-cols-[210px_210px] sm:grid-cols-[210px] lg:mr-[30px] sm:text-center lg:text-left sm:mb-8 sm:mx-auto lg:mx-0 lg:mb-0">
      <div class="mb-[50px] flex flex-col gap-3.5">
        <h4 class="text-lightGrey desktopH4">PRODUCTS</h4>
        <p class="desktopP2 text-white">Courses</p>
        <p class="desktopP2 text-white">Workshops</p>
        <p class="desktopP2 text-white">Vue Masterclass</p>
        <p class="desktopP2 text-white">Mastering Nuxt</p>
      </div>
      <div class="mb-[50px] flex-col flex gap-3.5">
        <h4 class="text-lightGrey desktopH4">PRICING</h4>
        <p class="desktopP2 text-white">Plans</p>
      </div>
      <div class="flex gap-3.5 flex-col ">
        <h4 class="text-lightGrey desktopH4">CONNECT WITH US</h4>
        <p class="desktopP2 text-white">About Us</p>
        <p class="desktopP2 text-white">Careers</p>
        <p class="desktopP2 text-white">Contact Us</p>
      </div>
      <div class="mb-[50px] flex flex-col gap-3.5">
        <h4 class="text-lightGrey desktopH4">EVENTS</h4>
        <p class="desktopP2 text-white">Vue.js Nation</p>
        <p class="desktopP2 text-white">Nuxt Nation</p>
        <p class="desktopP2 text-white">Vue.js Forge</p>
      </div>
      <div class="mb-[50px] flex-col flex gap-3.5">
        <h4 class="text-lightGrey desktopH4">CORPORATE</h4>
        <p class="desktopP2 text-white">Corporate Training</p>
        <p class="desktopP2 text-white">Developer Recruitment</p>
        <p class="desktopP2 text-white">Course Development</p>
        <p class="desktopP2 text-white">On-site Workshops</p>
        <p class="desktopP2 text-white">Consulting</p>
        <p class="desktopP2 text-white">Affiliate Programs</p>
      </div>
      <div class="flex gap-3.5 flex-col ">
        <h4 class="text-lightGrey desktopH4">RESOURCES</h4>
        <p class="desktopP2 text-white">Articles</p>
      </div>
    </section>
  </footer>
</template>

<style scoped lang="scss">
.about-vue-background {
  background-image: url("@/assets/images/background-wave-1.svg"), url("@/assets/images/background-wave-2.svg");
  background-repeat: no-repeat, no-repeat;
  background-size: cover, cover;
}

.background {
  background-image: url("@/assets/images/background-wave-4.svg"), url("@/assets/images/background-wave-3.svg");
  background-repeat: no-repeat, no-repeat;
  background-size: cover, cover;
  background-position-y: 100px, 440px;
  border: 1px solid;
  border-image-source: linear-gradient(180deg, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0) 80.72%);
}

.about-vue {
  max-width: 1170px;
  margin-bottom: 64px;
  margin-top: 53px;
  border-radius: 30px;
  border: 1px;
  background: #2B2F44E5;
  border-image-source: linear-gradient(180deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 100%);
}
</style>