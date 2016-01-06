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
        pkg:grunt.file.readJSON('package.json'),
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
        },
        uglify:{
            options:{
                stripBanners:true,
                banner:'/* <%= pkg.name %>-<%= pkg.version%>.js <%= grunt.template.today("yyyy-mm-dd")%>  */'
            },
            build:{
                //src:'<%= config.app %>/js/**/*',
                //dest:'<%= config.dist %>/js/**/*',
                files:[{
                    expand:true,
                    cwd:'<%= config.app%>/js/',
                    src:'**/*.js',
                    dest:'<%= config.dist%>/js/',
                    extDot:'last',
                    ext:'.min.js'
                }]
            }
        },
        jshint:{
            options:{
                jshintrc:'.jshintrc'
            },
            build:['<%= config.app %>/**/*.js']
        },
        watch:{
            build:{
                files:['<%= config.app%>/**/*.js'],
                tasks:['jshint','uglify'],
                options:{spawn:false}
            }
        }

    });
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default',['jshint','uglify','watch']);
};