# Web3 Community Onboarding Starter

Gasless web3 onboarding for community apps. Google or email sign-in creates a Safe smart account. Pimlico sponsors gas. Users never touch ETH.

Used in production by [DeCleanup Network](https://decleanup.net).

## The problem this solves

Most web3 community apps fail at onboarding because they require users to:
- Install MetaMask
- Buy ETH for gas
- Understand seed phrases

This starter removes all three barriers while still giving every user a real onchain identity (a Safe smart account), not a custodial key.

## What it does

- Google OAuth or email magic link via Auth.js
- Browser EOA generated locally, never sent to a server
- Safe smart account predicted and deployed on first onchain action
- Pimlico bundler and paymaster: all gas sponsored for users
- Optional passkey for account recovery (WebAuthn)
- WalletConnect bridge for users who prefer an external wallet

## Who this is for

Any team building a consumer web3 app where:
- Participants should not need to buy crypto to join
- You want decentralised identity (Safe) not a custodial wallet
- You need social login without sacrificing self-custody

## Stack

Next.js · Auth.js · wagmi · viem · Safe SDK · Pimlico · ERC-4337 (account abstraction)

## Structure

```
lib/
  client-wallet/     Browser EOA generation
  smart-account/     Safe deployment and prediction
  paymaster/         Pimlico integration
  auth/              Auth.js config: Google + email providers
components/
  ConnectFlow/       Full onboarding UI: sign in, wallet creation, first action
```

## Quick start

```bash
git clone https://github.com/DeCleanup-Network/web3-community-onboarding
cd web3-community-onboarding
cp .env.example .env.local
# Fill in: PIMLICO_API_KEY, NEXTAUTH_SECRET, GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET
npm install
npm run dev
```

## Environment variables

| Variable | Where to get it |
|---|---|
| `PIMLICO_API_KEY` | dashboard.pimlico.io |
| `NEXTAUTH_SECRET` | run `openssl rand -base64 32` |
| `GOOGLE_CLIENT_ID` | console.cloud.google.com |
| `GOOGLE_CLIENT_SECRET` | console.cloud.google.com |

## Reference implementation

The full production deployment of this pattern is in
[decleanup-main-celo](https://github.com/DeCleanup-Network/decleanup-main-celo)
under `lib/client-wallet`, `lib/smart-account`, and `lib/paymaster`.

## License

MIT

## Implementation note

Source lives under `src/` with the same `@/` import paths as the DeCleanup Network dApp. See `SOURCE.md`. Copy into a Next.js app (or open this folder as a workspace package) after configuring Auth.js and wagmi providers.
