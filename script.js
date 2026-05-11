const menuButton = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');
const yearSpan = document.querySelector('#year');
const dailyDate = document.querySelector('#daily-date');
const dailyMonth = document.querySelector('#daily-month');
const dailyQuote = document.querySelector('#daily-quote');

const quotes = [
  'AI is best when it amplifies human creativity.',
  'Innovation begins with curiosity and courageous questions.',
  'Small experiments today become big breakthroughs tomorrow.',
  'Build solutions that improve lives, not just systems.',
  'Data becomes wisdom when guided by purpose.',
  'The future belongs to learners who build.',
  'Responsible AI is powerful AI.',
  'Every line of code can create new opportunity.',
  'Great technology starts with empathy.',
  'Learn fast, share openly, improve continuously.',
  'Progress is made one prototype at a time.',
  'Think boldly, test quickly, iterate wisely.',
  'Good AI solves real problems for real people.',
  'Innovation grows where collaboration is strong.',
  'Use technology to lift communities higher.',
  'The smartest systems still need human values.',
  'Creativity and computation are a powerful team.',
  'Today’s practice is tomorrow’s expertise.',
  'Build with integrity, deploy with care.',
  'Curiosity is the engine of discovery.',
  'Future-ready minds never stop learning.',
  'Great products come from clear purpose.',
  'Your next idea could solve a local challenge.',
  'AI literacy is a superpower for this generation.',
  'Iterate often and let feedback guide the way.',
  'Code can be a tool for inclusion and impact.',
  'Innovation thrives in diverse teams.',
  'A better question can unlock a better model.',
  'Ethical decisions make technologies sustainable.',
  'Start where you are and build what matters.',
  'Learning by doing is the fastest path to mastery.',
  'Design for people first, technology second.',
  'Bold ideas become real through disciplined execution.',
  'Technology with purpose creates lasting change.',
  'Keep improving; progress compounds daily.',
  'AI should empower, not replace, human potential.'
];

if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

if (dailyDate && dailyMonth && dailyQuote) {
  const now = new Date();
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];
  const dateParts = new Intl.DateTimeFormat('en-US', {
    timeZone: 'Africa/Kampala',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  }).formatToParts(now);
  const parts = dateParts.reduce((acc, part) => {
    if (part.type === 'year' || part.type === 'month' || part.type === 'day') {
      acc[part.type] = part.value;
    }
    return acc;
  }, {});
  const year = Number(parts.year);
  const month = Number(parts.month);
  const day = Number(parts.day);
  const dateKey = `${parts.year}-${parts.month}-${parts.day}`;
  const quoteSeed = [...dateKey].reduce((acc, char) => acc + char.charCodeAt(0), 0);
  const quoteIndex = quoteSeed % quotes.length;

  dailyDate.textContent = String(day).padStart(2, '0');
  dailyMonth.textContent = monthNames[month - 1];

  dailyQuote.textContent = `“${quotes[quoteIndex]}”`;
}

if (menuButton && navMenu) {
  menuButton.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    const isExpanded = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!isExpanded));
  });

  navMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
      menuButton.setAttribute('aria-expanded', 'false');
    });
  });
}
