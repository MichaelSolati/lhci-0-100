---
layout: default
title: 0 to 100 with Lighthouse
description: 0 to 100 with Lighthouse
---

## 0 to 100 with Lighthouse

[View this code on GitHub]({{ site.github }})

As users of the web we know that performance matter.

- No one likes to wait.
- We don’t always have a lot of time and need to look up something in a rush.

As developers we may have heard things like how slow sites have higher drop off rates...

> For every second delay in mobile page load, conversions can fall by up to 20%.
>
> SOASTA, The State of Online Retail Performance, April 2017.

And more importantly our discoverability is impacted by the speed and performance of the sites we work on.

On July of 2018 Google rolled out the "Speed Update":

> Speed is now used as a ranking factor for mobile searches
>
> "Using page speed in mobile search ranking." Google, January 2018, [https://webmasters.googleblog.com/2018/01/using-page-speed-in-mobile-search.html](https://webmasters.googleblog.com/2018/01/using-page-speed-in-mobile-search.html)

I find this quote by Karolina Szczur an important insight, tooling seems to be a barrier to improving the quality of performance and doesn’t end up being a main focus in development.

As developers there are tools we have to evaluate the performance of our sites, a key tool Google provides is Lighthouse.

> Performance is a pillar of user experience, yet so often overlooked. Developers are having a hard time obtaining budgets for paid tooling, audits or training. Businesses fail to see the value in pursuing improvements and critical bug fixes.
>
> Szczur, Karolina. “Three Reasons Why You Should Care About Google Lighthouse.” Calibre, 30 May 2017, [https://calibreapp.com/blog/lighthouse-reasons](https://calibreapp.com/blog/lighthouse-reasons).

## Lighthouse

Lighthouse is an open source tool for auditing sites to help developers by providing opportunities and diagnostics to improve the user experience of the site. You can run it against any web page, public or those requiring authentication. It has audits for performance, accessibility, progressive web apps, and more. And finally you can use it anywhere!

### You can run Lighthouse in the Chrome DevTools

<img src="/assets/images/lh-in-chrome.webp" alt="Lighthouse in Chrome" width="1600" height="900">

### Or you can run Lighthouse as a Chrome and Firefox extension

<img src="/assets/images/lh-as-extension.webp" alt="Lighthouse Extension" width="1600" height="900">

### Or even via the command line and in your code via a NPM module

<img src="/assets/images/lh-in-npm.webp" alt="Lighthouse NPM package" width="1600" height="900">
