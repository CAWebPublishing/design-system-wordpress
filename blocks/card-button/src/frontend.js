// Hide buttons for interactive cards
const cardGroups = document.querySelectorAll('ul.cards');
const cardButtons = document.querySelectorAll('ul.cards .action');


cardGroups.forEach(group => {
  if (group.dataset.action === 'interactive') {
    cardButtons.forEach(button => {
      button.style.display = 'none';
    })
  }
});

