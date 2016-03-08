(() => {
  'use strict';

  function HomeController($mdDialog, tokenService, studentService) {
    this.student = {};

    if (tokenService.isLoggedIn()) {
      tokenService.getStudentIdAccess().then(studentId => {
        studentService.getStudent(studentId).then(student => {
          this.student = student;
        }).catch(err => {
          $mdDialog.show($mdDialog.alert({
            title: 'Error',
            textContent: err.message,
            ok: 'OK'
          }));
        });
      });
    }
  }

  angular.module('betty.home').controller('HomeController', [
    '$mdDialog',
    'tokenService',
    'studentService',
    HomeController
  ]);
})();
