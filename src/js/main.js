let packBtn = document.querySelectorAll('.package_btn')

for (let s = 0; s < packBtn.length; s++) {
    packBtn[s].addEventListener('click', function() {
        let activeBuild = document.querySelector('#active_build')
        let activeBtn = document.querySelector(`#active_btn`)
        let vanBuildImg = document.querySelectorAll(`.van_build-img`)
        let packageLabel = document.querySelectorAll('.package label img')
        activeBuild.id = ''
        vanBuildImg[s + 1].setAttribute('id', 'active_build')
        if (activeBtn != null) {
            activeBtn.id = ''
            packageLabel[s].setAttribute('id', 'active_btn')
        } else {
            packageLabel[s].setAttribute('id', 'active_btn')

        }

    })
}
