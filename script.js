document.addEventListener('click', (event) => {
  if (!event.target.matches('.professional,.unprofessional')) return
  document.body.classList.toggle('flip')
})

document.addEventListener('click', (event) => {
  const element = event.target.closest('[data-audio]')
  if (!element) return
  new Audio(element.dataset.audio).play()
})

document.addEventListener('click', (event) => {
  if (!event.target.closest('footer')) return
  document.body.classList.toggle('insane')
})
