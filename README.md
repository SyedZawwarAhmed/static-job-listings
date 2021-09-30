# Frontend Mentor - Job listings with filtering solution

This is a solution to the [Job listings with filtering challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/job-listings-with-filtering-ivstIPCt). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Filter job listings based on the categories

### Screenshot

![Desktop preview](public/images/desktop-preview)

### Links

- Solution URL: [github.com/SyedZawwarAhmed/static-job-listings](https://github.com/SyedZawwarAhmed/static-job-listings)
- Live Site URL: [staticjoblistings.netlify.app](https://staticjoblistings.netlify.app)

## My process

### Built with

- [React](https://reactjs.org/) - JS library
- CSS custom properties
- Flexbox
- CSS Grid

### What I learned

The most important thing I learned while making this that when the state of a functional component is changed, its value can't be immediately accessed on the same render. You have to call the setState function which the useState hook returns to access the recently updated state.

Here is the code snippet of what I am talking about:

```js
const applyFilter = (newFilter) => {
  setIsFilterApplied(true);
  if (!filter.map((item) => item[1]).includes(newFilter[1])) {
    setFilter((filter) => [...filter, newFilter]);
  }
  setFilter((filter) => {
    for (let i = 0; i < data.length; i++) {
      const item = data[i];
      let filterPassed = true;

      for (let j = 0; j < filter.length; j++) {
        const filterItem = filter[j];
        if (filterItem[0] === "languages") {
          filterPassed = item[filterItem[0]].includes(filterItem[1]);
        } else {
          filterPassed = filterItem[1] === item[filterItem[0]];
        }

        if (!filterPassed) break;
      }
      item.filterApplied = filterPassed;
    }
    return filter;
  });
};
```

### Continued development

The most important thing I want to focus on in the future is the **useEffect** hook. I know when it's used but the how part is to be worked on.

### Useful resources

- [stackoverflow](https://www.stackoverflow.com) - As always, when I got stuck, stackoverflow helped me get through.
- [React](https://reactjs.org/docs/hooks-reference.html#useeffect) - This is an amazing article which helped me get a know how of the useEffect Hook. I'd recommend it to anyone still learning this concept.


## Author

- Website - [Syed Zawwar Ahmed](https://zawwarahmed.netlify.app)
- Frontend Mentor - [@SyedZawwarAhmed](https://www.frontendmentor.io/profile/SyedZawwarAhmed)
- Github - [@SyedZawwarAhmed](https://github.com/SyedZawwarAhmed)
- LinkedIn - [@SyedZawwarAhmed](https://www.linkedin.com/in/syed-zawwar-ahmed-b7345a1b8/)