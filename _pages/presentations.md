---
layout: page
permalink: /presentations/
title: Presentations
description: DAIS Group Presentation Slides
---

<table style="width:100%">
  <tr>
    <th>Title</th>
    <th>Date</th>
    <th>Author</th>
    <th>Description</th>
    <th>Link</th>
  </tr> 
  {% for presentation in site.presentations %}
    <tr>
      <td>{{presentation.title}}</td>
      <td>{{ presentation.date | date_to_long_string }}</td> 
      <td>{{presentation.author}}</td>
      <td>{{presentation.description}}</td>
      <td><a href="{{ presentation.link | prepend: site.baseurl | prepend: site.url }}">Download</a></td>
    </tr>
  {% endfor %}
</table>