module.exports = function (gulp, config, plugins) {
    return function (done) {
      var completeCount = 0;
      function onComplete() {
        completeCount++;
        if(completeCount == 1) {
          done();
        }
      }
      gulp.src(config.tanks.resources, { base : config.tanks.resourcesBase })
        .pipe(gulp.dest(config.dist + "tanks/"))
        .on('end', onComplete);
    };
};
