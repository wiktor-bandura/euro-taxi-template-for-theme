# Euro Taxi Brzeg Webstite 🚖
### Static HTML CSS and JS files for Wordpress theme
---
## Table of contents 📚
- [General info](#general-info)
- [Technologies and tools](#technologies-and-tools)
- [How to run](#how-to-run)
---

### General info 💬
Front End for future Wrodpress theme for taxi corporation from Brzeg. 

🚕 [VISIT WEBSITE eurotaxibrzeg.eu](https://www.eurotaxibrzeg.eu) 🚕

### Technologies and tools 🛠


* [HTML5](https://html5.org/) 

  Example of my code in this project:
```html
<div class="information-group__content">
                    <ul class="information-group__content-list">
                        <li class="information-group__content-item">
                            <a href="https://www.linkedin.com/in/wiktor-bandura/" target="_blank" class="information-group__content-item-link">
                                <svg class="information-group__content-item-icon">
                                    <use xlink:href="img/symbol-defs.svg#icon-linkedin2"></use>
                                </svg>
                                <p class="information-group__content-item-text">
                                    Linkedin
                                </p>
                            </a>
                        </li>
                        <li class="information-group__content-item">
                            <a href="https://github.com/wiktor-bandura" target="_blank" class="information-group__content-item-link">
                                <svg class="information-group__content-item-icon">
                                    <use xlink:href="img/symbol-defs.svg#icon-github"></use>
                                </svg>
                                <p class="information-group__content-item-text">Github</p>
                            </a>
                        </li>
                    </ul>
                </div>
```

* [SCSS](https://sass-lang.com/)
* [BEM](https://getbem.com/)

```scss
.page-description {
  position: relative;
  grid-row: 3;
  background-color: $color-primary;
  padding: 4rem;
  box-shadow: 0 1.7rem 4rem rgba(#000,0.1);

  &__content {
    color: $color-grey-light;
    font-size: 1.6rem;
    max-width: 40%;
    margin-top: 2rem;
    @media only screen and (max-width: $bp-medium) {
      max-width: 100%;
  }
  }

  &__euro-taxi-logo {
    position: absolute;
    max-height: 100%;
    max-width: 40%;
    bottom: 0;
    right: 0;

    @media only screen and (max-width: $bp-medium) {
      display: none;
  }
  }
}
```
* [JavaScript ES6+]('https://www.javascript.com/')
  
  Example of my code in this project:

```js
const elementsToAnimate = document.querySelectorAll('.scroll-anim');
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);

        if(entry.isIntersecting) {
            entry.target.classList.add('fade');
        } else {
            entry.target.classList.remove('fade');
        }
    })
});

elementsToAnimate.forEach((el) => observer.observe(el));
```

### How to run it locally 💻

| Command        | Description  |
| ------------- |:-------------:|
| npm install      | Install all dependencies |
| npm run watch:sass     | Runs dev server      |
| npm run build:css | Compiles, concatenates and minimizes scss files      |

```bash
    npm install
    npm run watch:sass
    npm run build:css
```