export function loadItems() {
  return fetch('/items').then((res) => res.json())
}

export function loadFoundItems() {
  return fetch('/items/:id').then((res) => res.json())
}
