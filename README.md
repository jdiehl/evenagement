# Evenagement

Evenagement is a web application to manage communities.


## Setup

### Toolchain

1. Install [pnpm](https://pnpm.js.org): `npm i -g pnpm`
2. Install [firebase-tools](https://firebase.google.com/docs/cli): `pnpm i -g firebase-tools`

### Development

We use the [Firebase Emulator](https://firebase.google.com/docs/emulator-suite) for development and testing. (Note that you still need to configure a real Firebase Project in the environment, as [shown below](#environment).)

1. Ensure `NEXT_PUBLIC_USE_FIREBASE_EMULATOR=1` is set in [`.env.local`](./.env.local)
2. Start emulator: `pnpm run emulator`

With the emulator running, you can start the development server in parallel:

1. Install packages: `pnpm i`
2. Start development server: `pnpm run dev`
3. Open http://localhost:3000/

### Storybook

We use [Storybook](https://storybook.js.org) to test and showcase our components.

1. Start Storybook: `pnpm run storybook`
2. Open http://localhost:9009

Edit `[component].stories.tsx` to configure the options of a component

### Production Build

1. Configure the environment (see [below](#environment))
2. Install packages: `pnpm i --frozen-lockfile`
3. Build: `pnpm build`
4. Start: `pnpm start`
5. Open http://localhost:3000/

### Environment

Environment variables can be se in [`.env.local`](./.env.local).

[**Firebase Configuration:**](https://support.google.com/firebase/answer/7015592)

```
NEXT_PUBLIC_FIREBASE_APIKEY=
NEXT_PUBLIC_FIREBASE_AUTHDOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECTID=
NEXT_PUBLIC_FIREBASE_STORAGEBUCKET=
NEXT_PUBLIC_FIREBASE_MESSAGINGSENDERID=
NEXT_PUBLIC_FIREBASE_APPID=
NEXT_PUBLIC_FIREBASE_MEASUREMENTID=
```

Also set your project ID in [`.firebaserc`](./.firebaserc).

**Development Configuration:**

```
NEXT_PUBLIC_USE_FIREBASE_EMULATOR=1  # enables the emulator
NEXT_PUBLIC_DEBUG=1  # enables debug support by setting window.firebase
```

**Sendgrid Configuration:**

```
SENDGRID_API_KEY=
SENDGRID_FROM=
```
