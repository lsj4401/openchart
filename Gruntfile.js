module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    jshint: {
      // jshint를 적용할 파일 선택
      all: ['src/*.js'],

      options: {
        // error 검출 시 task를  fail시키지 않고 계속 진단
        force: true
      }
    },

    concat:{
      basic: {
        //concat 타겟 설정(앞에서부터 순서대로 합쳐진다.)
        src: ['src/core.js'],

        //concat 결과 파일
        dest: 'build/visual.js'
      }
    },

    uglify: {
      options: {
        //파일의 맨처음 붙는 banner 설정
        banner: '/* visual.js <%= grunt.template.today("yyyy-mm-dd") %> / '

        //false - 변수명과 함수명의 변형을 막는다
        mangle: false,

        compress: {
          //true - console 제거
          dropconsole: true
        },

        // 코드의 syntax 유지
        beutify: true
      },
      build: {
        //uglify할 대상 설정
        src: 'build/visual.js',

        //uglify 결과 파일 설정
        dest: 'build/visual.min.js'
      }
    },

  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['jshint', 'concat', 'uglify']);
};
