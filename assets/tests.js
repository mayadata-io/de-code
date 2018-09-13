'use strict';

define('de-code/tests/app.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | app');

  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });

  QUnit.test('components/page-head/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/page-head/component.js should pass ESLint\n\n');
  });

  QUnit.test('elements/alerts/route.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'elements/alerts/route.js should pass ESLint\n\n');
  });

  QUnit.test('elements/avatars/route.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'elements/avatars/route.js should pass ESLint\n\n');
  });

  QUnit.test('elements/badge/route.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'elements/badge/route.js should pass ESLint\n\n');
  });

  QUnit.test('elements/banner/route.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'elements/banner/route.js should pass ESLint\n\n');
  });

  QUnit.test('elements/breadcrumb/route.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'elements/breadcrumb/route.js should pass ESLint\n\n');
  });

  QUnit.test('elements/buttons/route.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'elements/buttons/route.js should pass ESLint\n\n');
  });

  QUnit.test('elements/cards/route.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'elements/cards/route.js should pass ESLint\n\n');
  });

  QUnit.test('elements/dropdowns/route.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'elements/dropdowns/route.js should pass ESLint\n\n');
  });

  QUnit.test('elements/forms/route.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'elements/forms/route.js should pass ESLint\n\n');
  });

  QUnit.test('elements/index/route.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'elements/index/route.js should pass ESLint\n\n');
  });

  QUnit.test('elements/list/route.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'elements/list/route.js should pass ESLint\n\n');
  });

  QUnit.test('elements/modal/route.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'elements/modal/route.js should pass ESLint\n\n');
  });

  QUnit.test('elements/navbar/route.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'elements/navbar/route.js should pass ESLint\n\n');
  });

  QUnit.test('elements/navs/route.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'elements/navs/route.js should pass ESLint\n\n');
  });

  QUnit.test('elements/noty/route.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'elements/noty/route.js should pass ESLint\n\n');
  });

  QUnit.test('elements/paginations/route.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'elements/paginations/route.js should pass ESLint\n\n');
  });

  QUnit.test('elements/popover/route.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'elements/popover/route.js should pass ESLint\n\n');
  });

  QUnit.test('elements/progress/route.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'elements/progress/route.js should pass ESLint\n\n');
  });

  QUnit.test('elements/tables/route.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'elements/tables/route.js should pass ESLint\n\n');
  });

  QUnit.test('elements/tooltips/route.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'elements/tooltips/route.js should pass ESLint\n\n');
  });

  QUnit.test('foundations/branding/route.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'foundations/branding/route.js should pass ESLint\n\n');
  });

  QUnit.test('foundations/color/route.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'foundations/color/route.js should pass ESLint\n\n');
  });

  QUnit.test('foundations/icons/route.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'foundations/icons/route.js should pass ESLint\n\n');
  });

  QUnit.test('foundations/layouts/route.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'foundations/layouts/route.js should pass ESLint\n\n');
  });

  QUnit.test('foundations/typography/route.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'foundations/typography/route.js should pass ESLint\n\n');
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
define('de-code/tests/helpers/destroy-app', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = destroyApp;
  function destroyApp(application) {
    Ember.run(application, 'destroy');
  }
});
define('de-code/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'de-code/tests/helpers/start-app', 'de-code/tests/helpers/destroy-app'], function (exports, _qunit, _startApp, _destroyApp) {
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
define('de-code/tests/helpers/resolver', ['exports', 'de-code/resolver', 'de-code/config/environment'], function (exports, _resolver, _environment) {
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
define('de-code/tests/helpers/start-app', ['exports', 'de-code/app', 'de-code/config/environment'], function (exports, _app, _environment) {
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
define('de-code/tests/integration/components/page-head/component-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('page-head', 'Integration | Component | page head', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "uYvU9W9R",
      "block": "{\"symbols\":[],\"statements\":[[1,[18,\"page-head\"],false]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      "id": "XaNvgWHo",
      "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"page-head\",null,null,{\"statements\":[[0,\"      template block text\\n\"]],\"parameters\":[]},null],[0,\"  \"]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('de-code/tests/test-helper', ['de-code/tests/helpers/resolver', 'ember-qunit', 'ember-cli-qunit'], function (_resolver, _emberQunit, _emberCliQunit) {
  'use strict';

  (0, _emberQunit.setResolver)(_resolver.default);
  (0, _emberCliQunit.start)();
});
define('de-code/tests/tests.lint-test', [], function () {
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

  QUnit.test('integration/components/page-head/component-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/page-head/component-test.js should pass ESLint\n\n');
  });

  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });

  QUnit.test('unit/elements/alerts/route-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/elements/alerts/route-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/elements/avatars/route-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/elements/avatars/route-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/elements/badge/route-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/elements/badge/route-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/elements/banner/route-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/elements/banner/route-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/elements/breadcrumb/route-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/elements/breadcrumb/route-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/elements/buttons/route-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/elements/buttons/route-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/elements/cards/route-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/elements/cards/route-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/elements/dropdowns/route-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/elements/dropdowns/route-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/elements/forms/route-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/elements/forms/route-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/elements/index/route-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/elements/index/route-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/elements/list/route-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/elements/list/route-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/elements/modal/route-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/elements/modal/route-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/elements/navbar/route-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/elements/navbar/route-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/elements/navs/route-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/elements/navs/route-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/elements/noty/route-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/elements/noty/route-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/elements/paginations/route-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/elements/paginations/route-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/elements/popover/route-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/elements/popover/route-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/elements/progress/route-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/elements/progress/route-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/elements/tables/route-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/elements/tables/route-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/elements/tooltips/route-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/elements/tooltips/route-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/foundations/branding/route-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/foundations/branding/route-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/foundations/color/route-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/foundations/color/route-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/foundations/icons/route-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/foundations/icons/route-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/foundations/layouts/route-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/foundations/layouts/route-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/foundations/typography/route-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/foundations/typography/route-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/home/route-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/home/route-test.js should pass ESLint\n\n');
  });
});
define('de-code/tests/unit/elements/alerts/route-test', ['ember-qunit'], function (_emberQunit) {
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
define('de-code/tests/unit/elements/avatars/route-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:elements/avatars', 'Unit | Route | elements/avatars', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('de-code/tests/unit/elements/badge/route-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:elements/badge', 'Unit | Route | elements/badge', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('de-code/tests/unit/elements/banner/route-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:elements/banner', 'Unit | Route | elements/banner', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('de-code/tests/unit/elements/breadcrumb/route-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:elements/breadcrumb', 'Unit | Route | elements/breadcrumb', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('de-code/tests/unit/elements/buttons/route-test', ['ember-qunit'], function (_emberQunit) {
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
define('de-code/tests/unit/elements/cards/route-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:elements/cards', 'Unit | Route | elements/cards', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('de-code/tests/unit/elements/dropdowns/route-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:elements/dropdowns', 'Unit | Route | elements/dropdowns', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('de-code/tests/unit/elements/forms/route-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:elements/forms', 'Unit | Route | elements/forms', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('de-code/tests/unit/elements/index/route-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:elements/index', 'Unit | Route | elements/index', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('de-code/tests/unit/elements/list/route-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:elements/list', 'Unit | Route | elements/list', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('de-code/tests/unit/elements/modal/route-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:elements/modal', 'Unit | Route | elements/modal', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('de-code/tests/unit/elements/navbar/route-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:elements/navbar', 'Unit | Route | elements/navbar', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('de-code/tests/unit/elements/navs/route-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:elements/navs', 'Unit | Route | elements/navs', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('de-code/tests/unit/elements/noty/route-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:elements/noty', 'Unit | Route | elements/noty', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('de-code/tests/unit/elements/paginations/route-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:elements/paginations', 'Unit | Route | elements/paginations', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('de-code/tests/unit/elements/popover/route-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:elements/popover', 'Unit | Route | elements/popover', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('de-code/tests/unit/elements/progress/route-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:elements/progress', 'Unit | Route | elements/progress', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('de-code/tests/unit/elements/tables/route-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:elements/tables', 'Unit | Route | elements/tables', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('de-code/tests/unit/elements/tooltips/route-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:elements/tooltips', 'Unit | Route | elements/tooltips', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('de-code/tests/unit/foundations/branding/route-test', ['ember-qunit'], function (_emberQunit) {
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
define('de-code/tests/unit/foundations/color/route-test', ['ember-qunit'], function (_emberQunit) {
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
define('de-code/tests/unit/foundations/icons/route-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:foundations/icons', 'Unit | Route | foundations/icons', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('de-code/tests/unit/foundations/layouts/route-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:foundations/layouts', 'Unit | Route | foundations/layouts', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('de-code/tests/unit/foundations/typography/route-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:foundations/typography', 'Unit | Route | foundations/typography', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('de-code/tests/unit/home/route-test', ['ember-qunit'], function (_emberQunit) {
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
require('de-code/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
