# LeetCode Stats Card

Show your dynamically generated LeetCode stats on your GitHub profile or your website!

LeetCode and LeetCode CN are both supported.

[Playground: Try It Now](https://leet-code-stat.onrender.com/)

[![LeetCode Stats](https://leetcard.jacoblin.cool/devagn_maniya?theme=unicorn&extension=activity)](https://leetcard.jacoblin.cool/devagn_maniya?theme=unicorn&extension=activity)

## Features

- 📈 Clean and simple LeetCode stats, for both `us` and `cn` sites
- 🎨 Multiple themes and fonts - [Theme](#theme-default-lightdark), [Font](#font-default-baloo_2)
- 🪄 Fully customizable using CSS - [Custom Stylesheets](#sheets-default-)
- ⚡️ Fast and global edge network - [Cloudflare Workers](https://workers.cloudflare.com/)
- 🚫 No tracking, controlable cache - [Cache](#cache-default-60)
- 🍀 Open source - [MIT License](./LICENSE)
- ⚙️ Extended-cards: `activity`, `contest`, `heatmap`

This Whole thing is working on the api which i Used to make this is [JacobLinCool](https://github.com/JacobLinCool) & here is c=website created on this api [Leet Code Stat]
## Usage

Simply copy the code below, paste it into your `README.md`, and change the path to your leetcode username (case-insensitive).

```md
![Leetcode Stats](https://leetcard.jacoblin.cool/{username})
```

Congratulation! You are now showing your LeetCode stats on your profile!

Want a hyperlink? Try this:

```md
[![Leetcode Stats](https://leetcard.jacoblin.cool/devagn_maniya)](https://leetcode.com/devagn_maniya)
```

### Endpoint

The endpoint of this tool is:

<https://leet-code-stat.onrender.com/>

> The legacy one: <https://leetcode.card.workers.dev/>

### Options

There are many options, you can configure them by passing a query string to the endpoint.

#### `site` (default: `us`)

Data source, can be `us` or `cn`.

```md
![](https://leetcard.jacoblin.cool/leetcode?site=cn)
```

[![](https://leetcard.jacoblin.cool/leetcode?site=cn)](https://leetcard.jacoblin.cool/leetcode?site=cn)

#### `theme` (default: `light,dark`)

Card theme, see [Theme](#themes) for more information.

Use a comma to separate the light and dark theme.

```md
![](https://leetcard.jacoblin.cool/devagn_maniya?theme=light,unicorn)
```

[![](https://leetcard.jacoblin.cool/devagn_maniya?theme=unicorn)](https://leetcode.com/devagn_maniya)

#### `font` (default: `Baloo_2`)

Card font, you can use almost all fonts on [Google Fonts](https://fonts.google.com/).

It is case-insensitive, and you can use `font=dancing_script` or `font=Dancing%20Script` to get the same result.

```md
![](https://leetcard.jacoblin.cool/devagn_maniya?font=Dancing_Script)
```

[![](https://leetcard.jacoblin.cool/devagn_maniya?font=Dancing_Script)](https://leetcard.jacoblin.cool/devagn_maniya?font=Dancing_Script)

#### `width` and `height` (default: `500` and `200`)

Change the card size, it will not resize the content.

But it will be helpful if you want to use custom css.

```md
![](https://leetcard.jacoblin.cool/devagn_maniya?width=500&height=500)
```

[![](https://leetcard.jacoblin.cool/devagn_maniya?width=500&height=500)](https://leetcard.jacoblin.cool/devagn_maniya?width=500&height=500)

#### `border` and `radius` (default: `1` and `4`)

Change the card border and radius.

```md
![](https://leetcard.jacoblin.cool/devagn_maniya?border=0&radius=20)
```

[![](https://leetcard.jacoblin.cool/devagn_maniya?border=0&radius=20)](https://leetcard.jacoblin.cool/devagn_maniya?border=0&radius=20)

#### `hide` (default: `""`)

Hide elements on the card, it is a comma-separated list of element ids.

```md
![](https://leetcard.jacoblin.cool/devagn_maniya?hide=ranking,total-solved-text,easy-solved-count,medium-solved-count,hard-solved-count)
```

[![](https://leetcard.jacoblin.cool/devagn_maniya?hide=ranking,total-solved-text,easy-solved-count,medium-solved-count,hard-solved-count)](https://leetcard.jacoblin.cool/devagn_maniya?hide=ranking,total-solved-text,easy-solved-count,medium-solved-count,hard-solved-count)

#### `ext` (default: `""`)

Extension, it is a comma-separated list of extension names.

NOTICE: You can only use one of extended-card extensions (`activity`, `contest`, `heatmap`) at a time now, maybe they can be used together in the future.

> Animation, font, theme, and external stylesheet are all implemented by extensions and enabled by default.

Want to contribute a `nyan-cat` extension? PR is welcome!

```md
![](https://leetcard.jacoblin.cool/devagn_maniya?ext=activity)
```

[![](https://leetcard.jacoblin.cool/devagn_maniya?ext=activity)](https://leetcard.jacoblin.cool/devagn_maniya?ext=activity)

```md
![](https://leetcard.jacoblin.cool/lapor?ext=contest)
```

[![](https://leetcard.jacoblin.cool/lapor?ext=contest)](https://leetcard.jacoblin.cool/lapor?ext=contest)

```md
![](https://leetcard.jacoblin.cool/lapor?ext=heatmap)
```

[![](https://leetcard.jacoblin.cool/lapor?ext=heatmap)](https://leetcard.jacoblin.cool/lapor?ext=heatmap)

#### `cache` (default: `60`)

Cache time in seconds.

Note: it will not be a good idea to set it to a long time because GitHub will fetch and cache the card.

```md
![](https://leetcard.jacoblin.cool/devagn_maniya?cache=0)
```

> You can make `DELETE` request to `/:site/:username` to delete the cache.

#### `sheets` (default: `""`)

External stylesheet, it is a comma-separated list of urls.

You can upload your custom CSS to gist and use the url.

```md
![](https://leetcard.jacoblin.cool/devagn_maniya?sheets=url1,url2)
```

They will be injected in the order you specified.

#### Legacy Options

Still work, but deprecated.

| Key             | Description                  | Default Value |
| --------------- | ---------------------------- | ------------- |
| `border_radius` | Same as `radius`             | `4`           |
| `show_rank`     | Display/Hide Rank: `Boolean` | `true`        |
| `extension`     | Same as `ext`                | `""`          |

### Themes

Now we have 6 themes. If you have any great idea, please feel free to open a PR!

#### Light

```md
![Leetcode Stats](https://leetcard.jacoblin.cool/devagn_maniya?theme=light)
```

[![Leetcode Stats](https://leetcard.jacoblin.cool/devagn_maniya?theme=light)](https://leetcard.jacoblin.cool/devagn_maniya?theme=light)

#### Dark

```md
![Leetcode Stats](https://leetcard.jacoblin.cool/devagn_maniya?theme=dark)
```

[![Leetcode Stats](https://leetcard.jacoblin.cool/devagn_maniya?theme=dark)](https://leetcard.jacoblin.cool/devagn_maniya?theme=dark)

#### Nord

```md
![Leetcode Stats](https://leetcard.jacoblin.cool/devagn_maniya?theme=nord)
```

[![Leetcode Stats](https://leetcard.jacoblin.cool/devagn_maniya?theme=nord)](https://leetcard.jacoblin.cool/devagn_maniya?theme=nord)

#### Forest

```md
![Leetcode Stats](https://leetcard.jacoblin.cool/devagn_maniya?theme=forest)
```

[![Leetcode Stats](https://leetcard.jacoblin.cool/devagn_maniya?theme=forest)](https://leetcard.jacoblin.cool/devagn_maniya?theme=forest)

#### WTF

```md
![Leetcode Stats](https://leetcard.jacoblin.cool/devagn_maniya?theme=wtf)
```

[![Leetcode Stats](https://leetcard.jacoblin.cool/devagn_maniya?theme=wtf)](https://leetcard.jacoblin.cool/devagn_maniya?theme=wtf)

#### Unicorn

```md
![Leetcode Stats](https://leetcard.jacoblin.cool/devagn_maniya?theme=unicorn)
```

[![Leetcode Stats](https://leetcard.jacoblin.cool/devagn_maniya?theme=unicorn)](https://leetcard.jacoblin.cool/devagn_maniya?theme=unicorn)

### Fonts

You can now use almost all fonts on [Google Fonts](https://fonts.google.com/).

Some examples:

#### Milonga

```md
![Leetcode Stats](https://leetcard.jacoblin.cool/devagn_maniya?font=milonga)
```

[![Leetcode Stats](https://leetcard.jacoblin.cool/devagn_maniya?font=milonga)](https://leetcard.jacoblin.cool/devagn_maniya?font=milonga)

#### Patrick Hand

```md
![Leetcode Stats](https://leetcard.jacoblin.cool/devagn_maniya?font=patrick_hand)
```

[![Leetcode Stats](https://leetcard.jacoblin.cool/devagn_maniya?font=patrick_hand)](https://leetcard.jacoblin.cool/devagn_maniya?font=patrick_hand)

#### Ruthie

```md
![Leetcode Stats](https://leetcard.jacoblin.cool/devagn_maniya?font=ruthie)
```

[![Leetcode Stats](https://leetcard.jacoblin.cool/devagn_maniya?font=ruthie)](https://leetcard.jacoblin.cool/devagn_maniya?font=ruthie)

### Extensions

Extension, it is a comma-separated list of extension names.

NOTICE: You can only use one of extended-card extensions (`activity`, `contest`, `heatmap`) at a time now, maybe they can be used together in the future.

> Animation, font, theme, and external stylesheet are all implemented by extensions and enabled by default.

Want to contribute a `nyan-cat` extension? PR is welcome!

#### `activity`

Show your recent submissions.

```md
![Leetcode Stats](https://leetcard.jacoblin.cool/devagn_maniya?ext=activity)
```

[![Leetcode Stats](https://leetcard.jacoblin.cool/devagn_maniya?ext=activity)](https://leetcard.jacoblin.cool/devagn_maniya?ext=activity)

#### `contest`

Show your contest rating history.

```md
![Leetcode Stats](https://leetcard.jacoblin.cool/lapor?ext=contest)
```

[![Leetcode Stats](https://leetcard.jacoblin.cool/lapor?ext=contest)](https://leetcard.jacoblin.cool/lapor?ext=contest)

#### `heatmap`

Show heatmap in the past 52 weeks.

```md
![Leetcode Stats](https://leetcard.jacoblin.cool/lapor?ext=heatmap)
```

[![Leetcode Stats](https://leetcard.jacoblin.cool/lapor?ext=heatmap)](https://leetcard.jacoblin.cool/lapor?ext=heatmap)

## Credit
This whole thing is depends Upon API which is created by [JacobLinCool](https://github.com/JacobLinCool)


## 🔗 Links
[![Portfolio](https://img.shields.io/badge/my_portfolio-000?logo=ko-fi&logoColor=white)](https://devagn-portfolio.onrender.com/)

[![Freecodecamp](https://img.shields.io/badge/freecodecamp-1DA1F2?logo=freecodecamp&logoColor=white)](https://www.freecodecamp.org/devagn_maniya)

[![Leet-Code](https://img.shields.io/badge/Leetcode-1DA1F2?logo=leetcode&logoColor=black)](https://www.leetcode.com/devagn_maniya)

