<script setup lang="ts">
const isNavOpen = ref(false)
const menuItems = [
  {
    title: 'Courses',
    dropdown: true,
  },
  {
    title: 'Plans',
    dropdown: false,
  },
  {
    title: 'Business Service',
    dropdown: true,
  },
  {
    title: 'Learning Paths',
    dropdown: false,
  },
  {
    title: 'Hiring',
    dropdown: false,
  },
  {
    title: 'Articles',
    dropdown: false,
  },
  {
    title: 'Events',
    dropdown: true,
  },
  {
    title: 'Get Certified',
    dropdown: false,
  },
]
</script>

<template>
  <header class="flex items-center justify-between px-12 py-5">
      <button @click="isNavOpen = !isNavOpen" type="button" class="sm:relative lg:hidden text-5xl mr-4 block text-grey hover:text-white cursor-pointer focus:text-white">
        <svg v-if="!isNavOpen" class="h-8 w-8 text-pink-500"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
        </svg>
        <svg v-if="isNavOpen" class="h-8 w-8 text-blue-500"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z"/>
          <line x1="18" y1="6" x2="6" y2="18" />  <line x1="6" y1="6" x2="18" y2="18" />
        </svg>

      </button>
      <a href="#" class="logo">
        <img src="@/assets/images/logo.svg" alt="Logo" />
      </a>

    <div :class="isNavOpen ? 'sm:block' : 'sm:hidden'" class="nav-mobile lg:block lg:top-0 lg:relative sm:absolute transition-opacity sm:top-24 sm:left-0 sm:w-full sm:max-w-full lg:w-auto sm:px-8 lg:px-0 sm:py-20 lg:py-0 lg:text-lg sm:text-4xl">
      <nav class="sm:mb-10 lg:mb-0">
        <ul class="flex items-center gap-5 font-rubik sm:flex-col lg:flex-row sm:gap-7">
          <li v-for="item in menuItems" class="flex items-center gap-1 text-lightWhite">
            <a href="#">{{item.title}}</a>
            <img src="@/assets/images/dropdown-open-arrow.svg" alt="open" v-if="item.dropdown">
          </li>
        </ul>
      </nav>
      <div class="md:hidden flex justify-center items-center">
        <a href="#" class="text-white mr-[30px] font-normal font-rubik text-base leading-4.5 ">Log in</a>
        <a href="#" class="sign-in text-green border-2 border-transparent rounded-[10px] font-medium font-rubik text-base leading-4.5 py-5 px-10">Sign up</a>
      </div>
    </div>


    <div class="sm:hidden md:block">
          <a href="#" class="text-white mr-[30px] font-normal font-rubik text-base leading-4.5 ">Log in</a>
          <a href="#" class="sign-in text-green border-2 border-transparent rounded-[10px] font-medium font-rubik text-base leading-4.5 py-5 px-10">Sign up</a>
    </div>



  </header>
</template>

<style scoped lang="scss">
.sign-in{
  border: solid 2px transparent;
  background-image: linear-gradient(#212435, #212435), linear-gradient(95.39deg, #0BD88F 0%, #00C2FF 100%);
  background-origin: border-box;
  background-clip: padding-box, border-box;
}
</style>