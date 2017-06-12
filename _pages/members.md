---
layout: page
title: Members
permalink: /members/
description: Current students and alumni.
---
<link rel="stylesheet" href="{{ '/assets/css/members.css' | prepend: site.baseurl | prepend: site.url }}">

<div class="toolbar">
  <button class="btn fil-cat" href="" data-rel="All">All</button>
  <button class="btn fil-cat" data-rel="PhD">PhD</button>
  <button class="btn fil-cat" data-rel="MASc">MASc</button>
  <button class="btn fil-cat" data-rel="BASc">BASc</button>
</div> 

<hr>
<div id="members">
{% for member in site.members %}
{% if member.status == 'Current' %}
    <a class="tile All {{ member.program }} {{ member.status }}" href="{{ member.url | prepend: site.baseurl | prepend: site.url }}"> 
        <figure>
            <img src="{{ member.img | prepend: site.baseurl | prepend: site.url }}">
            <figcaption>    
            <b> {{ member.title }} </b> | {{ member.program }}
            </figcaption>
        </figure>
    </a>
{% endif %}
{% endfor %}
</div>

<br>
<h1>Alumni</h1>
<div class="toolbar">
  <button class="btn fil-cat-alumni" href="" data-rel="All">All</button>
  <button class="btn fil-cat-alumni" data-rel="PhD">PhD</button>
  <button class="btn fil-cat-alumni" data-rel="MASc">MASc</button>
  <button class="btn fil-cat-alumni" data-rel="BASc">BASc</button>
</div> 
<hr>

<div id="alumni">
{% for member in site.members %}
{% if member.status == 'Alumni' %}
    <a class="tile All {{ member.program }} {{ member.status }}" href="{{ member.url | prepend: site.baseurl | prepend: site.url }}"> 
        <figure>
            <img src="{{ member.img | prepend: site.baseurl | prepend: site.url }}">
            <figcaption>    
            <b> {{ member.title }} </b> | {{ member.program }}
            </figcaption>
        </figure>
    </a>
{% endif %}
{% endfor %}
</div>
