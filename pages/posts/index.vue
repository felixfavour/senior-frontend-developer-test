<template>
  <div class="h-screen">
    <div class="header-ctn text-center p-6 pt-12">
      <div class="text-sm text-slate-500">BLOG</div>
      <h1 class="text-3xl font-bold">Vue School Blog</h1>
      <p class="max-w-[500px] mx-auto">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, ipsam.
        Repudiandae, modi ab at voluptatem fuga eius. normal
      </p>
    </div>
    <div class="posts-ctn grid grid-cols-2 gap-4 max-w-[800px] mx-auto pb-6">
      <PostCard v-for="post in posts" :key="post.id" :post="post" />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { PostWithUser } from "@/types/index"

const query = reactive<PostWithUser>({
  limit: 20,
  offset: 40,
  order: "oldestFirst",
  include: "user",
  select: "id,title,excerpt,publishedAt,image",
})

const { data: posts } = await useAsyncData(
  "posts",
  () =>
    $fetch("/api/posts", {
      query,
    }),
  {
    watch: [query],
  }
)
</script>
