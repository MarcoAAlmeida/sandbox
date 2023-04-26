export const useSEOHead = (content: any) => {
    if (content !== undefined && content !== null && Object.keys(content).length > 0) {
        useHead({
            meta: [
                { name: 'image', property:'og:image', content: content.cover },
                { name: 'twitterImage', property:'twitter:image', content: content.cover },
                { name: 'twitterCard', property:'twitter:card', content: "summary_large_image" },
                { name: 'author', content: 'marcoalmeida.dev.br@gmail.com' },
                { name: 'title', property:'og:title', content: content.title },
                { name: 'description', property:'og:description', content: content.description }
            ],
        })
    }
}