# Project on JS and the DOM
*by Danni Malka*
---

<p>Project for Masterschool - the goal is to create a dynamic page including a dynamic navbar and a dynamic subscribe button.</p>

---

## Table of Contents

* styles.css
* index.html
* app.js
  
---

### Styles.css

Each section has been separated into it's own CSS file: styles.css - main css file
| Css Sheets |  usage | |
| :---: | :---: | :---: |
|header.css | the header| 
|main.css | 1st section (the Hero) |
|values.css|  2nd section 
|explore.css| 3rd section 
|article.css| 4th section 
|section1.css| 5th section 
|section2.css| 6th section 
|footer.css| the footer

.active can be found in styles.css

.active-XXX can be found in the header.css

---

### app.js


"navbar" is the ID of the body -> header -> nav -> ul [data-nav] is the attribute given to each section found in the navbar:

data-nav="Showcase" data-nav="How we do it" data-nav="Our Projects" data-nav="Testimonials" data-nav="Subscribe"

.line1 .line2 .line3 .x - are empty div elements inside the nav, the lines are used for styling the burger menu and the X is used for... you guessed it, closing the burger menu interface.

the JS file has been divided into 3 sections:

Part 1 - Smooth scroll & add li elements will add elements to the navbar and makes smooth scroll

Part 2 - Navbar Highlighter will highlight the current section being scrolled through on the navbar

Part3 - Burgermenu is used for the Burgermenu, it will toggle on/off the burgermenu aswell as the X on the open interface. (they should really call it salad menu this makes me way too hungry)

Part4 - Subscribe form (will display a message when form is submitted)

---

### index.html

nav can be found at the top at line 19
the form can be found starting from line 210




