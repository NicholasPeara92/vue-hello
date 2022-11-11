const { createApp } = Vue

app = createApp({
    data() {
      return {
        message: 'Hello',
        image: 'https://dictionary.cambridge.org/it/images/thumb/clown_noun_002_07246.jpg?version=5.0.273',
      }
    }
}).mount('#app')
