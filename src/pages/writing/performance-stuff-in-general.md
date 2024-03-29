---
templateKey: blog-post
title: Performance Stuff in General
date: 2014-12-10T15:35:13.304Z
description: What can we do to make pages fast?
tags:
  - conferences
---
<p><a href="https://twitter.com/benschwarz">@benschwarz</a>, Ben Schwarz.</p>

<p><a href="https://speakerdeck.com/benschwarz/useful-performance-metrics" target="_blank">Slides</a></p>

<p>On the internet, time is money. Queue the stats!</p>

<p>47% of consumers expect a web page to load in two seconds or less.</p>

<p>"After a second of so, the user's flow and engagement with the initiated task is broken." -Ilya Grigorik.</p>

<h2>Everyone on your team is responsible for the speed of your site.</h2>

<p>Perceived speed is on the front-end. <em>Speed is perceived.</em> </p>

<p>So what can we do to make pages fast?</p>

<p>Minify.</p>

<p>Use AJAX.</p>

<p>Base-64 things.</p>

<p>Animate using CSS.</p>

<p>Use requestAnimationFrame for JS-based animation.</p>

<p>Use video rather than gifs. :(</p>

<p><code>position:fixed</code> can cause uncessary paints while scrolling. (So can a lot of other things.)</p>

<p><code>box-shadow</code> can be kiiiinnnd of evil.</p>

<p>Make animations small.</p>

<p>tl;dr:</p>

<h2>Only load what you need.</h2>

<p>Inlining critical styles will give you big boosts in speed.</p>

<p><em>So what else do I need to know?</em></p>

<ol>
  <li><p><em>Set a budget.</em> How much is too much? If you set budgets for images, you can have interesting talks with your designers. (Designers like constraints.)</p></li>

  <li><p><em>Use real-time analytics.</em> GA has the average page load time: this is what will give you data on using CDNs, etc.</p></li>

  <li><p><em>Do your own metrics.</em> <code>window.performance.timing</code> is a thing you can use in browsers and show you how long it took everything to load. If your site goes beyond a certain number, you can get alerts. You don't even need to fight to use GA or anything else; you have access to these metrics yourself.</p></li>
</ol>

<p><code>window.performance.mark("foo")</code>: set marks and get them and see how long they took to load. (Realize how slow Disqus is on your site!)</p>

<p><a href="https://www.pingdom.com/" target="_blank">Pingdom</a>, <a href="http://newrelic.com/" target="_blank">New Relic</a>, <a href="http://cssstats.com/" target="_blank">CSSStats</a>, <a href="http://calibreapp.com/" target="_blank">CalibreApp</a></p>

<p><em>Don't rely on what you think you know. Prove it.</em></p>
