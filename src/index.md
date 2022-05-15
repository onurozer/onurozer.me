---
# Feel free to add content and custom Front Matter to this file.

layout: default
title: Onur Ozer
---

<div class="w-32 mb-6">
  <img src="<%= site.metadata.photo %>" alt="" class="rounded-full" />
</div>
  
# Hi! I'm Onur

I'm [@onurozer](<%= site.metadata.social.twitter %>). Born and grew up in Istanbul, lived in Singapore for 10 years and now based in Switzerland. I work startup founders with their marketing at [Simple Matters](<%= site.metadata.social.simplematters %>), host the [Strategy & Sourdough](https://www.strategyandsourdough.com) podcast.

<% unless site.data.projects.empty? %>

## Projects

<%= render "projects" %>
<% end %>

<% unless collections.posts.resources.empty? %>

## Posts

<%= render "posts" %>
<% end %>
