import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import PostCard from '../PostCard.vue'

describe('PostCard', () => {

  const mockPost = {
    id: "my-blog-post-362",
    title: "My Blog Post #362",
    excerpt: "Urbs succedo volup ascisco aestas ustulo. Studio conscendo uberrime. Adiuvo veniam vigor umerus anti...",
    publishedAt: 1710884494302,
    image: "https://picsum.photos/seed/my-blog-post-362/1920/1080",
    user: {
      id: "9Bjz1sS7VKn7A4t0JsmkE",
      firstName: "Mose",
      lastName: "O'Hara",
      email: "Jaylon.Littel@gmail.com",
      avatar: "https://i.pravatar.cc/150?u=9Bjz1sS7VKn7A4t0JsmkE"
    }
  }

  it('renders post title correctly', () => {
    const wrapper = mount(PostCard, {
      props: {
        post: mockPost,
        lazyLoadImage: false
      }
    })

    expect(wrapper.find('.post-title').text()).toBe(mockPost.title)
  })

  it('renders post excerpt correctly', () => {
    const wrapper = mount(PostCard, {
      props: {
        post: mockPost,
        lazyLoadImage: false
      }
    })

    expect(wrapper.find('.min-content').text()).toBe(mockPost.excerpt)
  })

})
