---
layout: page
title: Contact
classes:
  - contact
permalink: /contact/
---

Please contact me to set up your first **FREE** consult and workout!  
Give it a go to see if I am the right fit for you.

<form accept-charset="UTF-8" action="https://formkeep.com/f/db39ef75fa2d" method="POST" class="contact-form">
  <input type="hidden" name="utf8" value="✓">
  <label id="form_name">
    Name
    <input type="text" name="name" placeholder="Jane Doe" id="form_name"/>
  </label>
  <label id="form_email">
    Email
    <input type="text" name="email" type="email" id="form_email" placeholder="you@yoursite.com" />
  </label>
  <label id="form_subject">
    Subject
    <input type="text" name="subject" placeholder="Looking for a trainer" id="form_subject"/>
  </label>
  <label id="form_message">
    Message
    <textarea type="text" name="message" placeholder="" id="form_message"></textarea>
  </label>

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
2135 W Anderson Ln. Austin, TX
