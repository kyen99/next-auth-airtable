# Airtable next-auth adapter example

This is a next js app that shows how to use Airtable as a user database using [next-auth-adapter-airtable](https://github.com/kyen99/next-auth-adapter-airtable).

The providers in the example are Google and Email because that's what I used to test the adapter.

## Usage

In order to use this demo, you will need to set up a next-auth provider in `pages/api/auth/[...nextauth].js`, including whatever `.env` variables are needed.

For the airtable adapter you will need the following variables

```
AIRTABLE_API_KEY=keyXXXXXXXXXXXXXX // From your account page
AIRTABLE_BASE_ID=appXXXXXXXXXXXXXX // e.g. https://airtable.com/baseId/something/somethingelse/
```

## Problems

If you find a provider that doesn't work, please open an issue in the [next-auth-adapter-airtable repo](https://github.com/kyen99/next-auth-adapter-airtable) and include your `[...nextauth].js` file.
