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
const projectGrid = document.querySelector('.project-grid');

tabs1.forEach(tab1 => {
    tab1.addEventListener('click', () => {
        const filter = tab1.dataset.filter;

        tabs1.forEach(t => t.classList.remove('active'));
        tab1.classList.add('active');

        projects.forEach(project => {
            const category = project.dataset.category;

            if (filter === 'all') {
                project.style.display = 'block';
            } else if (filter === category) {
                project.style.display = 'block';
            } else {
                project.style.display = 'none';
            }
        });

        // Responsive Grid Logic (using a function)
        function updateGridColumns() {
            let cols = 2; // Default number of columns

            switch (filter) {
                case 'all':
                case 'branding':
                    cols = 3;
                    break;
                case 'app':
                case 'books':
                    cols = 2;
                    break;
            }

            if (window.innerWidth <= 768) { // Adjust breakpoint as needed
                cols = Math.min(cols, 2); // Max 2 columns on smaller screens
            }
            if (window.innerWidth <= 480) { // Adjust breakpoint as needed
                cols = 1; // 1 column on very small screens
            }

            projectGrid.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;
        }

        updateGridColumns(); // Call initially and on filter change

        window.addEventListener('resize', updateGridColumns); // Update on window resize
    });
});

//project end



