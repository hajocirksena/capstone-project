export function loadItems() {
  return fetch('/items').then(res => res.json())
}
