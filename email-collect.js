// 本地邮箱收集（不打开邮件客户端）
document.addEventListener('DOMContentLoaded', function() {
    window.saveEmail = function() {
        const emailInput = document.getElementById('email');
        const email = emailInput.value.trim();
        
        if (!email || !email.includes('@')) {
            alert('请输入有效的邮箱地址');
            return;
        }
        
        // 保存到本地存储
        let collectedEmails = JSON.parse(localStorage.getItem('focuspal_emails') || '[]');
        if (!collectedEmails.includes(email)) {
            collectedEmails.push(email);
            localStorage.setItem('focuspal_emails', JSON.stringify(collectedEmails));
            
            // 显示成功消息
            alert('感谢注册！我们会通过 zcycharls@gmail.com 尽快与你联系。');
            emailInput.value = '';
            
            // 可选：发送数据到你的服务器（如果有的话）
            // sendToServer(email);
        } else {
            alert('你已经注册过了！');
        }
    };
    
    // 回车提交
    const emailInput = document.getElementById('email');
    if (emailInput) {
        emailInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                saveEmail();
            }
        });
    }
    
    // 可选：发送到服务器的函数（需要后端支持）
    function sendToServer(email) {
        // 这里可以添加实际的API调用
        console.log('Collected email:', email);
    }
});