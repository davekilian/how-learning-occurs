document.addEventListener('DOMContentLoaded', initTextAnimSlider);

function initTextAnimSlider() {
	var textAnimHolder = document.querySelector('.vscroll-container');
	var textAnimItem = document.querySelectorAll('.vscroll-item');
	var textAnimItems = document.querySelector('.vscroll-items');
	var animIn = 'anim-in';
	var animOut = 'anim-out';
	var animNextItem = null;
	var animPrevItem = null;
	var animFirstLoad = false;
	var animDuration = 2000;
	var animCounter = 0;
	var setTimeAnim;
	var setTimeAnimResize;

	animFunc();

	function animFunc() {
		clearTimeout(setTimeAnim);

		setTimeAnim = setTimeout(function () {
			animFirstLoad = true;
			
			if (animPrevItem !== null) {
				animPrevItem.classList.add(animOut);
			}
			animNextItem = textAnimItems.children[animCounter];
			animNextItem.classList.remove(animOut);
			animNextItem.classList.add(animIn);

			animPrevItem = animNextItem;

            animCounter = (animCounter + 1) % textAnimItem.length;

			animFunc();

		}, animFirstLoad ? animDuration : 100);
	}
}