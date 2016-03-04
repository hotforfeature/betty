(() => {
  'use strict';

  function tokenService($http) {
    return {
      currentToken: null,

      createToken(username, password) {
        return new Promise((resolve, reject) => {
          $http.get('https://www.pshschoir.com/betty/rest/tokens.php', {
            params: {
              user: username,
              pass: password
            }
          }).then(response => {
            if (response.data.success) {
              this.currentToken = {
                token: response.data.token,
                studentIdAccess: response.data.studentIdAccess,
                idAccess: response.data.idAccess
              };

              resolve(this.currentToken);
            } else {
              reject(new Error(response.data.message));
            }
          }).catch(reject);
        });
      }
    };
  }

  angular.module('betty.login').factory('tokenService', [
    '$http',
    tokenService
  ]);
})();
