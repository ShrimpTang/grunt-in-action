'use strict';

module.exports = function (grunt) {
    require('load-grunt-tasks')(grunt);
    require('time-grunt')(grunt);
    var config = {
        app: 'app',
        dist: 'dist'
    }
    grunt.initConfig({
        config: config,
        copy: {
            //方法1--------------------------
            //dist_html: {
            //    src:'<%= config.app %>/index.html',
            //    dest:'<%= config.dist %>/index.html'
            //},
            //dist_js: {
            //    src:'<%= config.app %>/js/index.js',
            //    dest:'<%= config.dist %>/js/index.js'
            //}

            //方法2--------------------------
            //dist:{
            //    files:[
            //        {
            //            src:'<%= config.app %>/index.html',
            //            dest:'<%= config.dist %>/index.html'
            //        },{
            //            src:'<%= config.app %>/js/index.js',
            //            dest:'<%= config.dist %>/js/index.js'
            //        }
            //    ]
            //}

            //方法3--------------------------
            //dist:{
            //    files:{
            //        '<%= config.dist %>/index.html':'<%= config.app %>/index.html',
            //        '<%= config.dist %>/js/index.js':'<%= config.app %>/js/index.js'
            //    }
            //}


            dist:{
                files:[
                    {
                        expand:true,
                        cwd:'<%= config.app %>/',
                        src:'*.html',
                        dest:'<%= config.dist %>/',
                        ext:'.min.html',
                        extDot:'first'
                    }
                ]
            }
        },
        clean:{
            dist:{
              //  src:['<%= config.dist %>/index.html','<%= config.dist %>/js/index.js']
                src:'<%= config.dist %>/**/*',
                filter:'isFile'
            }
        }

    });
};