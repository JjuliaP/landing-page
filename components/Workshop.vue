<script setup lang="ts">

</script>

<template>
<section class="lg:max-w-[570px] md:min-w-[570px] sm:min-w-[343px]">
  <section class="py-6 lg:px-9 sm:px-4 background flex flex-row rounded-t-[30px]">
    <img src="@/assets/images/calendar.svg" alt="calendar">
    <p class="font-rubik text-base font-medium leading-tight text-left text-lightWhite ml-3">December 14th - 11:00 AM (GMT-3)</p>
  </section>

  <section class="bg-greyOpacity90 p-9 rounded-b-[30px]" >
    <section class="flex flex-row mb-5 items-center">
      <img src="@/assets/images/play-icon.svg" alt="play">
      <span class="font-rubik text-sm font-normal leading-4 text-left text-lightGrey ml-4 mr-9">LIVE Training</span>

      <img src="@/assets/images/clock-grey.svg" alt="clock">
      <span class="font-rubik text-sm font-normal leading-4 text-left text-lightGrey ml-4">15 Hours</span>
    </section>

    <section class="flex flex-col">
      <h3 class="mb-3 text-lightWhite desktopH3">Vue.js Fundamentals</h3>
      <p class="desktopP3 text-lightGrey mb-7">A progressive framework for building user interfaces. Unlike other monolithic frameworks, Vue is designed from the ground up to be incrementally...</p>
      <section class="flex flex-row">
        <img src="@/assets/images/user-icon.svg" alt="user avatar">
        <span class="font-rubik text-sm font-normal leading-5 text-left text-lightGrey ml-4">Steve Popoola</span>
      </section>
    </section>
  </section>

</section>
</template>

<style scoped lang="scss">
.background{
  background: linear-gradient(90deg, rgba(79, 8, 230, 0.5) 0%, rgba(255, 73, 117, 0.5) 96.56%);
}
</style>