# Source

Extracted from [DeCleanup-Network/decleanup-main-celo](https://github.com/DeCleanup-Network/decleanup-main-celo):

| This repo | Upstream path |
|---|---|
| `src/lib/client-wallet/` | `frontend/src/lib/client-wallet/` |
| `src/lib/smart-account/` | `frontend/src/lib/smart-account/` |
| `src/lib/paymaster/` | `frontend/src/lib/paymaster/` |
| `src/lib/auth/` | `frontend/src/lib/auth/` (subset) |
| `src/lib/blockchain/chain-constants.ts` | `frontend/src/lib/blockchain/chain-constants.ts` |

This package is a **drop-in extract** for a Next.js App Router project that already uses the `@/*` path alias. It is not a full runnable app — wire providers from the main dApp (`WalletProvider`, Auth.js `auth.ts`) when forking.

Until extraction is complete, hotfixes land in `decleanup-main-celo` first.
