const CharaterCard = character => `
  <article class="Character-items">
    <a href="#/${character.id}/">
      <img src="${character.image}" alt="${character.name}" />
      <h2>${character.name}</h2>
    </a>
  </article>
`

export default CharaterCard