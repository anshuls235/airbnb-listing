document.addEventListener('DOMContentLoaded', function() {
    // Initialize tooltips
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    const tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Add heart animation for the wishlist button
    const wishlistButtons = document.querySelectorAll('.btn-outline-secondary');
    wishlistButtons.forEach(button => {
        if (button.textContent.includes('Wishlist')) {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                
                // Toggle heart icon and text
                if (button.innerHTML.includes('Save to Wishlist')) {
                    button.innerHTML = '<i class="bi bi-heart-fill text-danger"></i> Saved to Wishlist';
                    button.classList.add('active');
                    
                    // Show toast notification
                    showToast('Property saved to your wishlist!');
                } else {
                    button.innerHTML = 'Save to Wishlist';
                    button.classList.remove('active');
                    
                    // Show toast notification
                    showToast('Property removed from your wishlist.');
                }
            });
        }
    });

    // Image gallery functionality for detail page
    const thumbnails = document.querySelectorAll('.thumbnail');
    const mainImage = document.querySelector('.main-image');
    
    if (thumbnails.length > 0 && mainImage) {
        thumbnails.forEach(thumb => {
            thumb.addEventListener('click', function() {
                // Swap images
                const tempSrc = mainImage.src;
                mainImage.src = this.src;
                
                // Add transition effect
                mainImage.classList.add('fade-in');
                setTimeout(() => {
                    mainImage.classList.remove('fade-in');
                }, 500);
            });
        });
    }

    // Function to show toast notifications
    function showToast(message) {
        // Create toast container if it doesn't exist
        let toastContainer = document.querySelector('.toast-container');
        if (!toastContainer) {
            toastContainer = document.createElement('div');
            toastContainer.className = 'toast-container position-fixed bottom-0 end-0 p-3';
            document.body.appendChild(toastContainer);
        }
        
        // Create toast element
        const toastEl = document.createElement('div');
        toastEl.className = 'toast align-items-center text-white bg-primary border-0';
        toastEl.setAttribute('role', 'alert');
        toastEl.setAttribute('aria-live', 'assertive');
        toastEl.setAttribute('aria-atomic', 'true');
        
        toastEl.innerHTML = `
            <div class="d-flex">
                <div class="toast-body">
                    ${message}
                </div>
                <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
            </div>
        `;
        
        toastContainer.appendChild(toastEl);
        
        // Initialize and show toast
        const toast = new bootstrap.Toast(toastEl, {
            delay: 3000
        });
        toast.show();
        
        // Remove toast element after it's hidden
        toastEl.addEventListener('hidden.bs.toast', function () {
            toastEl.remove();
        });
    }

    // Filter functionality for listings page
    const filterForm = document.getElementById('filter-form');
    if (filterForm) {
        filterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const minPrice = document.getElementById('min-price').value;
            const maxPrice = document.getElementById('max-price').value;
            const beachDistance = document.getElementById('beach-distance').value;
            
            // Apply filters (in a real app this would filter the listings)
            showToast('Filters applied!');
        });
    }
});

// Add a small animation for page load
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
    
    // Animate listing cards on scroll
    const listingCards = document.querySelectorAll('.listing-card');
    
    if (listingCards.length > 0) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in-up');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1
        });
        
        listingCards.forEach(card => {
            observer.observe(card);
        });
    }
});

// Add fade-in animation CSS
const style = document.createElement('style');
style.textContent = `
    .fade-in {
        animation: fadeIn 0.5s;
    }
    
    .fade-in-up {
        animation: fadeInUp 0.6s ease forwards;
    }
    
    @keyframes fadeIn {
        from { opacity: 0.5; }
        to { opacity: 1; }
    }
    
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    body.loaded .listing-card {
        opacity: 0;
    }
`;
document.head.appendChild(style);