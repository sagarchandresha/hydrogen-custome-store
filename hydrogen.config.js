import {defineConfig, CookieSessionStorage} from '@shopify/hydrogen/config';

export default defineConfig({
  shopify: {
    defaultCountryCode: 'US',
    defaultLanguageCode: 'EN',
    // storeDomain: 'hydrogen-preview.myshopify.com',
    storeDomain: 'hydrogen-teststore.myshopify.com',
    // storefrontToken: '3b580e70970c4528da70c98e097c2fa0',
    storefrontToken: '352bc22272ae85f65e79344b68b42b61',
    storefrontApiVersion: '2022-07',
  },
  session: CookieSessionStorage('__session', {
    path: '/',
    httpOnly: true,
    secure: import.meta.env.PROD,
    sameSite: 'Strict',
    maxAge: 60 * 60 * 24 * 30,
  }),
});
