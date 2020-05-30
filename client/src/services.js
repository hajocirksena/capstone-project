export async function loadItems() {
  const res = await fetch('/items')
  return await res.json()
}

export async function loadFoundItems() {
  const url = new URL(document.URL)
  const id = url.pathname.slice(1)
  const res = await fetch('/items/' + id)
  return await res.json()
}
