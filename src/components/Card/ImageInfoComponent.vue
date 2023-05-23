<script setup lang="ts">
  import ImageAuthor from "@/components/Card/ImageAuthorComponent.vue";

  defineProps({
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
</script>

<template>
  <div
    class="absolute -bottom-16 left-1/2 right-1/2 -translate-x-1/2 -translate-y-1/2 h-1/3 w-11/12 card-info flex justify-center items-center rounded-lg shadow-md text-gray-400"
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
    <ImageAuthor :imageAuthor="imageAuthor" />
  </div>
</template>