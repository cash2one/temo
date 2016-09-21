"use strict";

var generators = require('yeoman-generator');

module.exports = generators.Base.extend({
  // 构造函数
  constructor: function () {

    // 调用父类构造函数
    generators.Base.apply(this, arguments);

    // 执行的时候接收 `--coffee` 参数
    this.option('coffee'); 
  },
  // prompting: function () {
  //   return this.prompt([{
  //     type    : 'input',
  //     name    : 'name',
  //     message : 'Your project name',
  //     default : this.appname // Default to current folder name
  //   }]).then(function (answers) {
  //     this.log('app name', answers.name);
  //   }.bind(this));
  // },
  init: function () {
    
  }
});