import { Functionality } from './Functionality';

export class ToggleGoUpArrowOnScroll implements Functionality {
	private toggleDiv = document.querySelector(`.overlay`);
	private arrowDiv = document.querySelector(`.go-up`);

	constructor() {
		this.arrowDiv.addEventListener('click', () => {
			window.scrollTo(0, 0);
		});
	}

	init(): void {
		const int = new IntersectionObserver((items) => {
			const toggleDiv = items[0];

			if (toggleDiv.isIntersecting) {
				this.arrowDiv.classList.remove('go-up--active');
			} else {
				this.arrowDiv.classList.add('go-up--active');
			}
		});

		int.observe(this.toggleDiv);
	}
}
