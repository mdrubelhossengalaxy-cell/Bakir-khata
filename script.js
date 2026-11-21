document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.querySelector('input[placeholder="খুঁজুন..."]');
    const records = document.querySelectorAll('.record-item'); // ভবিষ্যতে প্রতিটি এন্ট্রির জন্য এই ক্লাস ব্যবহার করতে পারেন

    searchInput.addEventListener('input', (e) => {
        const value = e.target.value.toLowerCase();
        records.forEach(record => {
            const text = record.textContent.toLowerCase();
            record.style.display = text.includes(value) ? '' : 'none';
        });
    });
});
