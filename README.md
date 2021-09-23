# Backend for ecommerce app

This is just a starter repo for stripe backend integration.
Check out the video for the code [Youtube](https://youtu.be/ElgfjrWn7Mg)

## Firestore service key for admin access

You need to create a private key from firebase. Goto project settings --> service accounts --> click on `Generate new private key`.
Place the downloaded file under `src/files/` folder with name `service_key.json`

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

## Firestore products

Use the `uploader.js` to quickly populate the products for the e-commerce app. You need to have the `service_key.json` file.

```bash
node uploader.js
```
