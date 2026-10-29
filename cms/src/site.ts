export const site = {
  title: 'Sherlock Ramos Blog', name: 'Sherlock Ramos',
  description: 'Reflexões, descobertas e ideias de Sherlock Ramos.',
  twitter: 'https://x.com/GatoMaconhado_',
}
export function siteURL() {
  return process.env.NEXT_PUBLIC_SITE_URL || (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000')
}
