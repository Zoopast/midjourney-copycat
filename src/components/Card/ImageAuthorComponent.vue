<script setup lang="ts">
  import AvatarIcon from "@/assets/AvatarIcon.svg";

  defineProps({
    imageAuthor: {
      type: String,
      default: "",
    }
  });
</script>

<template>
  <div class="flex flex-row gap-2 items-center absolute bottom-1 left-4 text-gray-400">
    <inline-svg 
      :src="AvatarIcon"
      class="w-8 h-8 rounded-full"
    />
    <span class="font-bold">{{ imageAuthor }}</span>
  </div>
</template>