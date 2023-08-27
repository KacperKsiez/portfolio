import { Functionality } from './Functionality';

class NavSwitcher implements Functionality {
	private headerDiv = document.querySelector('.header');
	private sectionTopDiv = document.querySelector('.overlay');

	public init(): void {
		this.switchClassNameOnScroll();
		this.hideOnHrefClick();
	}

	private switchClassNameOnScroll(): void {
		const observer = new IntersectionObserver(
			(elements) => {
				const sectionTopDiv = elements[0];

				if (!sectionTopDiv.isIntersecting) {
					this.headerDiv.classList.add('header--scrolled');
				} else {
					this.headerDiv.classList.remove('header--scrolled');
				}
			},
			{
				threshold: 0.8,
			}
		);

		observer.observe(this.sectionTopDiv);
	}

	private hideOnHrefClick(): void {
		const headerCheckbox: HTMLInputElement | null = document.querySelector('#menu-switch');
		const navLinks: NodeListOf<HTMLAnchorElement> = document.querySelectorAll('.header__list-item');

		navLinks.forEach((link) => {
			link.addEventListener('click', () => {
				if (headerCheckbox && headerCheckbox.checked) {
					headerCheckbox.checked = false;
				}
			});
		});
	}
}

export { NavSwitcher };
