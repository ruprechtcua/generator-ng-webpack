'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.Base.extend({
  prompting: function () {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Enough said. ' + chalk.yellow('generator-ng-webpack') + ' generator!'
    ));

    var prompts = [{
      type: 'input',
      name: 'name',
      message: 'Application name?',
      default: 'es6-ng-webpack'
    },{
      type: 'confirm',
      name: 'hasTest',
      message: 'Include Jasmine with Karma test runner?',
      default: true
    },{
      type: 'confirm',
      name: 'hasBootstrap',
      message: 'Include Bootstrap with Stylus pre-processor?',
      default: true
    }];

    return this.prompt(prompts).then(function (props) {
      // To access props later use this.props.someAnswer;
      this.props = props;
    }.bind(this));
  },

  writing: {
    config: function () { 
      this.fs.copyTpl(
        this.templatePath('_package.json'),
        this.destinationPath('package.json'),
        { props: this.props }
      );
    },
    app: function () {

    }
  },

  install: function () {
    this.installDependencies();
  }
});
