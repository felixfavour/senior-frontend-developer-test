<template>
  <div class="h-screen">
    <AppHeader>
      <nuxt-link to="/posts" class="border rounded-md border-gray-200 p-2 px-4">
        Go Back to Posts
      </nuxt-link>
    </AppHeader>
    <div v-if="post" class="max-w-[600px] mx-auto py-12 px-2 sm:px-0">
      <div class="author flex items-center gap-3">
        <NuxtImg
          :src="post?.user?.avatar"
          :alt="`profile image for blog author: ${post?.user?.firstName}`"
          sizes="50px"
          class="avatar rounded-full w-[50px] min-w-[50px] h-[50px] bg-gray-200 object-cover"
        ></NuxtImg>
        <div class="texts">
          <p class="font-semibold">
            {{ post?.user.firstName }} {{ post?.user.lastName }}
          </p>
          <div class="text-sm text-gray-500">
            {{ useFormattedTime(post?.publishedAt, "NORMAL") }}
          </div>
        </div>
      </div>

      <h1 class="text-3xl font-bold my-6">{{ post?.title }}</h1>

      <NuxtImg
        :src="post?.image"
        class="rounded-lg mb-6 w-[100%] h-[200px] object-cover bg-slate-300 sm:h-[340px]"
        sizes="700px sm:400px"
        :alt="`hero image for blog title: ${post?.title}`"
        format="webp"
      >
      </NuxtImg>

      <div class="html-content pb-12" v-html="post?.content"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { PostWithUser } from "@/types"

const route = useRoute()
const img = useImage()

const { data: post, error } = await useAsyncData<PostWithUser>("one-post", () =>
  $fetch(`/api/posts/${route.params.slug}`, {
    query: {
      include: "user",
      select: "id,title,excerpt,content,publishedAt,image",
    },
  })
)

// Find all <img> src attributes and replace their values
// with the useImage composable for image optimization
const imgSrcRegex = /<img[^>]*\bsrc\s*=\s*["']?([^"'\s>]+)["']?[^>]*>/g
post.value.content = post.value?.content.replace(
  imgSrcRegex,
  (_match: string, srcValue: string) => {
    const updatedSrcValue = img(srcValue, {
      width: 700,
      format: "webp",
    })

    return `<img src="${updatedSrcValue}" loading="lazy" alt="Illustration image for blog post">`
  }
)

if (error.value) {
  throw createError({
    statusCode: 404,
    message: "Blog post not found",
    fatal: true,
  })
}

useHead({
  title: `${post.value?.title} - Vue School`,
  meta: [
    {
      hid: "slug-description",
      name: "description",
      content: post.value?.excerpt,
    },
    { hid: "twitter:title", name: "twitter:title", content: post.value?.title },
    {
      hid: "twitter:description",
      name: "twitter:description",
      content: post.value?.excerpt,
    },
    {
      hid: "twitter:image",
      name: "twitter:image",
      content: `${post.value?.image}`,
    },
    {
      hid: "og:description",
      property: "og:description",
      content: post.value?.excerpt,
    },
    { hid: "og:image", property: "og:image", content: `${post.value?.image}` },
    { hid: "og:type", property: "og:type", content: "article" },
    {
      hid: "article:publisher",
      property: "og:type",
      content: `${post.value?.user?.firstName} ${post.value?.user?.lastName}`,
    },
    {
      hid: "article:published_time",
      property: "og:type",
      content: post.value?.publishedAt,
    },
    { hid: "twitter:label1", property: "og:type", content: "Written by" },
    {
      hid: "twitter:data1",
      property: "og:type",
      content: `${post.value?.user?.firstName} ${post.value?.user?.lastName}`,
    },
  ],
})
</script>
