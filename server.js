/**
 * Created by vitaliydrugak on 01.04.15.
 */

"use strict"

var fs = require('fs');

fs.readFile("dasdasdads", {encoding: 'utf-8'}, function(err, data){
    err ? console.log(err) : console.log(data);
});