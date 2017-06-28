---
layout: page
title: DAIS Lab Members
permalink: /members/
description: Current students and alumni.
---
<link rel="stylesheet" href="{{ '/assets/css/members.css' | prepend: site.baseurl | prepend: site.url }}">

<h4>
<a class="btn fil-cat" data-rel="All">All</a> |
<a class="btn fil-cat" data-rel="PhD">PhD</a> | 
<a class="btn fil-cat" data-rel="MASc">MASc</a> |
<a class="btn fil-cat" data-rel="BASc">BASc</a>
</h4>

<hr>
<div id="members">
{% for member in site.members %}
{% if member.status == 'Current' %}
    <a class="tile All {{ member.program }} {{ member.status }}" href="{{ member.url | prepend: site.baseurl | prepend: site.url }}"> 
        <figure>
            <img src="{{ member.img | prepend: site.baseurl | prepend: site.url }}">
            <figcaption>    
            <b> {{ member.title }} </b>
            <p><small>{{ member.program }} | since {{ member.year_start }} </small></p>
            </figcaption>
        </figure>
    </a>
{% endif %}
{% endfor %}
</div>

<br>
<h1>Alumni</h1>
<h4>
<a class="btn fil-cat-alumni" data-rel="All">All</a> |
<a class="btn fil-cat-alumni" data-rel="RA">RA</a> | 
<a class="btn fil-cat-alumni" data-rel="PDF">PDF</a> | 
<a class="btn fil-cat-alumni" data-rel="PhD">PhD</a> | 
<a class="btn fil-cat-alumni" data-rel="MASc">MASc</a> |
<a class="btn fil-cat-alumni" data-rel="MEng">MEng</a> |
<a class="btn fil-cat-alumni" data-rel="BASc">BASc</a>
</h4>
<hr>

<div id="alumni">
{% for member in site.members %}
{% if member.status == 'Alumni' %}
    <a class="tile All {{ member.program }} {{ member.status }}" href="{{ member.url | prepend: site.baseurl | prepend: site.url }}"> 
        <figure>
            <img src="{{ member.img | prepend: site.baseurl | prepend: site.url }}">
            <figcaption>    
            <b> {{ member.title }} </b>
            <p><small>{{ member.program }} | {{ member.year_start }} - {{ member.year_end }} </small></p>
            </figcaption>
        </figure>
    </a>
{% endif %}
{% endfor %}
</div>
