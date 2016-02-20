#bandoneon [![PRs Welcome](https://img.shields.io/badge/prs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

Simple jQuery accordion plugin. [Demo & docs!](http://gillchristian.github.io/bandoneon).

##installation

Using bower import the script manually

```
$ bower install bandoneon
```

##usage

Include the bandoneon script, and make sure to includ jQuery first

```html
	<script type='text/javascript' src='bower_components/bandoneon/dist/js/jquery.min.js'></script>
	<script type='text/javascript' src='bower_components/bandoneon/dist/js/bandoneon.jquery.js'></script>
```

If you are using the default _heading_ and _content_ selectors include the CSS file. Or add your own.
```html
	<link rel='stylesheet' href='bower_components/bandoneon/dist/bandoneon.css' type='text/css' />
```

Now you are ready to use it.

###the js

```js
// --- on document ready ---
$(function() {
	
    $('.faq-container').bandoneon({
        toggle: '.faq-heading',
        content: '.faq-content'
    });
});
```

###the css

**IMPORTANT**: when usen a different _content_ selector, in order for the acorddion to work propperly you have to add these lines of CSS.

```css
<content-selector> {
	display: none;
}

```


###the markup

```html
<div class='faq-container'>
	
	<div class='faq-heading'>Question 1</div>
	<div class="faq-content">
		Lorem ipsum dolor sit amet ...
	</div>
	
	<div class='faq-heading'>Question 2</div>
	<div class="faq-content">
		Lorem ipsum dolor sit amet ...
	</div>
	
	<div class='faq-heading'>Question 3</div>
	<div class="faq-content">
		Lorem ipsum dolor sit amet ...
	</div>
	
</div>
```
