interface HeadProp {
  title: string
}

export function Head({ title}: HeadProp){
  document.title = `Econo Market | ${title}` 

  return null
}