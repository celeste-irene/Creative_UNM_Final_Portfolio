// Smooth scroll navigation

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Map nav text to section IDs
        const navText = this.textContent.trim();
        let targetId = '';
        
        if (navText.includes('Essay')) {
            targetId = 'essay';
        } else if (navText.includes('In-Class Reflections')) {
            targetId = 'assignments';
        } else if (navText.includes('Works Cited')) {
            targetId = 'works';
        }else if (navText.includes('SLO')) {
            targetId = 'slo';
        }
        // Add more mappings as you create those sections
        
        // Smooth scroll to the target section
        if (targetId) {
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});