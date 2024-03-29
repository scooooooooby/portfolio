---
templateKey: blog-post
title: iAWriter and Git
date: 2015-03-07T04:23:16.348Z
description: How to Version Control Your iAWriter Documents
tags:
  - learning
---
<p>I’m pretty obsessed with iAWriter as my favorite way to write in Markdown, but my biggest pain point has been that iCloud documents (while syncing beautifully across iOS devices) didn’t have version control, or the ability to easily allow me to share my work across various mediums like Git does. However, with Yosemite we can now access our Cloud Drive as a folder in Finder, which means that we can <em>definitely</em> find it in the terminal, which in turn means we can turn out iAWriter folders into git repositories. Score!</p>

<p>Because the path into the iCloud folder is so nasty, let’s just immediately symlink it:</p>

<pre><code>ln -s ~/Library/Mobile\ Documents/ iCloud</code></pre>

<p>If you navigate here you’ll notice a bunch of folders for various things. For iAWriter you’re looking for one that has a hash, then <code>jp\~informationarchitects\~Writer</code>. Inside that it will have another folder named <code>Documents</code>.</p>

<p>Inside <code>Documents</code> I created a folder called <code>so-you-are</code> (a book idea I’ve been working on) which I then aliased in my <code>~.zshrc</code> file like so:</p>

<pre><code>alias soyouare=“~/Library/Mobile\ Documents/74ZAFF46HB~jp~informationarchitects~Writer/Documents/so-you-are”</code></pre>

<p>Once I navigated into that folder, it was <code>git init</code> and <code>git add remote origin</code> as you’d expect!</p>

<p>Thanks to <a href="https://danielmiessler.com/blog/access-icloud-drive-terminal/" target="_blank">Daniel Miessler</a> who wrote about this in the first place (although his article wasn’t exactly what people wanted, see comments) and this <a href="http://superuser.com/questions/827827/access-icloud-drive-via-terminal" target="_blank">SuperUser thread</a>.</p>
