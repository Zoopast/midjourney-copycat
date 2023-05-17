<script setup lang="ts">
	import { ref } from "vue";
  defineProps({
    imageSrc: {
      type: String,
      required: true,
    },
    imageTag: {
      type: String,
      default: "",
    },
    imagePrompt: {
      type: String,
      default: "",
    },
    imageAuthor: {
      type: String,
      default: "",
    },
    imageDate: {
      type: String,
      default: "",
    },
  });

  const isHovered = ref(false);
</script>

<template>
  <div class="w-72 relative" @mouseover="isHovered = true" @mouseleave="isHovered = false">
    <img :src="imageSrc" class="w-full h-full object-cover rounded-lg shadow-md" />
    <div
      class="absolute -bottom-16 left-1/2 right-1/2 -translate-x-1/2 -translate-y-1/2 h-1/3 w-11/12 card-info flex justify-center items-center rounded-lg shadow-md text-gray-400"
      :class="{ 'opacity-100': isHovered, 'opacity-0': !isHovered }"
    >
      <div class="absolute top-2 left-4 text-orange-500">
        <span>{{ imageTag }}</span>
      </div>
      <div class="absolute top-2 right-4">
        <span>{{ imageDate }}</span>
      </div>
      <div class="absolute top-10 left-4 text-gray-400 text-sm">
        <span>{{ imagePrompt }}</span>
      </div>
      <div class="flex flex-row gap-2 items-center absolute bottom-1 left-4 text-gray-400">
        <img
          src="https://assets.stickpng.com/images/585e4bf3cb11b227491c339a.png"
          class="w-8 h-8 rounded-full"
        />
        <span class="font-bold">{{ imageAuthor }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .card-info {
    --tw-bg-opacity: 1;
    background-color: rgb(8 11 22 / var(--tw-bg-opacity));
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  .card-info.opacity-100 {
    opacity: 1;
  }
</style>
