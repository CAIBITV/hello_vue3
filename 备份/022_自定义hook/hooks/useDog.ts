import { reactive, onMounted } from 'vue'
import axios from 'axios'

export default function() {
  // https://dog.ceo/api/breed/pembroke/images/random
  let dogList = reactive([
    'https://images.dog.ceo/breeds/pembroke/n02113023_6030.jpg'
  ])
  async function getDog() {
    try {
      let result = await axios.get('https://dog.ceo/api/breed/pembroke/images/random')
      // console.log(result.data.message)
      dogList.push(result.data.message)
    } catch (error) {
      alert(error)
    }
  }

  onMounted(getDog)

  return {
    dogList,
    getDog
  }
}