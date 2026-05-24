import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'VPN Protocol Bypass Detector — Find Working VPNs During Government Blocks',
  description: 'Real-time crowdsourced VPN protocol testing. Discover which protocols work in your country right now. Used by activists, journalists, and privacy advocates worldwide.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="4105b47b-3e64-4663-9310-79347407512c"></script>
      </head>
      <body>{children}</body>
    </html>
  )
}
