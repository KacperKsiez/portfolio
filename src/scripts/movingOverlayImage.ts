import { Functionality } from './Functionality';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export class MovingOverlayImage implements Functionality {
	init(): void {
		gsap.registerPlugin(ScrollTrigger);

		gsap.to('.overlay__img', {
			x: '45%',
			scrollTrigger: {
				scrub: true,
				start: 0,
			},
		});

		gsap.to('.overlay__content', {
			x: '-25%',
			scrollTrigger: {
				scrub: true,
				start: 0,
			},
		});

		// this.rest();
	}

	private rest() {
		const cards = document.querySelectorAll('.card');

		// Animuj wszystkie karty z efektem stagger
		gsap.fromTo(
			cards,
			{ x: '-100%' }, // Początkowa pozycja poza ekranem z lewej strony
			{
				x: '0%', // Końcowa pozycja na ekranie
				duration: 1, // Czas trwania animacji
				ease: 'power2.out', // Wybierz odpowiedni easing
				stagger: 0.2, // Opóźnienie między animacjami kolejnych kart
				scrollTrigger: {
					trigger: cards[0], // Ustaw wyzwalacz na pierwszą kartę
					start: 'top center', // Rozpocznij animację, gdy środek karty jest na górze widoku
					end: 'bottom center', // Zakończ animację, gdy środek karty jest na dole widoku
					scrub: true, // Powoduje płynne przewijanie animacji
					toggleActions: 'play none none none', // Wyzwalaj animację tylko przy przewijaniu w dół
				},
			}
		);
	}
}
