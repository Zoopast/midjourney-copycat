<script setup lang="ts">
  import SideBar from "@/components/SideBarComponent.vue";
  import ImagesShowcase from "@/components/home/ImagesShowcaseComponent.vue";
</script>

<template>
  <main
    class="flex min-h-screen w-full select-text justify-center text-gray-700 antialiased"
  >
    <SideBar />
    <ImagesShowcase />
  </main>
</template>
