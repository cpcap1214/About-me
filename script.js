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