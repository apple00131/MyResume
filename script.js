// 滾動動畫效果
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = `fadeInUp 0.8s ease-out forwards`;
        }
    });
}, observerOptions);

// 觀察所有section
document.querySelectorAll('.section').forEach(section => {
    observer.observe(section);
});

// 技能標籤動畫
document.querySelectorAll('.skill-category').forEach((category, index) => {
    category.addEventListener('mouseenter', () => {
        const tags = category.querySelectorAll('.skill-tag');
        tags.forEach((tag, tagIndex) => {
            tag.style.animation = `popIn 0.3s ease-out ${tagIndex * 0.1}s forwards`;
        });
    });
});

// 平滑滾動
document.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallax = document.querySelector('.floating-icons');
    const speed = scrolled * 0.5;
    parallax.style.transform = `translateY(${speed}px)`;
});

// 頁面載入動畫
window.addEventListener('load', () => {
    document.body.style.animation = 'fadeInUp 1s ease-out';
});