// 简单的邮箱收集脚本（用于本地测试）
// 在实际部署时，你可能需要使用 Formspree、Netlify Forms 或其他表单服务

document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form') || document.querySelector('.input-group');
    const emailInput = document.getElementById('email');
    const submitButton = document.querySelector('button[type="submit"]') || document.querySelector('button');
    
    if (submitButton) {
        submitButton.addEventListener('click', function(e) {
            e.preventDefault();
            const email = emailInput.value.trim();
            
            if (!email || !email.includes('@')) {
                alert('请输入有效的邮箱地址');
                return;
            }
            
            // 这里可以添加实际的表单提交逻辑
            // 例如：fetch('/api/collect-email', { method: 'POST', body: JSON.stringify({ email }) })
            
            // 临时：保存到本地存储（仅用于演示）
            let collectedEmails = JSON.parse(localStorage.getItem('focuspal_emails') || '[]');
            if (!collectedEmails.includes(email)) {
                collectedEmails.push(email);
                localStorage.setItem('focuspal_emails', JSON.stringify(collectedEmails));
                alert('感谢注册！我们会尽快与你联系。');
                emailInput.value = '';
            } else {
                alert('你已经注册过了！');
            }
        });
    }
});