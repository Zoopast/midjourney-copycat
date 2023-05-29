<script setup lang="ts">
  import SideBar from "@/components/SideBarComponent.vue";
  import ImagesShowcase from "@/components/home/ImagesShowcaseComponent.vue";
</script>

<template>
  <main
    class="grid grid-flow-row-dense grid-cols-8"
  >
    <div
      class="col-span-1 lg:col-span-2"
    >
      <SideBar />
    </div>
    <div
      class="col-span-7 lg:col-span-6"
    >
      <ImagesShowcase />
    </div>
  </main>
</template>
