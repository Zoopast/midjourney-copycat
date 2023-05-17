<script setup lang='ts'>
  import Card from "@/components/CardComponent.vue";
  import { ref } from "vue";

  const images = ref([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10
  ]);
</script>

<template>
  <div class="flex flex-col w-full grow p-4 origin-top-left max-sm:overflow-hidden !pt-0 xs:.p-8 md:p-8 lg:.p-16 md:pb-16 transition-transform ease-out 2xl:p-12 minFull:p-0 .duration-100">
    <div class="false flex-col">
      <div class="flex relative flex-col grow pt-5 max-w-7xl mx-auto w-full">
        <div class="flex flex-col mb-6 w-full">
          <div class="flex flex-wrap gap-4 justify-between items-center w-full">
            <h1 class="flex items-center h-16 text-4xl font-medium text-white">
              Community Showcase
            </h1>
            <div class="flex flex-row grow gap-1 justify-end justify-self-end items-center w-auto">
              <div class="flex gap-2">
                <a
                  title="Sort by Recent"
                  class="hover:bg-uiBlue-600/80 active:bg-slate-800 active:ring-uiBlue-600 items-center py-2 text-base font-medium bg-opacity-80 focus:outline-none active:ring-2 shadow-sm capitalize rounded-full !px-4 min-w-max w-auto flex gap-1 !justify-between text-right text-slate-400 hover:!bg-slate-800/75 "
                  href="#"
                >
									<img
										src="../../assets/RecentIcon.svg"
										alt="star-icon"
									/>
                  Recent
                </a>
                <a
                  title="Sort by Top"
                  class="hover:bg-uiBlue-600/80 active:bg-slate-800 active:ring-uiBlue-600 items-center py-2 text-base font-medium bg-opacity-80 focus:outline-none active:ring-2 shadow-sm capitalize rounded-full !px-4 min-w-max w-auto flex gap-1 !justify-between text-right text-slate-100 bg-slate-800 hover:!bg-slate-800 "
                  href="#"
                >
									<img
										src="../../assets/StarIcon.svg"
										class="fill-orange-500"
										alt="star-icon"
									/>
                  Top
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="relative grid grid-cols-1 gap-32 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 3xl:grid-cols-5 4xl:grid-cols-6">
        <Card
          v-for="image in images"
          :key="image"
          :image-src="`https://picsum.photos/seed/${image}/300/500`"
          image-tag="/upscale"
          image-date="9 months ago"
          image-prompt="portrait photo of an Asia old warrior chief, tribal panther make up, blue on red, side profile, looking away, serious"
          image-author="Gabriel San Martin"
        />
      </div>
    </div>
  </div>
</template>