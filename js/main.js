
document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS animation library
    AOS.init({
        duration: 800,
        easing: 'ease-out',
        once: true,
        offset: 50
    });
    
    // Set current year in footer
    document.getElementById('currentYear').textContent = new Date().getFullYear();
    
    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 20) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Mobile menu toggle
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const mobileNav = document.querySelector('.mobile-nav');
    
    if (menuToggle && mobileNav) {
        menuToggle.addEventListener('click', function() {
            menuToggle.classList.toggle('active');
            mobileNav.classList.toggle('active');
        });
    }
    
    // Back to top button
    const backToTopButton = document.querySelector('.back-to-top');
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopButton.classList.add('active');
        } else {
            backToTopButton.classList.remove('active');
        }
    });
    
    if (backToTopButton) {
        backToTopButton.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    // Chatbot functionality
    const chatbotToggle = document.querySelector('.chatbot-toggle');
    const chatbotContainer = document.querySelector('.chatbot-container');
    const chatbotMessages = document.querySelector('.chatbot-messages');
    const chatbotOptions = document.getElementById('chatbotOptions');
    const chatbotInput = document.getElementById('chatbotUserInput');
    const chatbotSend = document.getElementById('chatbotSend');
    
    if (chatbotToggle && chatbotContainer) {
        chatbotToggle.addEventListener('click', function() {
            chatbotToggle.classList.toggle('active');
            chatbotContainer.style.display = chatbotContainer.style.display === 'block' ? 'none' : 'block';
        });
    }
    
    // Handle chatbot option clicks
    const allOptions = document.querySelectorAll('.chatbot-option');
    allOptions.forEach(option => {
        option.addEventListener('click', function() {
            const optionText = this.textContent.trim();
            
            // Add user message
            addMessage('user', optionText);
            
            // Hide options
            chatbotOptions.style.display = 'none';
            
            // Add bot response based on option
            setTimeout(() => {
                addMessage('bot', `Great! Let me tell you more about our ${optionText} services. Would you like a free audit of your current strategy?`);
            }, 1000);
        });
    });
    
    // Handle send button click
    if (chatbotSend) {
        chatbotSend.addEventListener('click', sendUserMessage);
    }
    
    // Handle enter key press in input field
    if (chatbotInput) {
        chatbotInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                sendUserMessage();
            }
        });
    }
    
    function sendUserMessage() {
        const message = chatbotInput.value.trim();
        
        if (message) {
            addMessage('user', message);
            chatbotInput.value = '';
            
            // Simulate bot response
            setTimeout(() => {
                addMessage('bot', "Thanks for your message! One of our marketing chefs will get back to you soon. Would you like to schedule a free consultation?");
            }, 1000);
        }
    }
    
    function addMessage(type, text) {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message');
        messageDiv.classList.add(type + '-message');
        messageDiv.textContent = text;
        
        chatbotMessages.appendChild(messageDiv);
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    }
    
    // Video Play Button
    const videoPlayButton = document.querySelector('.video-play-button');
    const video = document.querySelector('.video-container video');
    
    if (videoPlayButton && video) {
        videoPlayButton.addEventListener('click', function() {
            videoPlayButton.style.display = 'none';
            video.play();
        });
        
        video.addEventListener('pause', function() {
            videoPlayButton.style.display = 'flex';
        });
    }
    
    // Anime Effects Interaction
    const recipeCards = document.querySelectorAll('.recipe-card');
    recipeCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            const animeEffect = this.querySelector('.anime-effect');
            if (animeEffect) {
                animeEffect.style.opacity = '0.2';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            const animeEffect = this.querySelector('.anime-effect');
            if (animeEffect) {
                animeEffect.style.opacity = '0';
            }
        });
    });
    
    // Create assets folder structure and placeholder for images
    console.log('Remember to create an assets folder with the following images:');
    console.log('- assets/titan-silhouette.png');
    console.log('- assets/naruto-silhouette.png');
    console.log('- assets/sharingan.png');
    console.log('- assets/titan-transform.png');
    console.log('- assets/power-up.png');
    console.log('- assets/startup-growth.jpg');
    console.log('- assets/video-thumbnail.jpg');
    console.log('- assets/company-intro.mp4');
    console.log('- assets/team-1.jpg');
    console.log('- assets/team-2.jpg');
    console.log('- assets/team-3.jpg');
    console.log('- assets/team-4.jpg');
});
