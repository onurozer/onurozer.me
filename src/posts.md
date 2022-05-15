---
layout: page
title: Posts
---

<% unless collections.posts.resources.empty? %>
<%= render "posts" %>
<% end %>

If you have a lot of posts, you may want to consider adding [pagination](https://www.bridgetownrb.com/docs/content/pagination)!
