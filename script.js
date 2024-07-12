
document.addEventListener('DOMContentLoaded', (event) => {
    // Animation légère pour le chargement de la page
    document.body.style.opacity = 0;
    setTimeout(() => {
        document.body.style.transition = 'opacity 1s';
        document.body.style.opacity = 1;
    }, 100);

    // Animation des liens de la navbar
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('mouseover', () => {
            link.style.color = '#ffcb77';
            link.style.transition = 'color 0.3s';
        });
        link.addEventListener('mouseout', () => {
            link.style.color = '#ffffff';
            link.style.transition = 'color 0.3s';
        });
    });

    // Validation simple des formulaires
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            const inputs = form.querySelectorAll('input, textarea');
            let valid = true;
            inputs.forEach(input => {
                if (!input.value) {
                    valid = false;
                    input.style.border = '2px solid red';
                } else {
                    input.style.border = 'none';
                }
            });
            if (!valid) {
                e.preventDefault();
                alert('Veuillez remplir tous les champs.');
            }
        });
    });

    // Exemple d'interactivité pour les exercices
    const exerciseButtons = document.querySelectorAll('.exercise-button');
    exerciseButtons.forEach(button => {
        button.addEventListener('click', () => {
            const correct = button.dataset.correct === 'true';
            if (correct) {
                button.style.backgroundColor = 'green';
                alert('Bonne réponse !');
            } else {
                button.style.backgroundColor = 'red';
                alert('Mauvaise réponse, essayez encore.');
            }
        });
    });
});
