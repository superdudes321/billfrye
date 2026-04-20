document.addEventListener('click', (event) => {
  if (!event.target.matches('.professional,.unprofessional')) return
  document.body.classList.toggle('flip')
})

document.addEventListener('click', (event) => {
  const element = event.target.closest('[data-audio]')
  if (!element) return
  new Audio(element.dataset.audio).play()
})

const BACKGROUNDS = [
  'xp',
  'insane',
  'frenzy',
  'zelda',
  'luigi',
  'minecraft',
  'mario64',
]

document.addEventListener('click', (event) => {
  if (!event.target.closest('footer')) return

  event.preventDefault()
  const { body } = document

  const index = BACKGROUNDS.findIndex((classname) => (
    body.classList.contains(classname)
  ))

  body.classList.remove(...BACKGROUNDS)
  body.classList.add(BACKGROUNDS[(index + 1) % BACKGROUNDS.length])
})
