## Notes
- Only 'master' branch has been used. In a real build I would use feature branches in conjunction with a dev site with 'master' reserved for production code only.
- Please note the responsive-property() mixin. This uses the grid breakpoints to calculate a scaled CSS value, allowing any numerical CSS value to responsively scale in sync with all others on the site (font-size, margin, padding, etc. all scaling in harmony). 1600px and above will show fixed desktop size from the design. 640px and below will show a fixed mobile size (determined by me), and then anything inbetween those breakpoints will be a calculated, scaled, size that is between the desktop/mobile values.
- Design: 9 different shades of grey are used, seems unnecessary/could be more consistent.
- Headings font: Medium looked more like design over Bold. This may be due to not being the Pro version of the font.
- Site is not SSR.
- No 404 error page.
- Design: Font styling on 'Brand Strategy' has a letter spacing of 0.57px which equates to 0.00053em which seems redundant.
- useScrollPosition hook not written by me (https://github.com/n8tb1t/use-scroll-position)
- Design: Social media icons were not downloadable SVGs via XD so I've used my own ones (just a heads up if they're not an exact match)