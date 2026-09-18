# ConnectFlow

Production UI for this flow lives in `decleanup-main-celo`:

- `frontend/src/app/login/` — Google / email / WalletConnect entry
- `frontend/src/providers/WalletProvider.tsx` — passcode unlock, Safe session
- `frontend/src/components/aa/` — passkey, unlock, bootstrap panels

This folder is the starter surface for forks. Wire `index.tsx` into your Next.js app after Auth.js + wagmi providers are configured.
