export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-sans">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-[#58a6ff]/10 text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest border border-[#58a6ff]/20">
          Real-Time Protocol Intelligence
        </span>
        <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-5">
          Find Working VPN Protocols<br />
          <span className="text-[#58a6ff]">During Government Blocks</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Crowdsourced, real-time testing of VPN protocols across restricted regions. Know exactly which protocol works in your country — right now.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
          <a
            href={checkoutUrl}
            className="bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg transition-colors text-base"
          >
            Get Access — $9/mo
          </a>
          <a
            href="#faq"
            className="border border-[#30363d] hover:border-[#58a6ff] text-[#c9d1d9] px-8 py-3 rounded-lg transition-colors text-base"
          >
            Learn More
          </a>
        </div>
        <div className="flex flex-wrap justify-center gap-6 text-sm text-[#8b949e]">
          <span>✓ Live protocol status map</span>
          <span>✓ Crowdsourced reports</span>
          <span>✓ Geo-based recommendations</span>
          <span>✓ WebSocket real-time updates</span>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <div className="bg-[#161b22] border border-[#30363d] rounded-2xl p-8 text-center shadow-xl">
          <div className="text-[#58a6ff] text-sm font-semibold uppercase tracking-widest mb-2">Pro Plan</div>
          <div className="text-5xl font-bold text-white mb-1">$9</div>
          <div className="text-[#8b949e] text-sm mb-6">per month · cancel anytime</div>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              'Real-time protocol status dashboard',
              'Geolocation-based VPN recommendations',
              'Crowdsourced reports from 50+ countries',
              'WebSocket live alerts for your region',
              'Access to global testing network data',
              'Priority support for activists & journalists',
            ].map((f) => (
              <li key={f} className="flex items-start gap-2">
                <span className="text-[#58a6ff] mt-0.5">✓</span>
                <span className="text-[#c9d1d9]">{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors text-base"
          >
            Start for $9/mo
          </a>
          <p className="text-xs text-[#8b949e] mt-4">Secure checkout via Lemon Squeezy. No hidden fees.</p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-10">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">How does the protocol detection work?</h3>
            <p className="text-[#8b949e] text-sm">Our global network of nodes continuously tests VPN protocols (WireGuard, OpenVPN, Shadowsocks, V2Ray, etc.) from within each country. Results are aggregated in real time and surfaced via WebSocket to your dashboard.</p>
          </div>
          <div className="border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Is this legal to use?</h3>
            <p className="text-[#8b949e] text-sm">We provide information about protocol availability — we do not operate VPN servers. Using this data is legal in most jurisdictions. Always consult local laws. We support journalists, activists, and digital rights organizations.</p>
          </div>
          <div className="border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Can I contribute reports from my region?</h3>
            <p className="text-[#8b949e] text-sm">Yes. Subscribers can submit protocol test results directly from their device. Your anonymous reports improve accuracy for everyone in your country and help the community stay one step ahead of blocks.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-8 text-xs text-[#8b949e]">
        © {new Date().getFullYear()} VPN Bypass Detector · Built for the open internet
      </footer>
    </main>
  )
}
