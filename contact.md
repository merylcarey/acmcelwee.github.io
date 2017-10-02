---
layout: page
title: Contact
classes:
  - contact
permalink: /contact/
---

Thanks for visiting my site. I look forward to helping you achieve your health and fitness goals! Contact me below to get started.

<form method="POST" action="https://formspree.io/merylcarey@gmail.com" class="contact-form">
  <label id="name">
    Name
    <input type="text" name="name" placeholder="Jane Doe" id="name"/>
  </label>
  <label id="email">
    Email
    <input type="email" name="_replyto" id="email" placeholder="you@yoursite.com" />
  </label>
  <label id="subject">
    Subject
    <input type="text" name="subject" placeholder="Looking for a trainer" id="subject"/>
  </label>
  <label id="message">
    Message
    <textarea type="text" name="message" placeholder="" id="message"></textarea>
  </label>
  <input type="hidden" name="_next" value="{{site.url}}/thanks"/>

  <button type="submit" class="btn">Submit</button>
</form>

{% assign social_site = site.social[1] %}
<a class="icon icon-{{ social_site.icon }}" href="{{ social_site.url }}">
  <i class="fa fa-{{ social_site.icon }}"></i>
</a>
&nbsp;&nbsp;·&nbsp;&nbsp;{% assign social_site = site.social[0] %}
<a class="icon icon-{{ social_site.icon }}" href="{{ social_site.url }}">
  <i class="fa fa-{{ social_site.icon }}"></i>
</a>


Meryl Carey  
<merylcarey@gmail.com>  
2545 Brockton Dr #300, Austin, TX 78758
