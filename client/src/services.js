export async function loadItems() {
  const res = await fetch('/items')
  return await res.json()
}
