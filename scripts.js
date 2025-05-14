
document.addEventListener('DOMContentLoaded', function() {
  // Initialize Lucide icons
  lucide.createIcons();
  
  // Initialize AOS library for scroll animations
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 800,
      easing: 'ease-out',
      once: true,
      offset: 50
    });
  }

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
  const menuToggle = document.querySelector('.navbar-mobile-toggle');
  const mobileMenu = document.querySelector('.navbar-mobile');
  const menuIcon = document.querySelector('.mobile-menu-icon');
  const closeIcon = document.querySelector('.mobile-close-icon');
  
  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', function() {
      mobileMenu.classList.toggle('hidden');
      menuIcon.classList.toggle('hidden');
      closeIcon.classList.toggle('hidden');
    });
  }
  
  // Chatbot functionality
  const chatbotToggle = document.getElementById('chatbotToggle');
  const chatbotWindow = document.getElementById('chatbotWindow');
  const chatbotMessages = document.getElementById('chatbotMessages');
  const chatbotOptions = document.getElementById('chatbotOptions');
  const chatbotInput = document.getElementById('chatbotUserInput');
  const chatbotSend = document.getElementById('chatbotSend');
  const openIcon = document.querySelector('.chatbot-open-icon');
  const closeIcon = document.querySelector('.chatbot-close-icon');
  
  if (chatbotToggle && chatbotWindow) {
    chatbotToggle.addEventListener('click', function() {
      chatbotWindow.classList.toggle('hidden');
      chatbotToggle.classList.toggle('active');
      openIcon.classList.toggle('hidden');
      closeIcon.classList.toggle('hidden');
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
  
  // Animate recipe cards on hover
  const recipeCards = document.querySelectorAll('.recipe-card');
  recipeCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.querySelector('.recipe-icon').style.transform = 'scale(1.1)';
    });
    
    card.addEventListener('mouseleave', function() {
      this.querySelector('.recipe-icon').style.transform = 'scale(1)';
    });
  });
  
  // Smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      
      if (href !== '#') {
        e.preventDefault();
        
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
  });
  
  // Add animations to elements as they scroll into view
  function animateOnScroll() {
    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(element => {
      const elementPosition = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      if (elementPosition < windowHeight - 50) {
        element.classList.add('fade-in');
      }
    });
  }
  
  // Call function on load and scroll if not using AOS
  if (typeof AOS === 'undefined') {
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll();
  }
});
