'use strict';

define('maya-light/tests/app.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | app');

  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });

  QUnit.test('elements/alerts/route.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'elements/alerts/route.js should pass ESLint\n\n');
  });

  QUnit.test('elements/buttons/route.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'elements/buttons/route.js should pass ESLint\n\n');
  });

  QUnit.test('foundations/branding/route.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'foundations/branding/route.js should pass ESLint\n\n');
  });

  QUnit.test('foundations/color/route.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'foundations/color/route.js should pass ESLint\n\n');
  });

  QUnit.test('home/route.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'home/route.js should pass ESLint\n\n');
  });

  QUnit.test('resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint\n\n');
  });

  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
  });
});
define('maya-light/tests/helpers/destroy-app', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = destroyApp;
  function destroyApp(application) {
    Ember.run(application, 'destroy');
  }
});
define('maya-light/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'maya-light/tests/helpers/start-app', 'maya-light/tests/helpers/destroy-app'], function (exports, _qunit, _startApp, _destroyApp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  exports.default = function (name) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _startApp.default)();

        if (options.beforeEach) {
          return options.beforeEach.apply(this, arguments);
        }
      },
      afterEach: function afterEach() {
        var _this = this;

        var afterEach = options.afterEach && options.afterEach.apply(this, arguments);
        return Ember.RSVP.resolve(afterEach).then(function () {
          return (0, _destroyApp.default)(_this.application);
        });
      }
    });
  };
});
define('maya-light/tests/helpers/resolver', ['exports', 'maya-light/resolver', 'maya-light/config/environment'], function (exports, _resolver, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var resolver = _resolver.default.create();

  resolver.namespace = {
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix
  };

  exports.default = resolver;
});
define('maya-light/tests/helpers/start-app', ['exports', 'maya-light/app', 'maya-light/config/environment'], function (exports, _app, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = startApp;
  function startApp(attrs) {
    var attributes = Ember.merge({}, _environment.default.APP);
    attributes = Ember.merge(attributes, attrs); // use defaults, but you can override;

    return Ember.run(function () {
      var application = _app.default.create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
      return application;
    });
  }
});
define('maya-light/tests/test-helper', ['maya-light/tests/helpers/resolver', 'ember-qunit', 'ember-cli-qunit'], function (_resolver, _emberQunit, _emberCliQunit) {
  'use strict';

  (0, _emberQunit.setResolver)(_resolver.default);
  (0, _emberCliQunit.start)();
});
define('maya-light/tests/tests.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | tests');

  QUnit.test('helpers/destroy-app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/module-for-acceptance.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/start-app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass ESLint\n\n');
  });

  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });

  QUnit.test('unit/elements/alerts/route-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/elements/alerts/route-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/elements/buttons/route-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/elements/buttons/route-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/foundations/branding/route-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/foundations/branding/route-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/foundations/color/route-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/foundations/color/route-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/home/route-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/home/route-test.js should pass ESLint\n\n');
  });
});
define('maya-light/tests/unit/elements/alerts/route-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:elements/alerts', 'Unit | Route | elements/alerts', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('maya-light/tests/unit/elements/buttons/route-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:elements/buttons', 'Unit | Route | elements/buttons', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('maya-light/tests/unit/foundations/branding/route-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:foundations/branding', 'Unit | Route | foundations/branding', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('maya-light/tests/unit/foundations/color/route-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:foundations/color', 'Unit | Route | foundations/color', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('maya-light/tests/unit/home/route-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:home', 'Unit | Route | home', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
require('maya-light/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
