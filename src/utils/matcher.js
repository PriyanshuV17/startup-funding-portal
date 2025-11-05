export function scoreMatch(startup, investor) {
  const overlap = investor.sectors.filter(s => startup.sectors.includes(s)).length
  return overlap > 0 ? overlap * 10 : 0
}
