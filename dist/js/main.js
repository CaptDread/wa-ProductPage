"use strict";

var packBtn = document.querySelectorAll('.package_btn');

var _loop = function _loop(s) {
  packBtn[s].addEventListener('click', function () {
    var activeBuild = document.querySelector('#active_build');
    var activeBtn = document.querySelector("#active_btn");
    var vanBuildImg = document.querySelectorAll(".van_build-img");
    var packageLabel = document.querySelectorAll('.package label img');
    activeBuild.id = '';
    vanBuildImg[s + 1].setAttribute('id', 'active_build');

    if (activeBtn != null) {
      activeBtn.id = '';
      packageLabel[s].setAttribute('id', 'active_btn');
    } else {
      packageLabel[s].setAttribute('id', 'active_btn');
    }
  });
};

for (var s = 0; s < packBtn.length; s++) {
  _loop(s);
}
//# sourceMappingURL=main.js.map
