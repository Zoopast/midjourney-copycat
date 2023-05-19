<script setup lang='ts'>
	import { ref } from 'vue'
	import ExpandIcon from '@/assets/ExpandIcon.svg'
	import CommunityIcon from '@/assets/CommunityIcon.svg'
	import AboutIcon from '@/assets/AboutIcon.svg'
	import HelpIcon from '@/assets/HelpIcon.svg'
	import AvatarIcon from '@/assets/AvatarIcon.svg'
	import DisplayMenuIcon from '@/assets/DisplayMenu.svg'
	const commonSvgClass = 'w-6 h-6 stroke-blue-500'
	const showText = ref(false)

	const topMenuItems = [
		{ text: 'Community showcase', icon: CommunityIcon },
	]

	const middleMenuItems = [
		{ text: 'Help & FAQ', icon: HelpIcon },
		{ text: 'About & Careers', icon: AboutIcon },
	]

	const bottomMenuItems = [
		{ text: 'Sign in', icon: AvatarIcon },
	]
</script>

<template>
	<div>
		<button
			class="fixed flex items-center justify-center max-w-[10px] h-10 transition-all rounded-full md:hidden lg:w-1/2 hover:bg-blue-950/40"
			@click="showText = !showText"
		>
			<inline-svg :src="DisplayMenuIcon" class="w-6 h-6 fill-blue-500" />
		</button>
	</div>
	<div
		class="fixed m-2 w-20 hover:w-2/5 lg:hover:w-1/5 lg:w-1/5 rounded-lg hidden z-10 bg-gradient-to-br from-[#0e1222] to-[#1a1e2d] lg:bg-transparent md:flex flex-col items-start lg:items-center justify-between h-screen p-4 text-gray-300 bg-[rgb(8 11 22)] lg:bg-transparent overflow-x-hidden transition-all duration-200 ease-in-out hover:text-white"
		@mouseover="showText = true"
		@mouseleave="showText = false"
	>
		<div class="flex flex-col items-center w-full border-b border-blue-950">
			<div class="flex flex-row items-center justify-between w-full px-4 mb-6">
				<h1
					:class="showText ? 'hidden' : 'flex'"
					class="text-xl lg:hidden">
					<a href="/">MJ</a>
				</h1>
				<h1
					:class="showText ? 'flex' : 'hidden'"
					class="text-xl lg:flex">
					<a href="/">Midjourney</a>
				</h1>
				<button
					v-if="showText"
					class="hidden p-2 transition-all rounded-full lg:flex bg-blue-700/20 hover:bg-blue-700/40">
					<inline-svg :src="ExpandIcon" class="w-4 h-4 fill-blue-500" />
				</button>
			</div>

			<button v-for="{ text, icon } in topMenuItems" :key="text" class="flex flex-row items-center w-full gap-2 px-4 py-2 mb-2 rounded-lg text-md hover:bg-blue-900/40">
				<inline-svg :src="icon" :class="commonSvgClass" />
				<span
					:class="showText ? 'flex' : 'hidden lg:flex'"
				>
					{{ text }}
				</span>
			</button>
		</div>
		<div
			class="flex flex-col items-center w-full"
		>
			<button v-for="{ text, icon } in middleMenuItems"
				:key="text"
				class="flex flex-row items-center w-full gap-2 px-4 py-2 mb-2 rounded-lg text-md hover:bg-blue-900/40"
			>
				<inline-svg :src="icon" :class="commonSvgClass" />
				<span
					:class="showText ? 'flex' : 'hidden lg:flex'"
				>{{ text }}</span>
			</button>
		</div>
		<div class="flex flex-col items-center w-full">
			<button v-for="{ text, icon } in bottomMenuItems"
				:key="text"
				class="flex flex-row items-center w-full gap-2 px-4 py-2 mb-2 rounded-lg text-md hover:bg-blue-900/40"
			>
				<inline-svg :src="icon" :class="commonSvgClass" />
				<span
					:class="showText ? 'flex' : 'hidden lg:flex'"
				>{{ text }}</span>
			</button>
		</div>
	</div>
</template>