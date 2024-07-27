# LeetCode Stats Card

Show your dynamically generated LeetCode stats on your GitHub profile or your website!

LeetCode and LeetCode CN are both supported.

[Playground: Try It Now](https://leet-card-generator.onrender.com/)

[![LeetCode Stats](https://leet-card-generator.onrender.com/api/cardgen?username=devagn_maniya&theme=unicorn&extension=activity&font=changa)](https://leet-card-generator.onrender.com/api/cardgen?username=devagn_maniya&theme=unicorn&extension=activity&font=changa)

## Features

- 📈 Clean and simple LeetCode stats, for both `us` and `cn` sites
- 🎨 Multiple themes and fonts - [Theme](#theme-default-lightdark), [Font](#font-default-baloo_2)
- 🪄 Fully customizable using CSS - [Custom Stylesheets](#sheets-default-)
- ⚡️ Fast and global edge network - [Cloudflare Workers](https://workers.cloudflare.com/)
- 🚫 No tracking, controlable cache - [Cache](#cache-default-60)
- 🍀 Open source - [MIT License](./LICENSE)
- ⚙️ Extended-cards: `activity`, `contest`, `heatmap`


LeetCode Stats Card API Documentation
=====================================

Introduction
------------

Welcome to the LeetCode Stats Card API documentation. This API allows you to generate and embed customizable stat cards for LeetCode profiles.


Endpoints
---------

### Main Data Fetcher:





Endpoints
---------

### GET /api/cardgen 

Generates a LeetCode stats card image.

#### Parameters:

*   username (required): LeetCode username
*   theme (required): Card theme (e.g., dark, light)
*   font (required): Font style for the card
*   extension (optional): File extension
*   site (optional): Site identifier

Returns: The stats card image data

### GET /api/cardgenDetail 

Generates embed code for the LeetCode stats card.

#### Parameters:

*   username (required): LeetCode username
*   theme (required): Card theme (e.g., dark, light)
*   font (required): Font style for the card
*   extension (optional): File extension
*   site (optional): Site identifier

Returns: JSON object containing embedHtml and markdown

### GET /api/preview

Provides a preview of the stats card.

#### Parameters:

*   username (required): LeetCode username
*   theme (required): Card theme (e.g., dark, light)
*   font (required): Font style for the card
*   extension (optional): File extension
*   site (optional): Site identifier

Returns: The source of the embed code

Examples
--------

### Generating a card image:

    
    fetch('/api/cardgen?username=devagn_maniya&theme=dark&font=changa')
        .then(response => response.text())
        .then(data => console.log(data))
        .catch(error => console.error('Error:', error));
                    

### Getting embed code:

    
    fetch('/api/cardgenDetail?username=devagn_maniya&theme=dark&font=changa')
        .then(response => response.json())
        .then(data => {
            console.log('Embed HTML:', data.embedHtml);
            console.log('Markdown:', data.markdown);
        })
        .catch(error => console.error('Error:', error));
                    

### Getting a preview:

    
    fetch('/api/preview?username=devagn_maniya&theme=dark&font=changa')
        .then(response => response.text())
        .then(data => console.log(data))
        .catch(error => console.error('Error:', error));
                    

Error Handling
--------------

If required parameters are missing or an error occurs, the API will return a JSON response with an error message:

    
    {
        "error": "Username, theme, and font are required."
    }


## Credit
[Maniya Devagn](https://github.com/devagn611)
[JacobLinCool](https://github.com/JacobLinCool)


## 🔗 Links
[![Portfolio](https://img.shields.io/badge/my_portfolio-000?logo=ko-fi&logoColor=white)](https://devagn-portfolio.onrender.com/)

[![Freecodecamp](https://img.shields.io/badge/freecodecamp-1DA1F2?logo=freecodecamp&logoColor=white)](https://www.freecodecamp.org/devagn_maniya)

[![Leet-Code](https://img.shields.io/badge/Leetcode-1DA1F2?logo=leetcode&logoColor=black)](https://www.leetcode.com/devagn_maniya)

