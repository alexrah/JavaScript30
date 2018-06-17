'use strict';

var _jquerySlimMin = require('../node_modules/jquery/dist/jquery.slim.min.js');

var _jquerySlimMin2 = _interopRequireDefault(_jquerySlimMin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _jquerySlimMin2.default)(document).ready(function () {

    var spacing = document.querySelector('#spacing');

    spacing.addEventListener('change', function (e) {
        console.log(e);
    });
}); /**
     * Created by ale on 05/01/18.
     */
//# sourceMappingURL=main.js.map