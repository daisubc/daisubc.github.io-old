---
layout: page
permalink: /publications/
title: Publications
description: DAIS Lab Publications (Under Construction, PDF links older than 2017 are currently NOT working)
years: [2018,2017, 2016, 2015, 2014, 2013, 2012, 2011, 2010, 2009, 2008, 2007, 2006, 2005, 2004, 2003, 2002]
---

<h3>
<a class="btn fil-cat-pub" data-rel="all">All</a> |
<a class="btn fil-cat-pub" data-rel="article">Articles</a> | 
<a class="btn fil-cat-pub" data-rel="inproceedings">Conference Proceedings</a>
</h3>

<div id="pub">
<div class="all">
{% for y in page.years %}
  <h3 class="year">{{y}}</h3>
  {% bibliography -f papers -q @*[year={{y}}]* %}
{% endfor %}
</div>

<div class="article">
{% for y in page.years %}
  <h3 class="year">{{y}}</h3>
  {% bibliography -f papers -q @article[year={{y}}]* %}
{% endfor %}
</div>

<div class="inproceedings">
{% for y in page.years %}
  <h3 class="year">{{y}}</h3>
  {% bibliography -f papers -q @inproceedings[year={{y}}]* %}
{% endfor %}
</div>
</div>