---
layout: "../../layouts/BlogPost.astro"
title: "Creating Blog Tags"
pubDate: 2024-03-05
author: "Cato Cannizzo"
tags: ["setbacks", "blogging", "learning in public"]
---

# Trouble with some 'titles'.

Despite thinking I succesfully copied the code from the Astro blog I have ran into a bug reading the titles of my blog posts on the /tag/astro page.

## Debugging

<ul>
<li>The first thing I did was to look at the stack trace, and double check any code it referenced. However this stack trace only listed files from the node_modules page.</li>
<li>To make sure I am looking in the correct place for the bug I went back to my normal '/blog' page that also used the same BlogListLayout to make sure it rendered correctly since it uses the same data and very similar code.</li>
<li>Once I made sure the bug was in my [tag].astro file I then double checked my code syntax there but I did not find any issue with the code there. I even made sure my BlogPostLayout import was formatted correctly.</li>
<li>Knowing that the bug was somewhere in the page, and that it dealt with the title property I decicded to comment out the one line that used the title. Unfortunately it appears the code is trying to read the 'title' property somewhere else, this makes sense as the stacktrace never referenced line 34. </li>
<li>At this point I was pretty lost, so decided to comment chunks out to get to the last viable product. Using this method I found that the new filter function I implimented worked but the call to my BlogPostLayout contained the bug.</li>
<li>So I tested a more basic layout and attempted to use the title property. And that worked.</li>
<li>Now since I was following this tutorial to learn to code and not to deliver a minimal viable product I decided to go back to the issue layout to see why the tag page bugged my BlogPostLayout but the '/blog' page didn't bug the BlogListLayout</li>
<li>And in typing that I noticed my issue. I was importing my BlogPostLayout - a page layout, and not the BlogListLayout - a astro component.</li>

</ul>

## Reflection

The issue I encountered was the component I was using having layout in the name. And because the intellise for Astro fills in the import location and all astro components (including layouts) end in .astro I did not notice the difference subtle difference names.

To fix this, and to make sure it doesn't happen again I will use more distinctive names. So not my BlogListLayout is a BlogListFormatter.

## Stack Trace

> TypeError: Cannot read properties of undefined (reading 'title')
> at eval (eval at instantiateModule (file:///C:/Users/Cato/Desktop/Code%20Space/RAF_Practice/node_modules/vite/dist/node/chunks/dep-jDlpJiMN.js:54722:28), <anonymous>:15:175)

> at AstroComponentInstance.BlogPost [as factory] (eval at instantiateModule (file:///C:/Users/Cato/Desktop/Code%20Space/RAF_Practice/node_modules/vite/dist/node/chunks/dep-jDlpJiMN.js:54722:28), <anonymous>:21:12)

> at AstroComponentInstance.init (eval at instantiateModule (file:///C:/Users/Cato/Desktop/Code%20Space/RAF_Practice/node_modules/vite/dist/node/chunks/dep-jDlpJiMN.js:54722:28), <anonymous>:39:29)

> at AstroComponentInstance.render (eval at instantiateModule (file:///C:/Users/Cato/Desktop/Code%20Space/RAF_Practice/node_modules/vite/dist/node/chunks/dep-jDlpJiMN.js:54722:28), <anonymous>:44:18)

> at Object.render (eval at instantiateModule (file:///C:/Users/Cato/Desktop/Code%20Space/RAF_Practice/node_modules/vite/dist/node/chunks/dep-jDlpJiMN.js:54722:28), <anonymous>:357:22)

> at Module.renderChild (eval at instantiateModule (file:///C:/Users/Cato/Desktop/Code%20Space/RAF_Practice/node_modules/vite/dist/node/chunks/dep-jDlpJiMN.js:54722:28), <anonymous>:36:17)
