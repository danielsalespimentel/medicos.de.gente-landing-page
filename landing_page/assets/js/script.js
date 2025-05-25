// Menu mobile toggle
document.addEventListener('DOMContentLoaded', function() {
    const menuMobile = document.querySelector('.menu-mobile');
    const menu = document.querySelector('.menu');
    
    menuMobile.addEventListener('click', function() {
        menu.classList.toggle('active');
    });
    
    // Fechar menu ao clicar em um item
    const menuItems = document.querySelectorAll('.menu a');
    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            menu.classList.remove('active');
        });
    });
    
    // Mostrar CTA flutuante após rolagem
    window.addEventListener('scroll', function() {
        const floatingCta = document.querySelector('.floating-cta');
        const footer = document.querySelector('footer');
        const footerPosition = footer.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (window.scrollY > 300 && footerPosition > windowHeight) {
            floatingCta.style.display = 'block';
        } else {
            floatingCta.style.display = 'none';
        }
    });
    
    // Smooth scroll para links de âncora
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerHeight = document.querySelector('#header').offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Formulário de contato
    const form = document.getElementById('appointment-form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Aqui você pode adicionar código para enviar o formulário via AJAX
            // Por enquanto, apenas mostramos uma mensagem de sucesso
            alert('Sua solicitação foi enviada com sucesso! Em breve entraremos em contato.');
            form.reset();
        });
    }
});
