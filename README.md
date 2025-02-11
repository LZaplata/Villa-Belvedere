# After theme installation

1. Copy theme `gulpfile.js` file from to the project directory.

2. Navigate to the project root directory and install all needed packages via `npm` command (node ^12.22, npm ^6.14 required).

`npm i gulp sass gulp-sass@4.1.1 gulp-clean-css bootstrap@5.1.3 @popperjs/core bootstrap-icons jquery swiper mc-datepicker`

3. Run gulp command to compile all assets.

`gulp`

## Watching SASS file changes

You can run watch command while styling the theme to automatically compile you assets.

`npm watch`
