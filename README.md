# Backend for ecommerce app

This is just a starter repo for stripe backend integration.
Check out the video for the code

## Running

For compiling ts to js use.

```bash
tsc -w
```

For staring the node sever.

```bash
nodemon ./app/server.js
```

## Stripe testing

For local testing run the following command. This will forward the stripe events to your localhost node sever. (Only required for local testing)

```bash
stripe listen --forward-to localhost:4242/webhook
```
