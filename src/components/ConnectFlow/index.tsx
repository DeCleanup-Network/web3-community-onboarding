'use client'

/**
 * Minimal onboarding shell. Production DeCleanup Network expands this into
 * Google/email Auth.js → client EOA → Safe + Pimlico sponsored UserOps.
 *
 * Drop into a Next.js app that already has SessionProvider + WagmiProvider.
 */
export function ConnectFlow({
  onContinue,
}: {
  onContinue?: () => void
}) {
  return (
    <div className="mx-auto max-w-md space-y-4 p-6">
      <h1 className="text-xl font-semibold">Create your community wallet</h1>
      <p className="text-sm opacity-80">
        Sign in with Google or email. We create a Safe smart account in your browser and sponsor
        gas via Pimlico — you never need ETH to start.
      </p>
      <ol className="list-decimal space-y-2 pl-5 text-sm">
        <li>Auth.js session (Google / email)</li>
        <li>Browser EOA via <code>lib/client-wallet</code></li>
        <li>Predict / deploy Safe via <code>lib/smart-account</code></li>
        <li>Sponsored UserOps via <code>lib/paymaster</code></li>
      </ol>
      {onContinue ? (
        <button type="button" onClick={onContinue}>
          Continue
        </button>
      ) : null}
    </div>
  )
}
