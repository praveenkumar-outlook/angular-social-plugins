// Karma configuration
// Generated on Wed Oct 10 2018 13:59:10 GMT+0530 (India Standard Time)

module.exports = (config) => {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      'node_modules/angular/angular.js',
      'node_modules/angular-mocks/angular-mocks.js',
      'src/index.js',
      'src/**/*spec.js'
    ],
    exclude: [
    ],
    preprocessors: {
      'src/index.js': ['webpack']
    },
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false,
    concurrency: Infinity
  });
};
