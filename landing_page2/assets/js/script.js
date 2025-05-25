// Menu mobile toggle
document.addEventListener('DOMContentLoaded', function() {
    const menuMobile = document.querySelector('.menu-mobile');
    const menu = document.querySelector('.menu');
    
    if (menuMobile && menu) {
        menuMobile.addEventListener('click', function() {
            menu.classList.toggle('active');
        });
    }
    
    // Fechar menu ao clicar em um link
    const menuLinks = document.querySelectorAll('.menu a');
    menuLinks.forEach(link => {
        link.addEventListener('click', function() {
            menu.classList.remove('active');
        });
    });
    
    // Formulário de agendamento
    const appointmentForm = document.getElementById('appointment-form');
    if (appointmentForm) {
        appointmentForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Aqui você pode adicionar a lógica para enviar o formulário
            // Por enquanto, apenas mostraremos uma mensagem de sucesso
            alert('Sua solicitação foi enviada com sucesso! Entraremos em contato em breve.');
            appointmentForm.reset();
        });
    }
    
    // Efeito de scroll suave para links de âncora
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerHeight = document.getElementById('header').offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Efeito de scroll para o header
    const header = document.getElementById('header');
    if (header) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                header.style.padding = '10px 0';
                header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
            } else {
                header.style.padding = '15px 0';
                header.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
            }
        });
    }
    
    // Animação de entrada para elementos
    const animateElements = document.querySelectorAll('.feature-item, .step, .product-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });
    
    animateElements.forEach(element => {
        element.style.opacity = 0;
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(element);
    });
    
    // Mostrar/ocultar CTA flutuante após rolagem
    const floatingCta = document.querySelector('.floating-cta');
    if (floatingCta) {
        // Inicialmente oculto
        floatingCta.style.display = 'none';
        
        // Mostrar após rolagem
        window.addEventListener('scroll', function() {
            // Mostrar o botão após rolar 300px
            if (window.scrollY > 300) {
                floatingCta.style.display = 'block';
            } else {
                floatingCta.style.display = 'none';
            }
            
            // Ocultar quando estiver próximo ao rodapé
            const footer = document.querySelector('footer');
            if (footer) {
                const footerPosition = footer.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
                
                if (footerPosition - windowHeight < 100) {
                    floatingCta.style.display = 'none';
                }
            }
        });
    }
});
