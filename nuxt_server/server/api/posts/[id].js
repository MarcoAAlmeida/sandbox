// @ts-ignore
import posts from '../posts.json'

export default defineEventHandler((event) => {
    return posts.find(post => post.id.toString() === event.context.params.id)
})