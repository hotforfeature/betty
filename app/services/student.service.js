(() => {
  'use strict';

  function studentService($q, $http, tokenService) {
    return {
      getStudent(studentId) {
        return tokenService.getToken().then(token => {
          return new $q((resolve, reject) => {
            $http.get('https://www.pshschoir.com/betty/rest/students.php', {
              params: {
                token,
                studentId
              }
            }).then(response => {
              if (response.data.success) {
                resolve(response.data);
              } else {
                reject(new Error(response.data.message));
              }
            }).catch(reject);
          });
        });
      }
    };
  }

  angular.module('betty.services').factory('studentService', [
    '$q',
    '$http',
    'tokenService',
    studentService
  ]);
})();
