export  function initialsFromName(name: string) {
  return name.split(' ').slice(0, 2).map(v => v.slice(0, 1).toUpperCase()).join('')
}

export function colorFromName(name: string) {
  let hash = 0
  for (let i = 0; i < name.length; i++) {
    hash += name.charCodeAt(i)
  }
  return `hsl(${hash % 360},80%,42%)`
}
