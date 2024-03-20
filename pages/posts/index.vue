<template>
  <div class="h-screen">
    <AppHeader>
      <div>
        <label for="sort" class="flex items-center gap-1">
          <input
            type="checkbox"
            name="sort"
            id="sort"
            false-value="newestFirst"
            true-value="oldestFirst"
            v-model="query.order"
          />
          Newest to Oldest
        </label>
      </div>
    </AppHeader>
    <div class="posts-ctn grid grid-cols-2 gap-4 max-w-[800px] mx-auto pb-6">
      <PostCard v-for="post in posts" :key="post?.id" :post="post" />
    </div>
    <Loader class="my-12 mx-auto" v-show="isLoading" />
  </div>
</template>

<script setup lang="ts">
import type { PostWithUser } from "@/types/index"
const route = useRoute()
const router = useRouter()

const query = reactive<PostWithUser>({
  limit: 10,
  offset: 0,
  order: route?.query?.sort || "oldestFirst",
  include: "user",
  select: "id,title,excerpt,publishedAt,image",
})

watch(query, () => {
  router.push(`/posts?sort=${query.order}`)
})

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
