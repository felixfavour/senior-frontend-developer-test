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
    <div
      class="posts-ctn grid px-2 grid-cols-1 gap-4 max-w-[800px] mx-auto pb-18 sm:grid-cols-2 sm:px-0"
    >
      <PostCard
        v-for="(post, index) in posts"
        :key="post?.id"
        :post="post"
        :lazy-load-image="index > 5"
      />
    </div>
    <div v-show="isLoading" class="py-12">
      <Loader class="mx-auto" />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { PostWithUser } from "~/types/index"

const route = useRoute()
const router = useRouter()

useHead({
  title: "Blog - Vue School",
  meta: [
    {
      name: "description",
      content:
        "Your one-stop site for all things Vue. Tutorials, tips and tricks and more.",
    },
    {
      hid: "og:description",
      property: "og:description",
      content:
        "Your one-stop site for all things Vue. Tutorials, tips and tricks and more.",
    },
    {
      hid: "og:title",
      property: "og:title",
      content: "Blog - Vue School",
    },
    {
      hid: "twitter:title",
      name: "twitter:title",
      content: "Blog - Vue School",
    },
    {
      hid: "twitter:description",
      name: "twitter:description",
      content:
        "Your one-stop site for all things Vue. Tutorials, tips and tricks and more.",
    },
  ],
})

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

const { data: posts, pending: isLoading } = await useAsyncData<PostWithUser>(
  "multiple-posts",
  () => $fetch("/api/posts", { query }),
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
      if (!isLoading.value) {
        query.limit += 10
      }
    }
  })
})
</script>
