---
# Feel free to add content and custom Front Matter to this file.

layout: default
title: Onur Ozer
---

<div class="w-32 mb-6">
  <img src="<%= site.metadata.photo %>" alt="" class="rounded-full" />
</div>
  
# Marketer turned bootstrapper.

Hi, I'm Onur. I'm the founder of [Simple Matters](https://simplematters.co/), where I help startup founders on marketing and growth. Currently, I'm on a quest to learn how to build better products and make a living on the web.

<% unless collections.posts.resources.empty? %>

## Posts

<%= render "posts" %>
<% end %>

<% unless site.data.projects.empty? %>

## Projects

<%= render "projects" %>
<% end %>
