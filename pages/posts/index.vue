<template>
  <div ref="pageEl" class="h-screen">
    <div class="header-ctn text-center p-6 pt-12">
      <div class="text-sm text-slate-500">BLOG</div>
      <h1 class="text-3xl font-bold">Vue School Blog</h1>
      <p class="max-w-[500px] mx-auto">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, ipsam.
        Repudiandae, modi ab at voluptatem fuga eius. normal
      </p>
    </div>
    <div class="posts-ctn grid grid-cols-2 gap-4 max-w-[800px] mx-auto pb-6">
      <PostCard v-for="post in posts" :key="post?.id" :post="post" />
    </div>
    <Loader class="my-12 mx-auto" v-show="isLoading" />
  </div>
</template>

<script setup lang="ts">
import type { PostWithUser } from "@/types/index"

const query = reactive<PostWithUser>({
  limit: 20,
  offset: 0,
  order: "oldestFirst",
  include: "user",
  select: "id,title,excerpt,publishedAt,image",
})

const pageEl = ref<HTMLElement>(null)

const { data: posts, pending: isLoading } = await useAsyncData(
  "multiple-posts",
  () =>
    $fetch("/api/posts", {
      query,
    }),
  {
    watch: [query],
  }
)

onMounted(() => {
  addEventListener("scroll", () => {
    const element = window.document.documentElement
    // Check if user has reached bottom
    if (
      Math.abs(
        element.scrollHeight - element.scrollTop - element.clientHeight
      ) < 1
    ) {
      query.limit += 10
    }
  })
})
</script>
