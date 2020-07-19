import { reactive } from 'vue'

export default function hash() {
  let data = reactive({})
  data.value = document.location.hash
  window.addEventListener('hashchange', () => {
    data.value = document.location.hash
  })
  return data
}