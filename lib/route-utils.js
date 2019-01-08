// https://github.com/nuxt/nuxt.js/issues/4024#issuecomment-446463008

export function scrollBehavior(to, from, savedPos) {
  let scrollTo = { x: 0, y: 0 }
  if (to.hash) {
    const strippedHash = to.hash.replace('#', '')
    const element = document.querySelector(
      `[id="${strippedHash}"]`
    )
    if (element) {
      scrollTo.y = element.getBoundingClientRect().top + window.pageYOffset
    }
  }

  return scrollTo
}