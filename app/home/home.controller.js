(() => {
  'use strict';

  function HomeController($mdDialog, tokenService, studentService) {
    this.student = {};
    this.loading = false;

    if (tokenService.isLoggedIn()) {
      this.loading = true;
      tokenService.getStudentIdAccess().then(studentId => {
        studentService.getStudent(studentId).then(student => {
          this.loading = false;
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
