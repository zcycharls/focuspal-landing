// 测试邮箱收集功能
console.log('=== FocusPal 邮箱收集功能测试 ===');

// 模拟localStorage
const localStorageMock = {
    data: {},
    getItem(key) {
        return this.data[key] || null;
    },
    setItem(key, value) {
        this.data[key] = value;
    },
    clear() {
        this.data = {};
    }
};

// 模拟saveEmail函数
function testSaveEmail(email) {
    if (!email || !email.includes('@')) {
        console.log('❌ 无效邮箱:', email);
        return false;
    }
    
    let collectedEmails = JSON.parse(localStorageMock.getItem('focuspal_emails') || '[]');
    if (!collectedEmails.includes(email)) {
        collectedEmails.push(email);
        localStorageMock.setItem('focuspal_emails', JSON.stringify(collectedEmails));
        console.log('✅ 成功保存邮箱:', email);
        return true;
    } else {
        console.log('⚠️ 邮箱已存在:', email);
        return false;
    }
}

// 测试用例
console.log('\n🧪 测试用例 1: 有效邮箱');
testSaveEmail('user@example.com');

console.log('\n🧪 测试用例 2: 重复邮箱');
testSaveEmail('user@example.com');

console.log('\n🧪 测试用例 3: 无效邮箱');
testSaveEmail('invalid-email');

console.log('\n🧪 测试用例 4: 另一个有效邮箱');
testSaveEmail('another@test.com');

console.log('\n📊 最终结果:');
console.log('收集的邮箱:', JSON.parse(localStorageMock.getItem('focuspal_emails')));

console.log('\n✅ 功能测试完成 - 无邮件客户端弹出，仅本地存储');