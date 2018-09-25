## Muuvies

A simple UI for searching [OMDb.org](http://omdbapi.com)'s API.

![license](https://img.shields.io/apm/l/vim-mode.svg)
[![Say Thanks](https://img.shields.io/badge/say-thanks-ff69b4.svg)](https://saythanks.io/to/NicholasAdamou)

What is the "Muuvies"?
-------

A web application used for searching [OMDb.org](http://omdbapi.com)'s API.

Install
-------

Simply run, `yarn install`.

OMDb API Keys
-------

In order to build a working application, you will need to provide a OMDb API key. This is provided via a gitignored config.js file in the project root, which should export an object containing at least the following:

##### ./config.js

```js
module.exports = {
    omdbApiKey: '<your-omdb-api-key-here>'
}
```

To visit the OMDb API documentation visit this [link](http://www.omdbapi.com/?i=tt3896198&apikey=df5a3a43).

License
-------

Muuvies is © 2018

It is free software, and may be redistributed under the terms specified in the [LICENSE] file.

[LICENSE]: LICENSE