<template>
  <div
    class="header-ctn max-w-[800px] mx-auto pt-12 pb-6 mb-6 flex justify-between items-center border-b border-gray-100"
  >
    <div>
      <h1 class="text-3xl font-bold">Vue School Blog</h1>
      <p class="max-w-[500px] mx-auto">
        Your one-stop site for all things Vue.
      </p>
    </div>
    <slot></slot>
  </div>
</template>

<script setup lang="ts"></script>
