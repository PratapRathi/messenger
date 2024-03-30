# Real-Time Messenger Clone: Next.js, React, Tailwind, Prisma, MongoDB, NextAuth, Pusher

![Fullstack Messenger Clone](https://github.com/PratapRathi/messenger/assets/130206612/d1d9e623-16ad-4278-8831-1930adf9e74e)


This is a repository for a Real-Time Messenger Clone: Next.js, React, Tailwind, Prisma, MongoDB, NextAuth, Pusher.

Key Features:

- Real-time messaging using Pusher
- Message notifications and alerts
- Tailwind design for sleek UI
- Tailwind animations and transition effects
- Full responsiveness for all devices
- Credential authentication with NextAuth
- Google authentication integration
- Github authentication integration
- File and image upload using Cloudinary CDN
- Client form validation and handling using react-hook-form
- Server error handling with react-toast
- Message read receipts
- Online/offline user status
- Group chats and one-on-one messaging
- Message attachments and file sharing
- User profile customization and settings
- How to write POST, GET, and DELETE routes in route handlers (app/api)
- How to fetch data in server React components by directly accessing the database (WITHOUT API! like Magic!)
- Handling relations between Server and Child components in a real-time environment
- Creating and managing chat rooms and channels


### Prerequisites

**Node version 14.x**


### Live Deployed at

```shell
https://messenger-pratap.vercel.app/
```

### Cloning the repository

```shell
git clone https://github.com/PratapRathi/messenger.git
```

### Install packages

```shell
npm i
```

### Setup .env file


```js
DATABASE_URL=
NEXTAUTH_SECRET=

NEXT_PUBLIC_PUSHER_APP_KEY=
PUSHER_APP_ID=
PUSHER_SECRET=

NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=

GITHUB_ID=
GITHUB_SECRET=

GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
```

### Setup Prisma

```shell
npx prisma db push

```

### Start the app

```shell
npm run dev
```

## Available commands

Running commands with npm `npm run [command]`

| command         | description                              |
| :-------------- | :--------------------------------------- |
| `dev`           | Starts a development instance of the app |
