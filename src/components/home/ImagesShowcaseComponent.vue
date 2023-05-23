<script setup lang='ts'>
  import Card from "@/components/CardComponent.vue";
  import RecentIcon from "@/assets/RecentIcon.svg";
  import TopIcon from "@/assets/StarIcon.svg";
  import images from "@/assets/images";

</script>
<template>
  <div
    class="flex flex-col grow mx-auto w-full"
  >
    <div
      class="flex flex-col"
    >
      <div>
        <div
          class="flex flex-row justify-between text-gray-300 "
        >
          <h2
            class="text-4xl font-medium"
          >
            Community Showcase
          </h2>
          <div
            class="flex flex-row gap-2"
          >
            <button
              class="flex flex-row gap-1 items-center hover:bg-blue-900/40 rounded-xl px-2 py-1 transition-all"
            >
              <inline-svg
                :src="RecentIcon"
                class="w-4 h-4"
              />
              <span>
                Recent
              </span>
            </button>
            <button
              class="flex flex-row gap-1 items-center hover:bg-blue-900/40 rounded-xl px-2 py-1 transition-all"
            >
              <inline-svg
                :src="TopIcon"
                class="w-4 h-4"
              />
              <span>
                Top
              </span>
            </button>
          </div>
        </div>
      </div>
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-10 items-center justify-center w-full gap-4 mx-auto"
      >
      <div
        v-for="(image, idx) in images"
        :key="idx"
        class="flex flex-col mx-auto"
      >
        <Card
          :imageSrc="image.src"
          :imageTag="image.tag"
          :imagePrompt="image.prompt"
          :imageAuthor="image.author"
          :imageDate="image.date"
        />
      </div>
      </div>
    </div>

  </div>
</template>