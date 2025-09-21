// Add smooth scroll behavior
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add hover animation for store buttons
const storeButtons = document.querySelectorAll('.store-button');
storeButtons.forEach(button => {
    button.addEventListener('mouseover', () => {
        button.style.transform = 'translateY(-5px)';
    });
    
    button.addEventListener('mouseout', () => {
        button.style.transform = 'translateY(0)';
    });
});

// Add loading animation
document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.animate__animated');
    elements.forEach(element => {
        element.style.opacity = '0';
        element.style.visibility = 'hidden';
    });

    setTimeout(() => {
        elements.forEach(element => {
            element.style.opacity = '1';
            element.style.visibility = 'visible';
        });
    }, 300);
});

// Enhanced structured data for SEO
const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "TicToc India",
    "operatingSystem": "Android, iOS",
    "applicationCategory": "SocialNetworkingApplication",
    "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "INR"
    },
    "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.5",
        "ratingCount": "1000000",
        "bestRating": "5",
        "worstRating": "1"
    },
    "description": "Create and share short videos with TicToc India. Available in 14+ Indian languages with AI-powered content, special effects, and professional editing tools.",
    "downloadUrl": "https://www.TicToc.co.in/download",
    "featureList": [
        "14+ Indian languages support",
        "AI-powered content recommendations",
        "Professional editing tools",
        "Special effects and filters",
        "Low data usage optimization"
    ],
    "author": {
        "@type": "Organization",
        "name": "TicToc India"
    },
    "publisher": {
        "@type": "Organization",
        "name": "TicToc India",
        "logo": {
            "@type": "ImageObject",
            "url": "https://www.TicToc.co.in/images/logo.png"
        }
    }
};

// FAQ Structured Data
const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [{
        "@type": "Question",
        "name": "How do I create an account on TicToc India?",
        "acceptedAnswer": {
            "@type": "Answer",
            "text": "Download the app and sign up using your phone number or email. You can also use your existing social media accounts."
        }
    }, {
        "@type": "Question",
        "name": "Is TicToc India free to use?",
        "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, TicToc India is completely free to download and use. Create and share content without any charges."
        }
    }, {
        "@type": "Question",
        "name": "What are the system requirements for TicToc India?",
        "acceptedAnswer": {
            "@type": "Answer",
            "text": "TicToc works on Android 4.4+ and iOS 11.0+ devices with at least 1GB of free storage."
        }
    }]
};

// Add structured data to the page
[structuredData, faqStructuredData].forEach(data => {
    const script = document.createElement('script');
    script.type = "application/ld+json";
    script.text = JSON.stringify(data);
    document.head.appendChild(script);
});

// Performance optimizations
document.addEventListener('DOMContentLoaded', () => {
    // Lazy loading images
    const images = document.querySelectorAll('img[loading="lazy"]');
    if ('loading' in HTMLImageElement.prototype) {
        images.forEach(img => {
            if (img.dataset.src) {
                img.src = img.dataset.src;
            }
        });
    } else {
        // Fallback for browsers that don't support lazy loading
        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lozad.js/1.16.0/lozad.min.js';
        script.async = true;
        document.body.appendChild(script);
        script.onload = () => {
            const observer = lozad();
            observer.observe();
        };
    }
});

