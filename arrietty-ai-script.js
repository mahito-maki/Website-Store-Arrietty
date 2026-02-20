// arrietty-ai-script.js

// Menu Data (1800+ fitur)
const menuData = [
    { name: 'absen', icon: 'fa-clipboard-check', count: 5 },
    { name: 'advanced', icon: 'fa-cogs', count: 2 },
    { name: 'ai', icon: 'fa-robot', count: 223 },
    { name: 'anime', icon: 'fa-tv', count: 123 },
    { name: 'anonymous', icon: 'fa-user-secret', count: 5 },
    { name: 'asupan', icon: 'fa-video', count: 6 },
    { name: 'audio', icon: 'fa-music', count: 3 },
    { name: 'bug', icon: 'fa-bug', count: 2 },
    { name: 'catatan', icon: 'fa-sticky-note', count: 3 },
    { name: 'cek', icon: 'fa-check-circle', count: 82 },
    { name: 'cerpen', icon: 'fa-book', count: 20 },
    { name: 'channel', icon: 'fa-broadcast-tower', count: 6 },
    { name: 'code', icon: 'fa-code', count: 2 },
    { name: 'database', icon: 'fa-database', count: 6 },
    { name: 'donghua', icon: 'fa-dragon', count: 2 },
    { name: 'downloader', icon: 'fa-download', count: 119 },
    { name: 'education', icon: 'fa-graduation-cap', count: 2 },
    { name: 'enc', icon: 'fa-lock', count: 14 },
    { name: 'entertainment', icon: 'fa-theater-masks', count: 1 },
    { name: 'ephoto', icon: 'fa-camera', count: 37 },
    { name: 'fun', icon: 'fa-laugh-beam', count: 61 },
    { name: 'game', icon: 'fa-gamepad', count: 54 },
    { name: 'games', icon: 'fa-dice', count: 1 },
    { name: 'generator', icon: 'fa-magic', count: 3 },
    { name: 'genshin', icon: 'fa-fire', count: 3 },
    { name: 'giveaway', icon: 'fa-gift', count: 6 },
    { name: 'gpt', icon: 'fa-brain', count: 1 },
    { name: 'grok', icon: 'fa-comments', count: 1 },
    { name: 'group', icon: 'fa-users', count: 134 },
    { name: 'grow', icon: 'fa-seedling', count: 2 },
    { name: 'image', icon: 'fa-image', count: 8 },
    { name: 'info', icon: 'fa-info-circle', count: 45 },
    { name: 'internet', icon: 'fa-globe', count: 58 },
    { name: 'islami', icon: 'fa-mosque', count: 10 },
    { name: 'islamic', icon: 'fa-pray', count: 1 },
    { name: 'jadian', icon: 'fa-heart', count: 1 },
    { name: 'jkt48', icon: 'fa-star', count: 2 },
    { name: 'kalender', icon: 'fa-calendar', count: 1 },
    { name: 'komik', icon: 'fa-book-open', count: 6 },
    { name: 'life', icon: 'fa-heartbeat', count: 11 },
    { name: 'main', icon: 'fa-play', count: 24 },
    { name: 'maker', icon: 'fa-paint-brush', count: 49 },
    { name: 'melolo', icon: 'fa-cat', count: 3 },
    { name: 'movie', icon: 'fa-film', count: 3 },
    { name: 'music', icon: 'fa-headphones', count: 3 },
    { name: 'nsfw', icon: 'fa-exclamation-triangle', count: 1 },
    { name: 'owner', icon: 'fa-crown', count: 114 },
    { name: 'premium', icon: 'fa-gem', count: 115 },
    { name: 'quotes', icon: 'fa-quote-right', count: 11 },
    { name: 'random', icon: 'fa-random', count: 1 },
    { name: 'rpg', icon: 'fa-khanda', count: 128 },
    { name: 'rpgabsen', icon: 'fa-user-check', count: 1 },
    { name: 'script', icon: 'fa-file-code', count: 7 },
    { name: 'search', icon: 'fa-search', count: 22 },
    { name: 'sewa', icon: 'fa-key', count: 6 },
    { name: 'sound', icon: 'fa-volume-up', count: 15 },
    { name: 'stalk', icon: 'fa-user-clock', count: 11 },
    { name: 'sticker', icon: 'fa-smile', count: 58 },
    { name: 'storage', icon: 'fa-hdd', count: 8 },
    { name: 'store', icon: 'fa-shopping-cart', count: 23 },
    { name: 'suntik', icon: 'fa-syringe', count: 6 },
    { name: 'text', icon: 'fa-font', count: 1 },
    { name: 'tools', icon: 'fa-tools', count: 359 },
    { name: 'uploader', icon: 'fa-cloud-upload-alt', count: 1 },
    { name: 'web', icon: 'fa-globe-asia', count: 2 },
    { name: 'xp', icon: 'fa-trophy', count: 12 }
];

document.addEventListener('DOMContentLoaded', () => {
    // Generate particles
    const particlesContainer = document.getElementById('particles');
    const particleCount = 30;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 20 + 's';
        particle.style.animationDuration = (15 + Math.random() * 10) + 's';
        particlesContainer.appendChild(particle);
    }

    // Progress Bar
    const progressBar = document.getElementById('progressBar');
    window.addEventListener('scroll', () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        progressBar.style.width = scrolled + '%';
    });

    // Theme Toggle
    const themeToggle = document.getElementById('themeToggle');
    const html = document.documentElement;
    
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        html.setAttribute('data-theme', savedTheme);
    }
    
    themeToggle.addEventListener('click', () => {
        const currentTheme = html.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        html.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        showToast(`Switched to ${newTheme} mode`);
    });

    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Render Menu
    const menuGrid = document.getElementById('menuGrid');
    const menuSearch = document.getElementById('menuSearch');
    
    function renderMenu(filter = '') {
        menuGrid.innerHTML = '';
        const filtered = menuData.filter(item => 
            item.name.toLowerCase().includes(filter.toLowerCase())
        );
        
        filtered.forEach((item, index) => {
            const div = document.createElement('div');
            div.className = 'menu-item';
            div.style.animationDelay = `${index * 0.05}s`;
            div.innerHTML = `
                <div class="menu-icon">
                    <i class="fas ${item.icon}"></i>
                </div>
                <div class="menu-info">
                    <span class="menu-name">Menu ${item.name}</span>
                    <span class="menu-count">𖦹 Total fitur: ${item.count}</span>
                </div>
            `;
            menuGrid.appendChild(div);
        });
    }
    
    renderMenu();
    
    menuSearch.addEventListener('input', (e) => {
        renderMenu(e.target.value);
    });

    // Tab switching for pricing
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetTab = btn.getAttribute('data-tab');
            
            tabBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            tabContents.forEach(content => {
                content.classList.remove('active');
                if (content.id === `${targetTab}-content`) {
                    content.classList.add('active');
                }
            });
        });
    });

    // Counter animation
    const counters = document.querySelectorAll('.stat-num');
    
    const animateCounter = (counter) => {
        const target = parseInt(counter.getAttribute('data-target'));
        const duration = 2000;
        const step = target / (duration / 16);
        let current = 0;
        
        const updateCounter = () => {
            current += step;
            if (current < target) {
                counter.textContent = Math.floor(current);
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target;
            }
        };
        
        updateCounter();
    };
    
    const observerOptions = { threshold: 0.5 };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    counters.forEach(counter => observer.observe(counter));

    // Interactive Rating System
    const starInput = document.getElementById('starInput');
    const stars = starInput.querySelectorAll('i');
    const ratingText = document.getElementById('ratingText');
    const submitRating = document.getElementById('submitRating');
    const reviewsList = document.getElementById('reviewsList');
    const raterName = document.getElementById('raterName');
    const raterReview = document.getElementById('raterReview');
    
    let currentRating = 0;
    const ratingTexts = ['Pilih bintang', 'Buruk', 'Cukup', 'Bagus', 'Sangat Bagus', 'Luar Biasa!'];
    
    stars.forEach((star, index) => {
        star.addEventListener('mouseenter', () => {
            updateStars(index + 1);
            ratingText.textContent = ratingTexts[index + 1];
        });
        
        star.addEventListener('click', () => {
            currentRating = index + 1;
            updateStars(currentRating);
            ratingText.textContent = ratingTexts[currentRating];
        });
    });
    
    starInput.addEventListener('mouseleave', () => {
        updateStars(currentRating);
        ratingText.textContent = ratingTexts[currentRating] || 'Pilih bintang';
    });
    
    function updateStars(rating) {
        stars.forEach((star, index) => {
            if (index < rating) {
                star.classList.remove('far');
                star.classList.add('fas', 'active');
            } else {
                star.classList.remove('fas', 'active');
                star.classList.add('far');
            }
        });
    }
    
    // Load saved reviews from localStorage
    let reviews = JSON.parse(localStorage.getItem('arrietty_reviews')) || [
        { name: 'Ahmad R.', rating: 5, text: 'Botnya sangat membantu untuk manage grup komunitas saya. Fitur anti-link dan welcome message berjalan dengan lancar. Recommended!', date: '2 hari lalu' },
        { name: 'Siti M.', rating: 5, text: 'AI-nya canggih banget! Bisa jawab pertanyaan dengan context yang tepat. Harga sewanya juga terjangkau.', date: '5 hari lalu' },
        { name: 'Budi K.', rating: 5, text: 'Ownernya responsif banget kalo ada masalah. Bot pernah error sekali, langsung diperbaiki dalam 10 menit. Garansi bukan kaleng-kaleng!', date: '1 minggu lalu' }
    ];
    
    function renderReviews() {
        reviewsList.innerHTML = '';
        reviews.slice(0, 5).forEach(review => {
            const card = createReviewCard(review);
            reviewsList.appendChild(card);
        });
        updateRatingStats();
    }
    
    function createReviewCard(review) {
        const div = document.createElement('div');
        div.className = 'review-card';
        div.innerHTML = `
            <div class="review-header">
                <div class="review-author">
                    <div class="review-avatar">${review.name.charAt(0)}</div>
                    <div class="review-info">
                        <strong>${review.name}</strong>
                        <span>${review.date}</span>
                    </div>
                </div>
                <div class="review-stars">
                    ${Array(5).fill(0).map((_, i) => 
                        `<i class="${i < review.rating ? 'fas' : 'far'} fa-star"></i>`
                    ).join('')}
                </div>
            </div>
            <p class="review-text">${review.text}</p>
        `;
        return div;
    }
    
    function updateRatingStats() {
        const avg = reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length;
        document.getElementById('avgRating').textContent = avg.toFixed(1);
        document.getElementById('totalReviews').textContent = `${reviews.length} reviews`;
        
        // Update bars
        const counts = [0, 0, 0, 0, 0];
        reviews.forEach(r => counts[5 - r.rating]++);
        const max = Math.max(...counts);
        
        document.querySelectorAll('.rating-bar').forEach((bar, index) => {
            const count = counts[index];
            const percentage = max > 0 ? (count / max) * 100 : 0;
            bar.querySelector('.fill').style.width = percentage + '%';
            bar.querySelector('.count').textContent = count;
        });
    }
    
    submitRating.addEventListener('click', () => {
        if (currentRating === 0) {
            showToast('❌ Pilih rating bintang terlebih dahulu!');
            return;
        }
        
        if (!raterName.value.trim()) {
            showToast('❌ Masukkan nama Anda!');
            return;
        }
        
        const newReview = {
            name: raterName.value,
            rating: currentRating,
            text: raterReview.value || 'Pengguna memberikan rating.',
            date: 'Baru saja'
        };
        
        reviews.unshift(newReview);
        localStorage.setItem('arrietty_reviews', JSON.stringify(reviews));
        
        const card = createReviewCard(newReview);
        card.style.animation = 'slideIn 0.5s ease';
        reviewsList.insertBefore(card, reviewsList.firstChild);
        
        updateRatingStats();
        
        // Reset form
        raterName.value = '';
        raterReview.value = '';
        currentRating = 0;
        updateStars(0);
        ratingText.textContent = 'Pilih bintang';
        
        showToast('✅ Terima kasih! Rating berhasil dikirim.');
    });
    
    renderReviews();

    // FAQ Accordion
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            faqItems.forEach(i => i.classList.remove('active'));
            if (!isActive) item.classList.add('active');
        });
    });

    // Smooth reveal on scroll
    const revealElements = document.querySelectorAll('.feature-card, .price-card, .faq-item');
    
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 100);
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    
    revealElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
        revealObserver.observe(el);
    });

    // Back to Top with Progress Ring
    const backToTop = document.getElementById('backToTop');
    const progressCircle = document.querySelector('.progress-ring-progress');
    const circumference = 2 * Math.PI * 18;
    
    progressCircle.style.strokeDasharray = circumference;
    progressCircle.style.strokeDashoffset = circumference;
    
    function setProgress(percent) {
        const offset = circumference - (percent / 100) * circumference;
        progressCircle.style.strokeDashoffset = offset;
    }
    
    window.addEventListener('scroll', () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        
        setProgress(scrolled);
        
        if (winScroll > 500) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    });
    
    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Chat Widget
    const chatWidget = document.getElementById('chatWidget');
    const chatToggle = document.getElementById('chatToggle');
    
    chatToggle.addEventListener('click', () => {
        chatWidget.classList.toggle('active');
    });
    
    document.addEventListener('click', (e) => {
        if (!chatWidget.contains(e.target)) {
            chatWidget.classList.remove('active');
        }
    });

    // Toast Notification Function
    function showToast(message) {
        const container = document.getElementById('toastContainer');
        const toast = document.createElement('div');
        toast.className = 'toast';
        toast.innerHTML = `
            <i class="fas fa-info-circle"></i>
            <span>${message}</span>
        `;
        
        container.appendChild(toast);
        
        setTimeout(() => {
            toast.remove();
        }, 3000);
    }

    // Button click effects
    const buttons = document.querySelectorAll('.btn-primary, .btn-secondary, .order-btn, .cta-btn');
    
    buttons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
                background: rgba(255,255,255,0.3);
                border-radius: 50%;
                transform: scale(0);
                animation: ripple 0.6s ease-out;
                pointer-events: none;
            `;
            
            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);
            
            setTimeout(() => ripple.remove(), 600);
        });
    });

    // Add ripple animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes ripple {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);

    // Welcome toast
    setTimeout(() => {
        showToast('👋 Selamat datang! Berikan rating Anda di bawah.');
    }, 3000);
});