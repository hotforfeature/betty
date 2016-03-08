(() => {
  'use strict';

  function tokenService($q, $http, $location) {
    let _currentToken = null;

    return {
      createToken(username, password) {
        return new $q((resolve, reject) => {
          $http.get('https://www.pshschoir.com/betty/rest/tokens.php', {
            params: {
              user: username,
              pass: password
            }
          }).then(response => {
            if (response.data.success) {
              _currentToken = {
                token: response.data.token,
                studentIdAccess: response.data.studentIdAccess,
                idAccess: response.data.idAccess
              };

              resolve(_currentToken);
            } else {
              reject(new Error(response.data.message));
            }
          }).catch(reject);
        });
      },

      getToken() {
        return new $q((resolve, reject) => {
          if (_currentToken) {
            resolve(_currentToken.token);
          } else {
            reject(new Error('You must be logged in'));
          }
        });
      },

      getStudentIdAccess() {
        return new $q((resolve, reject) => {
          if (_currentToken) {
            resolve(_currentToken.studentIdAccess);
          } else {
            reject(new Error('You must be logged in'));
          }
        });
      },

      getIdAccess() {
        return new $q((resolve, reject) => {
          if (_currentToken) {
            resolve(_currentToken.idAccess);
          } else {
            reject(new Error('You must be logged in'));
          }
        });
      },

      logout() {
        _currentToken = null;
        $location.path('/login');
      },

      isLoggedIn() {
        if (_currentToken) {
          return true;
        } else {
          this.logout();
          return false;
        }
      }
    };
  }

  angular.module('betty.services').factory('tokenService', [
    '$q',
    '$http',
    '$location',
    tokenService
  ]);
})();
