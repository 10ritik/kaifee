// About us

const tabs = document.querySelectorAll('.tab');
const tabContents = document.querySelectorAll('.tab-content');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const targetTab = document.getElementById(tab.dataset.tab);

        // Hide all tab content
        tabContents.forEach(content => content.classList.remove('active'));

        // Show the selected tab content
        targetTab.classList.add('active');

        // Deactivate all tabs
        tabs.forEach(t => t.classList.remove('active'));

        // Activate the clicked tab
        tab.classList.add('active');
    });
});

//about us end

// projects

const tabs1 = document.querySelectorAll('.project-tab');
const projects = document.querySelectorAll('.project-item');

tabs1.forEach(tab1 => {
    tab1.addEventListener('click', () => {
        const filter = tab1.dataset.filter;
        
        tabs1.forEach(t => t.classList.remove('active'));
        tab1.classList.add('active');

        let count = 0;
        
        projects.forEach(project => {
            const category = project.dataset.category;
            
            if (filter === 'all') {
                project.style.display = 'block';
            } else if (filter === category && count < 2) {
                project.style.display = 'block';
                count++;
            } else {
                project.style.display = 'none';
            }
        });

        // ✅ Dynamically adjust columns based on screen width
        const projectGrid = document.querySelector('.project-grid');
        if (window.innerWidth <= 480) {
            projectGrid.style.gridTemplateColumns = '1fr'; // Mobile: 1 column
        } else if (window.innerWidth <= 768) {
            projectGrid.style.gridTemplateColumns = 'repeat(2, 1fr)'; // Tablet: 2 columns
        } else {
            projectGrid.style.gridTemplateColumns = (filter === 'all') ? 'repeat(3, 1fr)' : 'repeat(2, 1fr)'; // Default: 3 columns
        }
    });
});


window.addEventListener('resize', () => {
    const projectGrid = document.querySelector('.project-grid');
    if (window.innerWidth <= 480) {
        projectGrid.style.gridTemplateColumns = '1fr';
    } else if (window.innerWidth <= 768) {
        projectGrid.style.gridTemplateColumns = 'repeat(2, 1fr)';
    } else {
        projectGrid.style.gridTemplateColumns = 'repeat(3, 1fr)';
    }
});

//project end



