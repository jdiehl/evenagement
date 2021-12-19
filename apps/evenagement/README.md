# Evenagement

Evenagement is a web application to manage communities.


## Setup

1. Install [pnpm](https://pnpm.js.org): `npm i -g pnpm`
2. Install [firebase-tools](https://firebase.google.com/docs/cli): `pnpm i -g firebase-tools` (only if you plan to use the emulator or use their hosting)

### Production Build

1. Install packages: `pnpm i --frozen-lockfile`
2. Configure environment (see below)
3. Build: `pnpm build`
4. Start: `pnpm start`
5. Open [http://localhost:3000/]

### Development

1. Install packages: `pnpm i`
2. Start [Firebase Emulator](https://firebase.google.com/docs/emulator-suite): `pnpm run emulator`
2. Start development server: `pnpm run dev`
3. Open [http://localhost:3000/]

### Storybook

We use [Storybook](https://storybook.js.org) to test and showcase our components.

1. Run `pnpm run storybook`
2. Open [http://localhost:9009]

Edit `[component].stories.tsx` to configure the options of a component


## Configuration

Environment variables can be se in `.env.local`.

Firebase Configuration:

```
NEXT_PUBLIC_FIREBASE_APIKEY=
NEXT_PUBLIC_FIREBASE_AUTHDOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECTID=
NEXT_PUBLIC_FIREBASE_STORAGEBUCKET=
NEXT_PUBLIC_FIREBASE_MESSAGINGSENDERID=
NEXT_PUBLIC_FIREBASE_APPID=
NEXT_PUBLIC_FIREBASE_MEASUREMENTID=
```

Development Configuration:

```
NEXT_PUBLIC_USE_FIREBASE_EMULATOR=1  #enable the emulator
NEXT_PUBLIC_DEBUG=1  #enable debug support (sets window.firebase)
```

Sendgrid Configuration:

```
SENDGRID_API_KEY=
SENDGRID_FROM=
```
