export default {
  install(app) {
    app.config.globalProperties.$loadImage = src => {
      return new Promise(resoleve => {
        const img = document.createElement('img')
        img.src = src
        img.addEventListener('load', () => {
          // 완료!
          resoleve()
        })
      })
    }
  }
}