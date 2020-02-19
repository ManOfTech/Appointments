window.getApiV1Appointments = function() {
          var allData = {
            method: 'GET',
            route: '/api/v1/appointments',
          };
          var paramList = document.getElementById('getApiV1AppointmentsParamsForm') && document.getElementById('getApiV1AppointmentsParamsForm').elements ? document.getElementById('getApiV1AppointmentsParamsForm').elements : [];
          var headerList = document.getElementById('getApiV1AppointmentsHeadersForm') && document.getElementById('getApiV1AppointmentsHeadersForm').elements ? document.getElementById('getApiV1AppointmentsHeadersForm').elements : [];
          
          var headerObject = {};
          var tempHeaderKey = null;
          for (var i = 0; i < headerList.length; i++) {
              var eleHeader = headerList[i].value;
              if (i % 2 !== 0 && tempHeaderKey) {
                  headerObject[tempHeaderKey] = eleHeader;
                  tempHeaderKey = null;
              } else {
                  tempHeaderKey = eleHeader;
              }
          }
    
          var hasHeaders = Object.keys(headerObject).length > 0;
          var headers = { headers: headerObject };
  
          var paramObject = {};
          var tempParamKey = null;
          for (var i = 0; i < paramList.length; i++) {
            var eleParam = paramList[i].value;
            if (i % 2 !== 0) {
              paramObject[':' + tempParamKey] = eleParam;
              tempParamKey = null;
            } else {
              tempParamKey = eleParam;
            }
          }
          
          var routeName = allData.route.split('/').map(function(e) { return paramObject[e] ? paramObject[e] : e; }).join('/');
          
          if (allData.method !== 'GET') {
          var bodyDataType = document.getElementById('getApiV1AppointmentsDataType') && document.getElementById('getApiV1AppointmentsDataType').value ? document.getElementById('getApiV1AppointmentsDataType').value : false;
          var formBoolean = bodyDataType === 'Form Data';
          
          var bodyElements = [];
          var bodyRawElements = document.getElementById('getApiV1AppointmentsBodyForm') && document.getElementById('getApiV1AppointmentsBodyForm').elements ? document.getElementById('getApiV1AppointmentsBodyForm').elements : [];
          for (var i = 0; i < bodyRawElements.length; i++) {
            var eleParam = bodyRawElements[i].files ? bodyRawElements[i].files[0] : (bodyRawElements[i].value || null);
            bodyElements.push(eleParam);
          }
          bodyElements = bodyElements.filter(function(e) {
            return !!e;
          });
          
          var bodyObject = bodyDataType === 'Form Data' ? new FormData() : {};
          var tempBodyKey = null;
          bodyElements.forEach(function(e, i) {
              if (i % 2 !== 0) {
                if (formBoolean) {
                  bodyObject.append(tempBodyKey, e);
                  tempBodyKey = null;
                } else {
                  bodyObject[tempBodyKey] = e;
                  tempBodyKey = null;
                }
              } else {
                if (formBoolean) {
                  tempBodyKey = e;
                } else {
                  bodyObject[e] = null;
                  tempBodyKey = e;
                }
              }
            });
          }
          
          var qsElements = [];
          var qsRawElements = document.getElementById('getApiV1AppointmentsQSForm') && document.getElementById('getApiV1AppointmentsQSForm').elements ? document.getElementById('getApiV1AppointmentsQSForm').elements : [];
          for (var i = 0; i < qsRawElements.length; i++) {
            var eleParam = qsRawElements[i].value || null;
            qsElements.push(eleParam);
          }
          
          qsElements = qsElements.filter(function(e) { return !!e; });
          
          var qsObject = {};
          var tempQSKey = null;
          qsElements.forEach(function(e, i) {
            if (i % 2 !== 0) {
              qsObject[tempQSKey] = e;
              tempQSKey = null;
            } else {
              qsObject[e] = null;
              tempQSKey = e;
            }
          });
          
          var qsLength = Object.keys(qsObject).length;
          var querystring = qsLength > 0 ? '?' : '';

          var qsCount = 0;
          var qsArray = [];
          if (querystring === '?') {
            for (var qs in qsObject) {
              if (qs && qsObject[qs]) {
                qsArray.push(qs + '=' + qsObject[qs]);
              }
            }
          }

          querystring += qsArray.join('&');
          
          var args = allData.method === 'GET' || allData.method === 'DELETE' ? [routeName + querystring, headers] : [routeName + querystring, bodyObject, headers];
          if (!hasHeaders) args.pop();
          var resultElement = document.getElementById('getApiV1Appointments-results');
          
          axios[allData.method.toLowerCase()](...args)
            .then(function(resp) {
              if (resp.status <= 300) {
                resultElement.innerText = JSON.stringify(resp.data, null, 4);
              } else {
                resultElement.innerText = JSON.stringify(resp.data, null, 4);
              }
            })
            .catch(function(err) {
              var error_ajax = err && err.response && err.response.data ? err.response.data : err;
              resultElement.innerText = JSON.stringify(error_ajax, null, 4);
            });
          };
          window.getApiV1AppointmentsNewBody = function() {
            var ele = document.getElementById('getApiV1AppointmentsBodyForm');
            ele.innerHTML += '<div class="d-flex f-row"><input class="w-100 m-1 form-control" type="text" placeholder="Enter key"><input class="w-100 m-1 form-control" type="text" placeholder="Enter value"></div>';
          };
          
          window.getApiV1AppointmentsNewBodyFile = function() {
            var ele = document.getElementById('getApiV1AppointmentsBodyForm');
            ele.innerHTML += '<div class="d-flex f-row"><input class="w-100 m-1 form-control" type="text" placeholder="Enter key"><input class="w-100 m-1 form-control" type="file" multiple accept="*/*" placeholder="Enter value"></div>';
          };
          
          window.getApiV1AppointmentsNewQS = function() {
            var ele = document.getElementById('getApiV1AppointmentsQSForm');
            ele.innerHTML += '<div class="d-flex f-row"><input class="w-100 m-1 form-control" type="text" placeholder="Enter key"><input class="w-100 m-1 form-control" type="text" placeholder="Enter value"></div>';
          };
          window.getApiV1AppointmentsNewHeader = function() {
            var ele = document.getElementById('getApiV1AppointmentsHeadersForm');
            ele.innerHTML += '<div class="d-flex f-row"><input class="w-100 m-1 form-control" type="text" placeholder="Enter key"><input class="w-100 m-1 form-control" type="text" placeholder="Enter value"></div>';
          };

          