#jcorddion

Simple jQuery accordion plugin.

##installation

Using bower or import the script manually

```
$ bower install jccordion
```

##usage

Include the jcorddion script, and make sure to includ jQuery first

```html
	<script type='text/javascript' src='bower_components/jcorddion/dist/js/jquery.min.js'></script>
	<script type='text/javascript' src='bower_components/jcorddion/dist/js/jcorddion.jquery.js'></script>
```

If you are using the default _heading_ and _content_ selectors include the CSS file. Or add your own.
```html
	<link rel='stylesheet' href='bower_components/ng-cooltip/dist/ng-cooltip.min.css' type='text/css' />
```

Now you are ready to use it.

###the js

```js
// --- on document ready ---
$(function() {
	
    $('.faq-container').accordion({
        toggle: '.faq-heading',
        content: '.faq-content'
    });
});
```

###the css

**IMPORTANT**: when usen different _content_ and _heading_ selectors (not the default ones), in order for the acorddion to work propperly you have to add these lines of CSS.

```css
.faq-content {
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