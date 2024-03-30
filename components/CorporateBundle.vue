<script setup lang="ts">
defineProps<{
  title: string,
  titleIcon:string,
  checkboxList: {
    icon: 'check'| 'cross',
    text: string,
    class?: string,
  }[],
  showMasterclass?: boolean
}>();

const rangeValue = ref(12);

function addColor(event: any): void{
  const value = (event.target.value-event.target.min)/(event.target.max-event.target.min)*100;
  event.target.style.background = 'linear-gradient(to right, #0BD88F 0%, #0BD88F ' + value + '%, #737B98 ' + value + '%, #737B98 100%)'
}
</script>

<template>
<section class="flex flex-col bundle-container bg-greyOpacity90 px-6 py-10 lg:min-w-[370px] md:min-w-[640px] rounded-[30px] h-fit">
  <div class="flex flex-row gap-4 mb-10">
    <img :src=titleIcon alt="icon">
    <h5 class="text-lg font-semibold leading-7 text-left font-rubik text-lightWhite">{{title}}</h5>
  </div>
  <div class="checkboxes-container">
    <p class="desktopP2 mb-6 text-green">Includes 1 year access to:</p>

    <div class="gap-4 flex flex-col">
      <div class="flex flex-row gap-4"
           v-for="(checkbox, index) in checkboxList"
           :key="index"
           :class="{'opacity-20': checkbox.icon === 'cross'}">
        <img src="@/assets/images/check.svg" alt="check" v-if="checkbox.icon === 'check'">
        <img src="@/assets/images/cross.svg" alt="cross" v-if="checkbox.icon === 'cross'">
        <p class="desktopP3 w-full text-lightWhite" :class="checkbox?.class">{{ checkbox.text }}</p>
        <img src="@/assets/images/info.svg" alt="info" v-if="checkbox.icon === 'check'">
      </div>
    </div>
  </div>

  <div v-if="showMasterclass" class="flex mt-6 rounded-lg bg-greenOpacity20 py-4 px-6">
    <img src="@/assets/images/masterclass.svg" alt="masterclass" class="mr-4">
    <div class="flex flex-col">
      <span class="text-darkGrey font-rubik font-medium text-sm leading-6">Enough time to watch:</span>
      <span class="text-white font-rubik font-medium text-base leading-6">The Vue 3 Masterclass</span>
    </div>
  </div>

  <div class="flex flex-col rounded-2xl p-6 mt-6 bg-dark">
    <div class="flex flex-row items-center gap-2.5 mb-10">
      <span class="font-circular font-bold text-white text-2xl leading-10">$50</span>
      <span class="text-grey">/ seat / month</span>
    </div>

    <span class="text-white text-base font-bold leading-tight text-left font-rubik">How many licenses do you need?</span>

    <div class="mx-auto mt-8 w-64">
      <input @input="addColor($event)" v-model="rangeValue" type="range" min="5" max="20" class="
      w-full
      h-2
      accent-green
      rounded-full
      ">
      <div class="mt-2 flex justify-between">
        <span class="text-sm text-lightGrey">5</span>
        <span class="text-sm text-lightGrey">20</span>
      </div>
    </div>

    <div class="flex flex-row items-center">
      <div class="flex flex-row gap-2.5 items-center mr-7 bg-veryDark py-1 px-3.5 rounded-lg">
        <img src="@/assets/images/people.svg" alt="people">
        <span class="font-rubik text-2xl font-bold leading-tight text-center text-whisper">{{ rangeValue }}</span>
        <span class="text-darkGrey font-rubik text-base font-normal leading-tight text-left">seats</span>
      </div>

      <span class="font-rubik text-base font-medium leading-tight text-left text-green">26% discount</span>
    </div>
  </div>

  <button class="w-full mt-10 mb-6 p-5 rounded-2xl font-rubik text-base font-medium leading-tight text-center text-dark bg-green">Start Learning</button>
  <button class="text-green font-rubik text-base font-medium leading-tight text-center">Refer your manager</button>

</section>
</template>

<style scoped lang="scss">
.bundle-container{
  border: 1px solid;
  border-image-source: linear-gradient(180deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 100%);
}

input{
  background: linear-gradient(to right, #0BD88F 0%, #0BD88F 48%, #737B98 48%, #737B98 100%);
  outline: none;
  transition: background 450ms ease-in;
  -webkit-appearance: none;
}
</style>