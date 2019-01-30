<h1>Storyblok API Documentation<a href='https://app.netlify.com/sites/storyblok-docs/deploys'><img align="right" src='https://api.netlify.com/api/v1/badges/bd9ea974-391c-4937-bc20-d626afd9a6e1/deploy-status'/></h1>

> A Nuxt.js setup to generate an intuitive, readable and collaborative API documentation with copy and paste able examples

## The Docs

[![Storyblok Documentation setup](https://a.storyblok.com/f/39898/3356x1830/d57a561cb5/storyblok-documentation.jpg)](https://www.storyblok.com/docs/api/content-delivery)

## Why?

We at Storyblok highly value your feedback and your desire to know more about our API and possible use-cases, examples and hidden features. To support that this project allows you to run our API documentation for the content delivery and management API completely offline and contribute to it.

## Build Setup

``` bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
# and generates doc jsons
$ npm run dev

# generate static project
$ npm run generate
```

## The Folder Structure

```
- content
  - origin (content delivery or management)
    - languages (en, de, ...)
      - categories
        - method/section.md
```

## How should the method/section.md look like:

```
---
category: Category Name
title: The Sidebar Title & Headline
position: 10100
---

This is the method written content; the left area of a section.

;examplearea

This is the method example; the right area of a section.
```

## Licence

```
Copyright 2019 Storyblok GmbH

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
```
