$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "Customer Login",
  "description": "As a client,\r\nI want to login",
  "id": "customer-login",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 31,
  "name": "Login negative",
  "description": "",
  "id": "customer-login;login-negative",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 30,
      "name": "@loginTest"
    },
    {
      "line": 30,
      "name": "@wip"
    }
  ]
});
formatter.step({
  "line": 32,
  "name": "the user is on Login page",
  "keyword": "Given "
});
formatter.step({
  "line": 33,
  "name": "he enters \"\u003cusername\u003e\" as username",
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "he enters \"\u003cpassword\u003e\" as password",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "he submits request for login",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "ensure a login failure message \"\u003cexpected_failure_message\u003e\" is displayed",
  "keyword": "Then "
});
formatter.examples({
  "line": 37,
  "name": "",
  "description": "",
  "id": "customer-login;login-negative;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "expected_failure_message"
      ],
      "line": 38,
      "id": "customer-login;login-negative;;1"
    },
    {
      "cells": [
        "user",
        "parola",
        "Invalid token session. Please login again."
      ],
      "line": 39,
      "id": "customer-login;login-negative;;2"
    },
    {
      "cells": [
        "u",
        "p",
        "Invalid token session. Please login again."
      ],
      "line": 40,
      "id": "customer-login;login-negative;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 6954402020,
  "status": "passed"
});
formatter.scenario({
  "line": 39,
  "name": "Login negative",
  "description": "",
  "id": "customer-login;login-negative;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 30,
      "name": "@wip"
    },
    {
      "line": 30,
      "name": "@loginTest"
    }
  ]
});
formatter.step({
  "line": 32,
  "name": "the user is on Login page",
  "keyword": "Given "
});
formatter.step({
  "line": 33,
  "name": "he enters \"user\" as username",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "he enters \"parola\" as password",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "he submits request for login",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "ensure a login failure message \"Invalid token session. Please login again.\" is displayed",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTest.theUserIsOnLoginPage()"
});
formatter.result({
  "duration": 4566571028,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "user",
      "offset": 11
    }
  ],
  "location": "LoginTest.heEntersAsUsername(String)"
});
formatter.result({
  "duration": 216283856,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "parola",
      "offset": 11
    }
  ],
  "location": "LoginTest.heEntersAsPassword(String)"
});
formatter.result({
  "duration": 257460569,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.heSubmitsRequestForLogin()"
});
formatter.result({
  "duration": 728713603,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Invalid token session. Please login again.",
      "offset": 32
    }
  ],
  "location": "LoginTest.ensureALoginFailureMessageIsDisplayed(String)"
});
formatter.result({
  "duration": 156091177,
  "status": "passed"
});
formatter.after({
  "duration": 1491893487,
  "status": "passed"
});
formatter.before({
  "duration": 2633096376,
  "status": "passed"
});
formatter.scenario({
  "line": 40,
  "name": "Login negative",
  "description": "",
  "id": "customer-login;login-negative;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 30,
      "name": "@wip"
    },
    {
      "line": 30,
      "name": "@loginTest"
    }
  ]
});
formatter.step({
  "line": 32,
  "name": "the user is on Login page",
  "keyword": "Given "
});
formatter.step({
  "line": 33,
  "name": "he enters \"u\" as username",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "he enters \"p\" as password",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "he submits request for login",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "ensure a login failure message \"Invalid token session. Please login again.\" is displayed",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTest.theUserIsOnLoginPage()"
});
formatter.result({
  "duration": 4595683439,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "u",
      "offset": 11
    }
  ],
  "location": "LoginTest.heEntersAsUsername(String)"
});
formatter.result({
  "duration": 179344663,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "p",
      "offset": 11
    }
  ],
  "location": "LoginTest.heEntersAsPassword(String)"
});
formatter.result({
  "duration": 243888293,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.heSubmitsRequestForLogin()"
});
formatter.result({
  "duration": 839331010,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Invalid token session. Please login again.",
      "offset": 32
    }
  ],
  "location": "LoginTest.ensureALoginFailureMessageIsDisplayed(String)"
});
formatter.result({
  "duration": 147806560,
  "status": "passed"
});
formatter.after({
  "duration": 1112745919,
  "status": "passed"
});
});