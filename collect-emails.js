// 简单的mailto邮箱收集（无需后端）
document.addEventListener('DOMContentLoaded', function() {
    // 从config.js获取邮箱地址
    const contactEmail = typeof FOCUSPAL_CONFIG !== 'undefined' ? 
        FOCUSPAL_CONFIG.contactEmail : 'your-email@example.com';
    
    window.submitEmail = function() {
        const emailInput = document.getElementById('email');
        const userEmail = emailInput.value.trim();
        
        if (!userEmail || !userEmail.includes('@')) {
            alert('请输入有效的邮箱地址');
            return;
        }
        
        // 使用mailto链接发送邮件
        const subject = encodeURIComponent('FocusPal早期用户注册');
        const body = encodeURIComponent(`用户邮箱: ${userEmail}\n\n我想成为FocusPal的早期测试用户！`);
        const mailtoLink = `mailto:${contactEmail}?subject=${subject}&body=${body}`;
        
        // 打开邮件客户端
        window.location.href = mailtoLink;
        
        // 同时保存到本地存储用于跟踪
        let collectedEmails = JSON.parse(localStorage.getItem('focuspal_emails') || '[]');
        if (!collectedEmails.includes(userEmail)) {
            collectedEmails.push(userEmail);
            localStorage.setItem('focuspal_emails', JSON.stringify(collectedEmails));
            alert('邮件已准备发送！请在邮件客户端中确认发送。同时我们已记录您的信息。');
        } else {
            alert('您已经注册过了！邮件已准备发送。');
        }
    };
    
    // 也可以按回车提交
    const emailInput = document.getElementById('email');
    if (emailInput) {
        emailInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                submitEmail();
            }
        });
    }
});