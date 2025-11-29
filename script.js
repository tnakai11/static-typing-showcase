gsap.registerPlugin(ScrollTrigger);

// Cursor Follower
const cursor = document.querySelector('.cursor-follower');
document.addEventListener('mousemove', (e) => {
    gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
        ease: "power2.out"
    });
});

// Hero Animations
const tl = gsap.timeline();

tl.to('.hero h1', {
    "--fill-width": "100%",
    duration: 1.5,
    ease: "power4.inOut",
    delay: 0.5
})
    .to('.subtitle', {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out"
    }, "-=0.5")
    .to('.cta-button', {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out"
    }, "-=0.8");

// Scroll Animations for Sections
gsap.utils.toArray('section').forEach(section => {
    gsap.from(section.children, {
        scrollTrigger: {
            trigger: section,
            start: "top 80%",
            toggleActions: "play none none reverse"
        },
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out"
    });
});

// Chaos Cards Hover Effect (Parallax tilt)
document.querySelectorAll('.chaos-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -10;
        const rotateY = ((x - centerX) / centerX) * 10;

        gsap.to(card, {
            rotationX: rotateX,
            rotationY: rotateY,
            transformPerspective: 1000,
            duration: 0.5,
            ease: "power2.out"
        });
    });

    card.addEventListener('mouseleave', () => {
        gsap.to(card, {
            rotationX: 0,
            rotationY: 0,
            duration: 0.5,
            ease: "power2.out"
        });
    });
});

// Code Typing Effect
const codeBlock = document.querySelector('.code-block code');
// Simple "typing" animation simulation by opacity or width could be added here
// For now, let's just float the code block
gsap.to('.feature-visual', {
    y: -10,
    duration: 2,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
});

// Background Particles (Simple Canvas or DOM elements)
// Let's add some floating elements to the hero background
const heroBg = document.querySelector('.hero-background');
for (let i = 0; i < 20; i++) {
    const el = document.createElement('div');
    el.classList.add('floating-shape');

    // Random styles
    const size = Math.random() * 50 + 10;
    el.style.width = `${size}px`;
    el.style.height = `${size}px`;
    el.style.position = 'absolute';
    el.style.background = Math.random() > 0.5 ? 'var(--accent-blue)' : 'var(--accent-orange)';
    el.style.opacity = '0.1';
    el.style.borderRadius = Math.random() > 0.5 ? '50%' : '4px';
    el.style.left = `${Math.random() * 100}%`;
    el.style.top = `${Math.random() * 100}%`;

    heroBg.appendChild(el);

    // Animate
    gsap.to(el, {
        x: Math.random() * 200 - 100,
        y: Math.random() * 200 - 100,
        rotation: Math.random() * 360,
        duration: Math.random() * 10 + 5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
    });
}
