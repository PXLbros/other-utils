# other-utils

Install using npm:

```bash
npm install other-utils --save-dev
```

## How To Use WIth Ember

First you need to install the prerequisite addon called [ember-browserfy](https://www.npmjs.com/package/ember-browserify):

```bash
npm install --save-dev ember-browserify
```

Now you'll be able to import a `social-utilities` function from anywhere in your javascript files:

```js
import _fbShare from "npm:other-utils/_fbShare";
...

actions {
    handleFbShare() {
        _fbShare(http://gleasonmovie.com, 400, 225);
    }
}

```
