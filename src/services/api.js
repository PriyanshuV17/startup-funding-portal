export const api = {
  getStartups: async () => fetch('/api/startups').then(res => res.json()),
  getInvestors: async () => fetch('/api/investors').then(res => res.json())
}
