export const useCover = (cover:string|undefined, defaultOptions:string[]) => {
    return cover===undefined ? defaultOptions[Math.floor(Math.random() * defaultOptions.length)] : cover
}