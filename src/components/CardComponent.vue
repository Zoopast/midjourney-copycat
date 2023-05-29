<script setup lang="ts">
  import { ref } from "vue";
  import ImageInfo from "@/components/Card/ImageInfoComponent.vue";

  defineProps({
    imageSrc: {
      type: String,
      required: true,
    }
  });

  const isHovered = ref(false);
</script>

<template>
  <div class="w-72 relative" @mouseover="isHovered = true" @mouseleave="isHovered = false">
    <img :src="imageSrc" class="w-full h-full object-cover rounded-lg shadow-md" />
    <ImageInfo v-if="isHovered" v-bind="$props" />
  </div>
</template>
<style>
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