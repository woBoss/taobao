var gulp = require("gulp");
var uglify = require("gulp-uglify");
var imagemin = require("gulp-imagemin");
var stylus = require("gulp-stylus");
var del = require("del");

var paths = {
	styles : "./develop/stylus/*.styl",
	scripts : "./develop/js/*.js",
	images : "./develop/image/*"
};

gulp.task("clean-image", function(){
	return del("./product/image");
});

gulp.task("clean-css", function(){
	return del("./product/css");
});

gulp.task("clean-js", function(){
	return del("./product/js");
});

gulp.task("scripts", ["clean-js"], function(){
	return gulp.src(paths.scripts).pipe(gulp.dest("./product/js"));
});

gulp.task("images", ["clean-image"], function(){
	return gulp.src(paths.images).pipe(imagemin()).pipe(gulp.dest("./product/image"));
});

gulp.task("styles", ["clean-css"], function(){
	return gulp.src(paths.styles).pipe(stylus({
		compress : 1
	})).pipe(gulp.dest("./product/css"));
});

gulp.task("watch", function() {
	gulp.watch(paths.scripts, ["scripts"]);
	gulp.watch(paths.images, ["images"]);
	gulp.watch(paths.styles, ["styles"]);
});

gulp.task("default", ["watch", "scripts", "images", "styles"]);