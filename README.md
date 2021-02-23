# Evenagement

Evenagement is a web application to manage communities.


## Setup

1. Install [pnpm](https://pnpm.js.org): `npm i -g pnpm`
2. Install [firebase-tools](https://firebase.google.com/docs/cli): `pnpm i -g firebase-tools`
3. Configure environment (see below)

### Production Build

1. Install packages: `pnpm i --frozen-lockfile`
2. Build: `pnpm build`
3. Start: `pnpm start`
4. Open [http://localhost:3000/]

### Development

1. Install packages: `pnpm i`
2. Start development server: `pnpm run dev`
3. Open [http://localhost:3000/]

### Development with Firebase Emulator

1. Add `NEXT_PUBLIC_USE_FIREBASE_EMULATOR=1` to `.env.local`
2. Start emulator: `pnpm run emulator`
3. Start development as described above


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
