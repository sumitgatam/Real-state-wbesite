/* ========================================
   EstatePrime - Luxury Real Estate
   JavaScript
   ======================================== */

// Property Data
const properties = [
    {
        id: 1,
        title: "Modern Villa in Beverly Hills",
        location: "Beverly Hills, CA",
        price: "$4,500,000",
        type: "Villa",
        bedrooms: 5,
        bathrooms: 4,
        sqft: 4500,
        image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80"
    },
    {
        id: 2,
        title: "Luxury Penthouse in Manhattan",
        location: "Manhattan, NY",
        price: "$8,900,000",
        type: "Penthouse",
        bedrooms: 4,
        bathrooms: 3,
        sqft: 3200,
        image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80"
    },
    {
        id: 3,
        title: "Beachfront House in Miami",
        location: "Miami, FL",
        price: "$3,200,000",
        type: "House",
        bedrooms: 4,
        bathrooms: 3,
        sqft: 2800,
        image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80"
    },
    {
        id: 4,
        title: "Mountain View Estate",
        location: "Aspen, CO",
        price: "$12,500,000",
        type: "Villa",
        bedrooms: 6,
        bathrooms: 5,
        sqft: 7500,
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80"
    },
    {
        id: 5,
        title: "Contemporary Apartment",
        location: "San Francisco, CA",
        price: "$1,850,000",
        type: "Apartment",
        bedrooms: 2,
        bathrooms: 2,
        sqft: 1500,
        image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80"
    },
    {
        id: 6,
        title: "Historic Brownstone",
        location: "Manhattan, NY",
        price: "$5,750,000",
        type: "House",
        bedrooms: 5,
        bathrooms: 4,
        sqft: 4200,
        image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&q=80"
    }
];

// Testimonials Data
const testimonials = [
    {
        id: 1,
        quote: "EstatePrime made finding our dream home an absolute pleasure. Their professionalism and attention to detail exceeded all our expectations. We couldn't be happier with our new home!",
        author: "Sarah Johnson",
        role: "Homeowner",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80"
    },
    {
        id: 2,
        quote: "As an investor, I've worked with many real estate agencies, but EstatePrime stands out with their market expertise and personalized service. They helped me build a profitable portfolio.",
        author: "Michael Chen",
        role: "Property Investor",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80"
    },
    {
        id: 3,
        quote: "The team at EstatePrime understood exactly what we were looking for. They found us the perfect family home within our budget. I highly recommend their services to everyone!",
        author: "Emily Rodriguez",
        role: "First-time Buyer",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80"
    },
    {
        id: 4,
        quote: "Selling our property was seamless thanks to EstatePrime. Their marketing strategy brought multiple offers within the first week. Outstanding results!",
        author: "David Williams",
        role: "Property Seller",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80"
    }
];

// DOM Elements
const header = document.getElementById('header');
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const propertiesGrid = document.getElementById('properties-grid');
const testimonialsTrack = document.getElementById('testimonials-track');
const testimonialsDots = document.getElementById('testimonials-dots');
const contactForm = document.getElementById('contact-form');
const searchBtn = document.getElementById('search-btn');
const newsletterForm = document.getElementById('newsletter-form');

// ========================================
// Header Scroll Effect
// ========================================
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// ========================================
// Mobile Menu Toggle
// ========================================
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close menu when clicking on a link
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// ========================================
// Render Properties
// ========================================
function renderProperties(propertiesToRender) {
    propertiesGrid.innerHTML = '';
    
    propertiesToRender.forEach(property => {
        const card = document.createElement('div');
        card.className = 'property-card';
        card.innerHTML = `
            <div class="property-image">
                <img src="${property.image}" alt="${property.title}">
                <span class="property-badge">${property.type}</span>
                <span class="property-price">${property.price}</span>
            </div>
            <div class="property-content">
                <h3 class="property-title">${property.title}</h3>
                <p class="property-location">📍 ${property.location}</p>
                <div class="property-features">
                    <span class="property-feature">🛏️ ${property.bedrooms} Beds</span>
                    <span class="property-feature">🚿 ${property.bathrooms} Baths</span>
                    <span class="property-feature">📐 ${property.sqft.toLocaleString()} sqft</span>
                </div>
            </div>
            <div class="property-cta">
                <a href="#contact" class="view-property-btn">View Details</a>
            </div>
        `;
        propertiesGrid.appendChild(card);
    });
}

// Initial render
renderProperties(properties);

// ========================================
// Property Search
// ========================================
searchBtn.addEventListener('click', () => {
    const location = document.getElementById('search-location').value;
    const type = document.getElementById('search-type').value;
    const price = document.getElementById('search-price').value;
    
    let filtered = properties;
    
    if (location) {
        filtered = filtered.filter(p => p.location.toLowerCase().includes(location.replace('-', ' ')));
    }
    
    if (type) {
        filtered = filtered.filter(p => p.type.toLowerCase() === type);
    }
    
    if (price) {
        const [min, max] = price.replace('+', '').split('-').map(v => parseInt(v) || Infinity);
        filtered = filtered.filter(p => {
            const propertyPrice = parseInt(p.price.replace(/[$,]/g, ''));
            return propertyPrice >= min && propertyPrice <= max;
        });
    }
    
    renderProperties(filtered.length > 0 ? filtered : properties);
    
    // Scroll to properties section
    document.getElementById('properties').scrollIntoView({ behavior: 'smooth' });
});

// ========================================
// Render Testimonials
// ========================================
function renderTestimonials() {
    testimonials.forEach((testimonial, index) => {
        const card = document.createElement('div');
        card.className = 'testimonial-card';
        card.innerHTML = `
            <div class="testimonial-content">
                <div class="testimonial-avatar">
                    <img src="${testimonial.avatar}" alt="${testimonial.author}">
                </div>
                <p class="testimonial-quote">"${testimonial.quote}"</p>
                <h4 class="testimonial-author">${testimonial.author}</h4>
                <span class="testimonial-role">${testimonial.role}</span>
            </div>
        `;
        testimonialsTrack.appendChild(card);
        
        // Add dot
        const dot = document.createElement('div');
        dot.className = `testimonial-dot ${index === 0 ? 'active' : ''}`;
        dot.addEventListener('click', () => goToTestimonial(index));
        testimonialsDots.appendChild(dot);
    });
}

// Testimonial Navigation
let currentTestimonial = 0;
let testimonialInterval;

function goToTestimonial(index) {
    currentTestimonial = index;
    testimonialsTrack.style.transform = `translateX(-${index * 100}%)`;
    
    // Update dots
    document.querySelectorAll('.testimonial-dot').forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });
}

function nextTestimonial() {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    goToTestimonial(currentTestimonial);
}

// Auto-rotate testimonials
function startTestimonialSlider() {
    testimonialInterval = setInterval(nextTestimonial, 5000);
}

function stopTestimonialSlider() {
    clearInterval(testimonialInterval);
}

// Pause on hover
const testimonialsSection = document.getElementById('testimonials');
testimonialsSection.addEventListener('mouseenter', stopTestimonialSlider);
testimonialsSection.addEventListener('mouseleave', startTestimonialSlider);

// Initialize testimonials
renderTestimonials();
startTestimonialSlider();

// ========================================
// Contact Form
// ========================================
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formMessage = document.getElementById('form-message');
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const interest = document.getElementById('interest').value;
    const message = document.getElementById('message').value;
    
    // Simple validation
    if (!name || !email || !message) {
        formMessage.textContent = 'Please fill in all required fields!';
        formMessage.className = 'form-message error';
        return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        formMessage.textContent = 'Please enter a valid email address!';
        formMessage.className = 'form-message error';
        return;
    }
    
    // Log form data
    console.log('Contact Form Submission:', {
        name,
        email,
        phone,
        interest,
        message
    });
    
    // Success message
    formMessage.textContent = `Thank you, ${name}! Your message has been sent successfully. We'll get back to you at ${email} within 24 hours.`;
    formMessage.className = 'form-message success';
    
    // Reset form
    contactForm.reset();
    
    // Hide message after 5 seconds
    setTimeout(() => {
        formMessage.className = 'form-message';
    }, 5000);
});

// ========================================
// Newsletter Form
// ========================================
if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = newsletterForm.querySelector('input').value;
        
        if (email) {
            console.log('Newsletter subscription:', email);
            alert('Thank you for subscribing to our newsletter!');
            newsletterForm.reset();
        }
    });
}

// ========================================
// Smooth Scroll for Navigation Links
// ========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ========================================
// Scroll Animation Observer
// ========================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Apply animation to sections
document.querySelectorAll('.about, .properties, .services, .testimonials, .contact').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});

// ========================================
// Property Card Hover Effect Enhancement
// ========================================
propertiesGrid.addEventListener('mouseover', (e) => {
    const card = e.target.closest('.property-card');
    if (card) {
        card.style.transform = 'translateY(-10px)';
    }
});

propertiesGrid.addEventListener('mouseout', (e) => {
    const card = e.target.closest('.property-card');
    if (card) {
        card.style.transform = 'translateY(0)';
    }
});

// ========================================
// Form Input Focus Effects
// ========================================
document.querySelectorAll('.form-group input, .form-group select, .form-group textarea').forEach(input => {
    input.addEventListener('focus', () => {
        input.parentElement.classList.add('focused');
    });
    
    input.addEventListener('blur', () => {
        input.parentElement.classList.remove('focused');
    });
});

// ========================================
// Set Minimum Date for Contact Form Date Input (if exists)
// ========================================
const dateInputs = document.querySelectorAll('input[type="date"]');
const today = new Date().toISOString().split('T')[0];
dateInputs.forEach(input => {
    input.setAttribute('min', today);
});

// ========================================
// Console Welcome Message
// ========================================
console.log('%c🏠 Welcome to EstatePrime - Luxury Real Estate', 'font-size: 20px; font-weight: bold; color: #c9a227;');
console.log('%cDiscover your dream property with us!', 'color: #6b7280;');
console.log('%cProperties available: ' + properties.length, 'color: #1a1a2e;');
