---
title: "Operation: `eq_array`"
sidebarTitle: "eq_array"
---

Filter your entries by checking if your custom array attribute (any field inside the content field) matches entire array. As soon as the array field matches the provided values, the story object will be in the response.

You can combine this query with the `starts_with`, [pagination](#topics/pagination), other filter query, and query/sorting options of [Stories](#core-resources/stories/retrieve-multiple-stories) if needed.

## Use-cases: eq_array

Get all content entries that match entire array in a [N:N relationship](https://www.storyblok.com/tp/how-to-build-a-content-relationship) or if you want to get entries that match with the values in all of it's **array fields**. You can combined this query with the `starts_with`, [pagination](#topics/pagination), and other query options of [Stories](#core-resources/stories/retrieve-multiple-stories) if needed.

| Filter Query | Description |
|--|--|
| `filter_query[categories][eq_array]=sportsid,esportsid` | all entries that have the categories `sportsid` and `esportsid` in `categories` |
| `filter_query[tags][eq_array]=food,health` | all entries that matches `food` **and** `health` in `categories` |
| `filter_query[related_products][eq_array]=product1,product2` | all entries in `related_products` that matches `product1` **and** `product2` |

;examplearea

Example Request (all entries of `9aa72a2f-04ae-48df-b71f-25f53044dc97` in field `categories`)

<RequestExample url="https://api.storyblok.com/v2/cdn/stories/?token=ask9soUkv02QqbZgmZdeDAtt&filter_query[categories][eq_array]=9aa72a2f-04ae-48df-b71f-25f53044dc97"></RequestExample>

```json
{
   "stories":[
      {
         "name":"My third post",
         "created_at":"2018-04-24T11:57:29.302Z",
         "published_at":"2019-05-27T14:54:59.532Z",
         "alternates":[
            
         ],
         "id":107350,
         "uuid":"ac0d2ed0-e323-43ca-ae59-5cd7d38683cb",
         "content":{
             "_uid":"98cccd01-f807-4494-996d-c6b0de2045a5",
            "image":"//a.storyblok.com/f/44162/1500x500/68b522b06d/1500x500.jpeg",
            "title":"My second",
            "author":107350,
            "content":"Lorem ipsum dolor sit amet, *consectetur* adipisicing elit, sed do eiusmod\ntempor ",
            "schedule":"2018-08-31 21:59",
            "component":"post",
            // filtered on this categories attribute;
            // In response because eq_array matches the id present.
            "categories":[
               "9aa72a2f-04ae-48df-b71f-25f53044dc97"
            ],
            "description":"Description of the second"
         },
         "slug":"my-third-post",
         "full_slug":"posts/my-third-post",
         ...
      },
      {
        ...
      },
   ]
}
```


