// Function to show the clicked section and hide the others
function showSection(sectionId) {
    // Hide all sections
    let sections = document.querySelectorAll('.section-container');
    sections.forEach(function(section) {
        section.classList.remove('active');
    });

    // Show the clicked section
    let activeSection = document.getElementById(sectionId);
    activeSection.classList.add('active');
}
