---
# Feel free to add content and custom Front Matter to this file.

layout: default
title: Onur Ozer
---

<div class="w-32 mb-6">
  <img src="<%= site.metadata.photo %>" alt="" class="rounded-full" />
</div>
  
# Marketer turned bootstrapper.

Hi, I'm Onur. I'm the founder of [Simple Matters](https://simplematters.co/), where I help startup founders with marketing and growth. Currently, I'm learning [Ruby](http://ruby.social/@onurozer) and how to build SaaS products.

<% unless collections.posts.resources.empty? %>

## Posts

<%= render "posts" %>
<% end %>

<% unless site.data.projects.empty? %>

## Projects

<%= render "projects" %>
<% end %>
