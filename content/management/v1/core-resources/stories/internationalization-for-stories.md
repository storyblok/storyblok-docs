---
title: Internationalization for Stories
---

If you use our field level translations functionality, you can provide the values for the translations/languages within the same content object by appending `__i18n__` followed by the language code.

Make sure to have the component field option `translatable` to `true`.

Additionally, you should replace hyphens with underscores in language codes when using the `__i18n__` functionality, e.g. use en_ie rather than en-ie.

Get a [full list of our languages codes](https://gist.github.com/DominikAngerer/f685f2c988171faef3fb6c2ffff4c78c) on Github.

;examplearea

Example Request

<RequestExample url="https://mapi.storyblok.com/v1/spaces/606/stories/" httpMethod="POST" :requestObject='{"story":{"name":"My First Article","slug":"first-post","content":{"component":"post","headline":"This is awesome!","headline__i18n__de":"Das ist toll!","headline__i18n__en_ie":"This is awesome!"}},"publish":1}'></RequestExample>
