// 平滑滾動
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// 導航欄滾動效果
let lastScrollTop = 0;
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > lastScrollTop) {
        header.style.transform = 'translateY(-100%)';
    } else {
        header.style.transform = 'translateY(0)';
    }
    lastScrollTop = scrollTop;
});

// 添加頁面載入動畫
document.addEventListener('DOMContentLoaded', () => {
    document.body.classList.add('loaded');
    
    // 添加滾動顯示動畫
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // 觀察所有需要動畫的元素
    document.querySelectorAll('section').forEach(section => {
        section.classList.add('fade-up');
        observer.observe(section);
    });
});

// 添加技能標籤動畫
const skillTags = document.querySelectorAll('.skill-tag');
skillTags.forEach((tag, index) => {
    tag.style.animationDelay = `${index * 100}ms`;
});

// 添加專案卡片懸停效果
document.querySelectorAll('.featured-project').forEach(project => {
    const image = project.querySelector('.project-image');
    
    project.addEventListener('mouseenter', () => {
        image.style.transform = 'scale(1.05)';
    });
    
    project.addEventListener('mouseleave', () => {
        image.style.transform = 'scale(1)';
    });
});

// 添加打字機效果
function typeWriter(element, text, speed = 50) {
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// 在頁面加載時應用打字機效果
window.addEventListener('load', () => {
    const greeting = document.querySelector('.greeting');
    if (greeting) {
        typeWriter(greeting, greeting.textContent);
    }
});

// 添加暗色主題切換
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
const currentTheme = localStorage.getItem('theme');

if (currentTheme === 'dark' || (!currentTheme && prefersDarkScheme.matches)) {
    document.body.classList.add('dark-theme');
}

// 添加平滑滾動到頂部按鈕
const scrollToTopButton = document.createElement('button');
scrollToTopButton.innerHTML = '↑';
scrollToTopButton.className = 'scroll-to-top';
document.body.appendChild(scrollToTopButton);

scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 100) {
        scrollToTopButton.classList.add('visible');
    } else {
        scrollToTopButton.classList.remove('visible');
    }
});

// 自定义光标效果
const cursor = document.querySelector('.cursor');
const cursorFollower = document.querySelector('.cursor-follower');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    
    cursorFollower.style.left = e.clientX + 'px';
    cursorFollower.style.top = e.clientY + 'px';
});

// 添加鼠标悬停效果
const hoverElements = document.querySelectorAll('a, button, .project-card');
hoverElements.forEach(element => {
    element.addEventListener('mouseenter', () => {
        cursor.classList.add('cursor-hover');
        cursorFollower.classList.add('cursor-follower-hover');
    });
    
    element.addEventListener('mouseleave', () => {
        cursor.classList.remove('cursor-hover');
        cursorFollower.classList.remove('cursor-follower-hover');
    });
});

// 打字机效果
const texts = ['Web Developer', 'iOS Developer', 'Problem Solver'];
let textIndex = 0;
let charIndex = 0;
const typingText = document.querySelector('.typing-text');

function type() {
    if (charIndex < texts[textIndex].length) {
        typingText.textContent += texts[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, 100);
    } else {
        setTimeout(erase, 2000);
    }
}

function erase() {
    if (charIndex > 0) {
        typingText.textContent = texts[textIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, 50);
    } else {
        textIndex = (textIndex + 1) % texts.length;
        setTimeout(type, 500);
    }
}

type();

// 滚动动画
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, observerOptions);

document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// 导航栏滚动效果
let lastScroll = 0;
const navHeader = document.querySelector('header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        navHeader.classList.remove('scroll-up');
        return;
    }
    
    if (currentScroll > lastScroll && !navHeader.classList.contains('scroll-down')) {
        navHeader.classList.remove('scroll-up');
        navHeader.classList.add('scroll-down');
    } else if (currentScroll < lastScroll && navHeader.classList.contains('scroll-down')) {
        navHeader.classList.remove('scroll-down');
        navHeader.classList.add('scroll-up');
    }
    
    lastScroll = currentScroll;
});

// 移动端菜单
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// 表单提交效果
const contactForm = document.getElementById('contactForm');
const submitBtn = contactForm.querySelector('.submit-btn');

contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    submitBtn.classList.add('loading');
    
    // 这里添加表单提交逻辑
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    submitBtn.classList.remove('loading');
    submitBtn.classList.add('success');
    
    setTimeout(() => {
        submitBtn.classList.remove('success');
        contactForm.reset();
    }, 3000);
});

// 粒子背景效果
class Particle {
    constructor() {
        this.x = Math.random() * window.innerWidth;
        this.y = Math.random() * window.innerHeight;
        this.size = Math.random() * 3 + 1;
        this.speedX = Math.random() * 3 - 1.5;
        this.speedY = Math.random() * 3 - 1.5;
        this.element = document.createElement('div');
        this.element.className = 'particle';
        this.element.style.width = this.size + 'px';
        this.element.style.height = this.size + 'px';
        this.element.style.left = this.x + 'px';
        this.element.style.top = this.y + 'px';
        document.querySelector('.particles-container').appendChild(this.element);
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x < 0 || this.x > window.innerWidth) this.speedX *= -1;
        if (this.y < 0 || this.y > window.innerHeight) this.speedY *= -1;

        this.element.style.left = this.x + 'px';
        this.element.style.top = this.y + 'px';
    }
}

const particles = [];
for (let i = 0; i < 50; i++) {
    particles.push(new Particle());
}

function animateParticles() {
    particles.forEach(particle => particle.update());
    requestAnimationFrame(animateParticles);
}

animateParticles();

// 项目卡片悬停效果
const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.querySelector('.project-overlay').style.opacity = '1';
    });
    
    card.addEventListener('mouseleave', () => {
        card.querySelector('.project-overlay').style.opacity = '0';
    });
});

// 技能标签动画
const skillElements = document.querySelectorAll('.skill-tag');

skillElements.forEach(tag => {
    tag.addEventListener('mouseenter', () => {
        tag.style.transform = 'translateX(10px)';
        tag.style.color = 'var(--primary)';
    });
    
    tag.addEventListener('mouseleave', () => {
        tag.style.transform = 'translateX(0)';
        tag.style.color = 'var(--light)';
    });
}); 