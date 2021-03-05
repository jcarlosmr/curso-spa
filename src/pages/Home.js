import getData from '../utils/getData'
import charaterCard from './CharacterCard'

const Home = async () => {
  const Characters = await getData()

  const view = `
    <div class="Characters">
      ${Characters.results.map(charaterCard).join('')}
    </div>
  `
  return view
}

export default Home