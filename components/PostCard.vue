<template>
  <nuxt-link
    :to="`/posts/${post?.id}`"
    class="post-card rounded-2xl border-2 border-gray-100 overflow-hidden"
  >
    <div
      class="post-image w-[100%] h-[220px] bg-cover bg-no-repeat relative rounded-t-2xl bg-slate-300"
    >
      <NuxtImg
        :src="post?.image"
        class="object-cover h-[100%] w-[100%]"
        sizes="500px sm:400px"
        :loading="lazyLoadImage ? 'lazy' : 'eager'"
        :alt="`header image for blog title: ${post?.title}`"
        format="webp"
      ></NuxtImg>
      <div class="overlay-gradient absolute inset-0"></div>
      <div
        class="flex justify-between items-center p-3 text-white absolute top-0 right-0 left-0"
      >
        <div
          class="chip text-sm font-semibold bg-green-100 text-green-800 px-2 rounded-full"
        >
          Article
        </div>
        <div class="pub-date text-sm">
          {{ useFormattedTime(post?.publishedAt) }}
        </div>
      </div>
    </div>
    <div class="others p-4 px-6 flex flex-col gap-2">
      <div class="post-title text-lg font-semibold">{{ post?.title }}</div>
      <div class="min-content text-sm" v-html="post?.excerpt"></div>
      <div class="flex justify-between items-center mt-4 text-sm">
        <div class="author flex items-center gap-2">
          <NuxtImg
            :src="post?.user.avatar"
            sizes="40px"
            :loading="lazyLoadImage ? 'lazy' : 'eager'"
            class="avatar rounded-full w-[40px] min-w-[40px] h-[40px] bg-gray-200 object-cover"
            :alt="`profile image of blog post author: ${post?.user?.firstName}`"
          ></NuxtImg>
          <p>{{ post?.user.firstName }} {{ post?.user.lastName }}</p>
        </div>
        <div class="font-semibold">Read more</div>
      </div>
    </div>
  </nuxt-link>
</template>

<script setup lang="ts">
import { PostWithUser } from "@/types/index"

const props = defineProps<{
  post: PostWithUser
  lazyLoadImage: Boolean
}>()
</script>

<style>
.min-content {
  overflow: hidden;
  text-overflow: ellipsis;
  line-clamp: 2;
  -webkit-line-clamp: 2;
  display: -webkit-box;
  -moz-box-orient: vertical;
  -webkit-box-orient: vertical;
}

.overlay-gradient {
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0) 50%,
    rgba(0, 0, 0, 0.4) 70%,
    rgba(0, 0, 0, 0.9) 100%
  );
}
</style>
