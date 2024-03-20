<template>
  <div ref="pageEl" class="h-screen">
    <div
      class="header-ctn max-w-[800px] mx-auto pt-12 pb-8 flex justify-between items-center"
    >
      <div>
        <h1 class="text-3xl font-bold">Vue School Blog</h1>
        <p class="max-w-[500px] mx-auto">
          Your one-stop site for all things Vue.
        </p>
      </div>
      <div>
        <label for="sort" class="flex items-center gap-1">
          <input
            type="checkbox"
            name="sort"
            id="sort"
            true-value="newestFirst"
            false-value="oldestFirst"
            v-model="query.order"
          />
          Newest to Oldest
        </label>
      </div>
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
  limit: 10,
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
