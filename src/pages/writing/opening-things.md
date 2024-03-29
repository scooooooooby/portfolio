---
templateKey: blog-post
title: Opening Things
date: 2015-02-18T15:43:48.726Z
description: 'From the Command Line, That Is'
tags:
  - workplace-guides
  - command-line
---
<p>To be perfectly honest I didn't quite accomplish what I wanted, but I figure I might as well post what I found as not in case I'd like to revisit it later.</p>

<p>I wanted to be able to launch files in <a href="https://ia.net/writer/mac/">iA Writer</a> much like one is able to with <a href="https://gist.github.com/artero/1236170">Sublime from the command line</a>. With a little digging in its app contents I found an executable and assumed I might be able to alias to something like <code>iA</code> or something less laborious to type if they were longform articles while still retaining the ability to open them in sublime if they were just code READMEs. Options, you know.</p>

<p>After trying to create a symlink I noticed that nonetheless I couldn't launch the app, for whatever reason. I initially thought that I had botched the symlink but then found that it had something to do with the executable I'd found. Unfortunately, digging around in it did little good, as it was a binary file.</p>

<p>... Charming.</p>

<p>Trying to open anything with it with absolute paths to the executable gave me some new information, although I couldn't dig any deeper without access to the code it came from.</p>

<p>Since it seemed to have issues finding my README file, I gave it the proper path, not that that changed much.</p>

<p>Curious. After digging around where it suggested I look I wasn't able to launch it even after giving everyone full access to test. Ultimately I just changed all <code>.md</code> files so that they would automatically launch in iA Writer instead, although it wasn't the solution I had hoped for. At the very least, it allows me to just type <code>open README.md</code> and have what I expect to happen.</p>

<p>Anyone ever tried to do something like this? It would be lovely for certain file types if I had options for which program they were opened in, not just the preferencial program set through Finder.</p>

<p>UPDATE, as of 9:26pm:</p>

<p><a href="https://twitter.com/myobie" target="_blank">@myobie</a> on Twitter very quickly found a solution, which was exactly what I needed:</p>

<blockquote class="twitter-tweet" lang="en"><p><a href="https://twitter.com/helenvholmes">@helenvholmes</a> just FYI you can do &#10;$ open README.md -a iA\ Writer &#10;(also iA=&quot;open -a iA\ Writer&quot;)</p>&mdash; Nathan Herald (@myobie) <a href="https://twitter.com/myobie/status/563523372718784513">February 6, 2015</a></blockquote>

<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

<p>Absolutely perfect! Immediately aliased in my <code>.zsh</code> profile. Score! Thanks Nathan!</p>
