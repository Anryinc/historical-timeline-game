const EMBEDDED_EVENTS = [{"id": "pyramids", "title": "Строительство Великих пирамид Гизы", "year": -2560, "description": "Возведение пирамид Хеопса, Хефрена и Микерина в Древнем Египте", "era": "ancient", "category": "culture"}, {"id": "hammurabi", "title": "Кодекс Хаммурапи", "year": -1754, "description": "Один из древнейших сводов законов Месопотамии", "era": "ancient", "category": "politics"}, {"id": "olympics", "title": "Первые Олимпийские игры", "year": -776, "description": "Начало античных Олимпийских игр в Греции", "era": "ancient", "category": "culture"}, {"id": "rome-founded", "title": "Основание Рима", "year": -753, "description": "Традиционная дата основания Вечного города", "era": "ancient", "category": "politics"}, {"id": "buddha", "title": "Рождение Будды (приблизительно)", "year": -563, "description": "Сидарта Гаутама — основатель буддизма", "era": "ancient", "category": "religion"}, {"id": "marathon", "title": "Битва при Марафоне", "year": -490, "description": "Победа греков над персами", "era": "ancient", "category": "war"}, {"id": "alexander", "title": "Начало походов Александра Македонского", "year": -334, "description": "Создание огромной империи от Греции до Индии", "era": "ancient", "category": "war"}, {"id": "caesar-death", "title": "Убийство Юлия Цезаря", "year": -44, "description": "Иды марта — заговор против диктатора Рима", "era": "ancient", "category": "politics"}, {"id": "pompeii", "title": "Извержение Везувия, гибель Помпеев", "year": 79, "description": "Город погребён под пеплом", "era": "ancient", "category": "disaster"}, {"id": "rome-fall", "title": "Падение Западной Римской империи", "year": 476, "description": "Конец античности", "era": "ancient", "category": "politics"}, {"id": "mecca", "title": "Хиджра — начало исламского летоисчисления", "year": 622, "description": "Переселение Мухаммеда из Мекки в Медину", "era": "medieval", "category": "religion"}, {"id": "charlemagne", "title": "Коронация Карла Великого", "year": 800, "description": "Император Священной Римской империи", "era": "medieval", "category": "politics"}, {"id": "hastings", "title": "Битва при Гастингсе", "year": 1066, "description": "Нормандское завоевание Англии", "era": "medieval", "category": "war"}, {"id": "crusades", "title": "Начало Первого крестового похода", "year": 1096, "description": "Христианские походы на Восток", "era": "medieval", "category": "war"}, {"id": "magna-carta", "title": "Великая хартия вольностей", "year": 1215, "description": "Ограничение власти английского короля", "era": "medieval", "category": "politics"}, {"id": "black-death", "title": "Чёрная смерть в Европе", "year": 1347, "description": "Пандемия чумы, унёсшая миллионы жизней", "era": "medieval", "category": "disaster"}, {"id": "printing", "title": "Изобретение печатного станка Гутенбергом", "year": 1440, "description": "Революция в распространении знаний", "era": "medieval", "category": "technology"}, {"id": "constantinople", "title": "Падение Константинополя", "year": 1453, "description": "Конец Византийской империи", "era": "medieval", "category": "war"}, {"id": "columbus", "title": "Открытие Америки Колумбом", "year": 1492, "description": "Первое путешествие Христофора Колумба", "era": "early_modern", "category": "discovery"}, {"id": "reformation", "title": "95 тезисов Мартина Лютера", "year": 1517, "description": "Начало Реформации", "era": "early_modern", "category": "religion"}, {"id": "magellan", "title": "Первое кругосветное плавание", "year": 1519, "description": "Экспедиция Магеллана доказывает шарообразность Земли", "era": "early_modern", "category": "discovery"}, {"id": "copernicus", "title": "«О вращении небесных сфер» Коперника", "year": 1543, "description": "Гелиоцентрическая система мира", "era": "early_modern", "category": "science"}, {"id": "galileo", "title": "Галилей направляет телескоп на небо", "year": 1609, "description": "Открытие спутников Юпитера и фаз Венеры", "era": "early_modern", "category": "science"}, {"id": "newton", "title": "«Математические начала» Ньютона", "year": 1687, "description": "Законы движения и всемирного тяготения", "era": "early_modern", "category": "science"}, {"id": "usa-independence", "title": "Декларация независимости США", "year": 1776, "description": "Рождение Соединённых Штатов Америки", "era": "early_modern", "category": "politics"}, {"id": "french-revolution", "title": "Взятие Бастилии", "year": 1789, "description": "Начало Французской революции", "era": "early_modern", "category": "politics"}, {"id": "napoleon-moscow", "title": "Наполеон входит в Москву", "year": 1812, "description": "Кульминация Отечественной войны, французы входят в опустевшую Москву", "era": "modern", "category": "war"}, {"id": "darwin", "title": "«Происхождение видов» Дарвина", "year": 1859, "description": "Теория эволюции путём естественного отбора", "era": "modern", "category": "science"}, {"id": "telephone", "title": "Изобретение телефона Беллом", "year": 1876, "description": "Первый успешный телефонный звонок", "era": "modern", "category": "technology"}, {"id": "eiffel", "title": "Строительство Эйфелевой башни", "year": 1889, "description": "Символ Парижа к Всемирной выставке", "era": "modern", "category": "culture"}, {"id": "wright", "title": "Первый полёт братьев Райт", "year": 1903, "description": "Рождение авиации", "era": "modern", "category": "technology"}, {"id": "einstein", "title": "Специальная теория относительности", "year": 1905, "description": "Эйнштейн публикует революционную работу", "era": "modern", "category": "science"}, {"id": "ww1-start", "title": "Начало Первой мировой войны", "year": 1914, "description": "Убийство в Сараево и начало мировой войны", "era": "modern", "category": "war"}, {"id": "october", "title": "Октябрьская революция в России", "year": 1917, "description": "Большевики берут власть в Петрограде", "era": "modern", "category": "politics"}, {"id": "ww1-end", "title": "Окончание Первой мировой войны", "year": 1918, "description": "Компьенское перемирие", "era": "modern", "category": "war"}, {"id": "penicillin", "title": "Открытие пенициллина", "year": 1928, "description": "Александр Флеминг открывает антибиотик", "era": "modern", "category": "science"}, {"id": "ww2-start", "title": "Начало Второй мировой войны", "year": 1939, "description": "Вторжение Германии в Польшу", "era": "modern", "category": "war"}, {"id": "pearl-harbor", "title": "Нападение на Перл-Харбор", "year": 1941, "description": "США вступают во Вторую мировую войну", "era": "modern", "category": "war"}, {"id": "hiroshima", "title": "Атомная бомбардировка Хиросимы", "year": 1945, "description": "Первое боевое применение ядерного оружия", "era": "modern", "category": "war"}, {"id": "ww2-end", "title": "Окончание Второй мировой войны", "year": 1945, "description": "Капитуляция Японии", "era": "modern", "category": "war"}, {"id": "un", "title": "Создание ООН", "year": 1945, "description": "Организация Объединённых Наций", "era": "contemporary", "category": "politics"}, {"id": "sputnik", "title": "Запуск первого спутника", "year": 1957, "description": "СССР открывает космическую эру", "era": "contemporary", "category": "science"}, {"id": "gagarin", "title": "Полёт Юрия Гагарина", "year": 1961, "description": "Первый человек в космосе", "era": "contemporary", "category": "science"}, {"id": "berlin-wall", "title": "Возведение Берлинской стены", "year": 1961, "description": "Символ холодной войны", "era": "contemporary", "category": "politics"}, {"id": "moon", "title": "Высадка на Луну", "year": 1969, "description": "Нил Армстронг — первый человек на Луне", "era": "contemporary", "category": "science"}, {"id": "internet", "title": "Рождение ARPANET (предшественник Интернета)", "year": 1969, "description": "Первая сеть передачи пакетов", "era": "contemporary", "category": "technology"}, {"id": "chernobyl", "title": "Чернобыльская катастрофа", "year": 1986, "description": "Крупнейшая авария на АЭС", "era": "contemporary", "category": "disaster"}, {"id": "berlin-wall-fall", "title": "Падение Берлинской стены", "year": 1989, "description": "Символический конец холодной войны", "era": "contemporary", "category": "politics"}, {"id": "www", "title": "Изобретение Всемирной паутины", "year": 1989, "description": "Тим Бернерс-Ли создаёт WWW", "era": "contemporary", "category": "technology"}, {"id": "ussr-collapse", "title": "Распад СССР", "year": 1991, "description": "Конец Советского Союза", "era": "contemporary", "category": "politics"}, {"id": "google", "title": "Основание Google", "year": 1998, "description": "Начало эры поисковых систем нового поколения", "era": "contemporary", "category": "technology"}, {"id": "911", "title": "Теракты 11 сентября", "year": 2001, "description": "Атаки на Всемирный торговый центр и Пентагон", "era": "contemporary", "category": "disaster"}, {"id": "iphone", "title": "Презентация первого iPhone", "year": 2007, "description": "Революция смартфонов", "era": "contemporary", "category": "technology"}, {"id": "covid", "title": "Начало пандемии COVID-19", "year": 2019, "description": "Глобальная пандемия коронавируса", "era": "contemporary", "category": "disaster"}, {"id": "chatgpt", "title": "Публичный запуск ChatGPT", "year": 2022, "description": "Массовый доступ к большим языковым моделям", "era": "contemporary", "category": "technology"}];

const ERA_LABELS = {
  ancient: 'Древний мир',
  medieval: 'Средневековье',
  early_modern: 'Новое время',
  modern: 'XIX — первая пол. XX в.',
  contemporary: 'Современность'
};
const CATEGORY_LABELS = {
  politics: 'Политика', war: 'Войны', science: 'Наука', culture: 'Культура',
  discovery: 'Открытия', technology: 'Технологии', disaster: 'Катастрофы', religion: 'Религия'
};

let allEvents = [];
let gameEvents = [];
let placed = [];
let currentIndex = 0;
let correctCount = 0;
let wrongCount = 0;
let streak = 0;
let maxStreak = 0;
let score = 0;
let difficulty = 15;
let settings = { showYears: true, allowSameYear: true };
let lastDifficulty = 15;
let tutorialMode = false;

const $ = (s) => document.querySelector(s);
const screens = {
  start: $('#start-screen'),
  game: $('#game-screen'),
  result: $('#result-screen')
};

function showScreen(name) {
  Object.values(screens).forEach(s => s.classList.remove('active'));
  screens[name].classList.add('active');
}

function loadEvents() {
  allEvents = EMBEDDED_EVENTS.filter(e => e.id !== 'christ');
  return Promise.resolve();
}

function readSettings() {
  settings.showYears = $('#setting-show-years').checked;
  settings.allowSameYear = $('#setting-allow-same-year').checked;
}

function showTutorial(text, hint, isSuccess) {
  const ov = $('#tutorial-overlay');
  $('#tutorial-text').textContent = text;
  $('#tutorial-hint').textContent = hint || '';
  ov.classList.toggle('success', !!isSuccess);
  ov.classList.remove('hidden');
}

function hideTutorial() {
  $('#tutorial-overlay').classList.add('hidden');
}

function startGame(count) {
  readSettings();
  difficulty = count;
  lastDifficulty = count;

  let pool = [...allEvents];
  if (!settings.allowSameYear) {
    const seen = new Set();
    pool = pool.filter(e => {
      if (seen.has(e.year)) return false;
      seen.add(e.year);
      return true;
    });
  }
  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }
  gameEvents = pool.slice(0, Math.min(count, pool.length));

  placed = [];
  currentIndex = 0;
  correctCount = 0;
  wrongCount = 0;
  streak = 0;
  maxStreak = 0;
  score = 0;
  tutorialMode = true;

  updateHUD();
  renderTimeline();
  showScreen('game');

  showTutorial(
    'События нужно размещать на шкале относительно уже стоящих меток — левее (раньше) или правее (позже).',
    'Сначала поставь точку отсчёта: «Рождение Христа» (год 0). Кликни по шкале.'
  );

  showTutorialEvent();
}

function showTutorialEvent() {
  const card = $('#current-event');
  $('#event-title').textContent = 'Рождение Иисуса Христа';
  $('#event-desc').textContent = 'Точка отсчёта нашей эры. Размести эту метку на шкале — это тренировка, очки не начисляются.';
  $('#event-category').textContent = 'Туториал';
  card.classList.remove('burn');
  card.querySelectorAll('.flames').forEach(el => el.remove());
  card.draggable = true;
  card.ondragstart = (e) => {
    card.classList.add('dragging');
    e.dataTransfer.setData('text/plain', 'event');
  };
  card.ondragend = () => card.classList.remove('dragging');
  $('#btn-skip').style.display = 'none';
}

function showCurrentEvent() {
  if (tutorialMode) {
    showTutorialEvent();
    return;
  }
  $('#btn-skip').style.display = '';
  if (currentIndex >= gameEvents.length) {
    endGame();
    return;
  }
  const ev = gameEvents[currentIndex];
  $('#event-title').textContent = ev.title;
  $('#event-desc').textContent = ev.description;
  $('#event-category').textContent = CATEGORY_LABELS[ev.category] || ev.category;

  const card = $('#current-event');
  card.classList.remove('burn');
  card.querySelectorAll('.flames').forEach(el => el.remove());
  card.draggable = true;
  card.ondragstart = (e) => {
    card.classList.add('dragging');
    e.dataTransfer.setData('text/plain', 'event');
  };
  card.ondragend = () => card.classList.remove('dragging');
}

function renderTimeline() {
  const tl = $('#timeline');
  tl.innerHTML = '';
  placed.sort((a, b) => a.year - b.year);

  if (placed.length === 0) {
    const gap = document.createElement('div');
    gap.className = 'gap';
    gap.dataset.gapIndex = -1;
    gap.style.minWidth = '120px';
    gap.style.flex = '1';
    attachGapHandlers(gap, -1);
    tl.appendChild(gap);
    return;
  }

  const leftGap = document.createElement('div');
  leftGap.className = 'gap';
  leftGap.dataset.gapIndex = -1;
  attachGapHandlers(leftGap, -1);
  tl.appendChild(leftGap);

  placed.forEach((ev, i) => {
    const marker = document.createElement('div');
    marker.className = 'marker' + (ev.isZero ? ' zero' : '');
    marker.innerHTML = `
      <div class="marker-dot"></div>
      <div class="marker-year">${formatYear(ev.year)}</div>
      <div class="marker-title">${ev.title}</div>
    `;
    if (!settings.showYears && !ev.isZero) {
      marker.querySelector('.marker-year').style.visibility = 'hidden';
    }
    tl.appendChild(marker);

    const gap = document.createElement('div');
    gap.className = 'gap';
    gap.dataset.gapIndex = i;
    attachGapHandlers(gap, i);
    tl.appendChild(gap);
  });
}

function formatYear(y) {
  if (y === 0) return '0';
  if (y < 0) return `${Math.abs(y)} до н.э.`;
  return `${y}`;
}

function attachGapHandlers(el, gapIndex) {
  el.addEventListener('click', () => tryPlace(gapIndex));
  el.addEventListener('dragover', (e) => {
    e.preventDefault();
    el.classList.add('drag-over');
  });
  el.addEventListener('dragleave', () => el.classList.remove('drag-over'));
  el.addEventListener('drop', (e) => {
    e.preventDefault();
    el.classList.remove('drag-over');
    tryPlace(gapIndex);
  });
}

function tryPlace(gapIndex) {
  if (tutorialMode) {
    onTutorialPlace();
    return;
  }

  if (currentIndex >= gameEvents.length) return;

  const ev = gameEvents[currentIndex];
  const sorted = [...placed].sort((a, b) => a.year - b.year);

  let leftYear = -Infinity;
  let rightYear = Infinity;

  if (gapIndex === -1) {
    rightYear = sorted[0].year;
  } else if (gapIndex >= sorted.length - 1) {
    leftYear = sorted[sorted.length - 1].year;
  } else {
    leftYear = sorted[gapIndex].year;
    rightYear = sorted[gapIndex + 1].year;
  }

  const year = ev.year;
  let correct = false;

  if (settings.allowSameYear) {
    if (leftYear === -Infinity) correct = year <= rightYear;
    else if (rightYear === Infinity) correct = year >= leftYear;
    else correct = year >= leftYear && year <= rightYear;
  } else {
    if (leftYear === -Infinity) correct = year < rightYear;
    else if (rightYear === Infinity) correct = year > leftYear;
    else correct = year > leftYear && year < rightYear;
  }

  if (correct) onCorrect(ev, gapIndex);
  else onWrong(ev);
}

function onTutorialPlace() {
  placed = [{
    id: 'zero',
    title: 'Рождение Христа',
    year: 0,
    description: 'Точка отсчёта нашей эры',
    era: 'ancient',
    category: 'religion',
    isZero: true
  }];
  renderTimeline();

  showTutorial(
    'Отлично! Теперь ты знаешь, как размещать события.',
    'Начинаем игру — дальше уже засчитывается.',
    true
  );

  setTimeout(() => {
    hideTutorial();
    tutorialMode = false;
    currentIndex = 0;
    updateHUD();
    showCurrentEvent();
  }, 2200);
}

function spawnFlames(card) {
  card.querySelectorAll('.flames').forEach(el => el.remove());
  const container = document.createElement('div');
  container.className = 'flames';
  const emojis = ['🔥', '🔥', '✨', '🔥', '🔥', '🧡', '🔥', '✨', '🔥'];
  const count = 9 + Math.floor(Math.random() * 4);
  for (let i = 0; i < count; i++) {
    const p = document.createElement('span');
    p.className = 'flame-particle';
    p.textContent = emojis[i % emojis.length];
    p.style.left = (8 + Math.random() * 84) + '%';
    p.style.fontSize = (0.7 + Math.random() * 0.9) + 'rem';
    p.style.animationDelay = (Math.random() * 0.25) + 's';
    p.style.animationDuration = (0.85 + Math.random() * 0.4) + 's';
    container.appendChild(p);
  }
  card.appendChild(container);
}

function onCorrect(ev, gapIndex) {
  placed.push({ ...ev });
  correctCount++;
  streak++;
  maxStreak = Math.max(maxStreak, streak);
  score += 100 + Math.min(streak * 10, 100);

  const gaps = document.querySelectorAll('.gap');
  const targetGap = [...gaps].find(g => parseInt(g.dataset.gapIndex) === gapIndex);
  if (targetGap) {
    targetGap.classList.add('correct-flash');
    setTimeout(() => targetGap.classList.remove('correct-flash'), 400);
  }

  currentIndex++;
  updateHUD();
  renderTimeline();
  showCurrentEvent();
}

function onWrong(ev) {
  wrongCount++;
  streak = 0;

  const card = $('#current-event');
  spawnFlames(card);
  card.classList.add('burn');
  card.draggable = false;

  setTimeout(() => {
    currentIndex++;
    updateHUD();
    showCurrentEvent();
  }, 1200);
}

function updateHUD() {
  const total = gameEvents.length;
  const shown = tutorialMode ? 0 : currentIndex;
  $('#progress-text').textContent = `${shown} / ${total}`;
  $('#progress-fill').style.width = `${(shown / total) * 100}%`;
  $('#correct-count').textContent = `✅ ${correctCount}`;
  $('#streak-count').textContent = `🔥 ${streak}`;
  $('#score-count').textContent = `⭐ ${score}`;
}

function endGame() {
  hideTutorial();
  showScreen('result');

  const total = gameEvents.length;
  const accuracy = total > 0 ? Math.round((correctCount / total) * 100) : 0;

  let title = 'Игра окончена';
  if (accuracy >= 90) title = 'Легенда истории! 🏆';
  else if (accuracy >= 70) title = 'Отличный результат! 🎉';
  else if (accuracy >= 50) title = 'Неплохо! 👍';
  else if (accuracy >= 30) title = 'Есть куда расти';
  else title = 'Попробуй ещё раз';

  $('#result-title').textContent = title;
  $('#final-score').textContent = score;
  $('#accuracy-percent').textContent = `${accuracy}%`;
  $('#stat-correct').textContent = correctCount;
  $('#stat-wrong').textContent = wrongCount;
  $('#stat-streak').textContent = maxStreak;

  const ring = $('#accuracy-ring');
  const circumference = 2 * Math.PI * 45;
  const offset = circumference - (accuracy / 100) * circumference;
  setTimeout(() => { ring.style.strokeDashoffset = offset; }, 100);

  const banner = $('#victory-banner');
  banner.classList.add('celebrate');
  setTimeout(() => banner.classList.remove('celebrate'), 2000);

  renderAnalysis();
  renderResultTimeline();
}

function renderAnalysis() {
  const block = $('#analysis-block');
  const content = $('#analysis-content');
  content.innerHTML = '';

  const correctByEra = {}, totalByEra = {}, correctByCat = {}, totalByCat = {};
  gameEvents.forEach(ev => {
    const wasCorrect = placed.some(p => p.id === ev.id);
    const era = ev.era || 'unknown';
    const cat = ev.category || 'unknown';
    totalByEra[era] = (totalByEra[era] || 0) + 1;
    totalByCat[cat] = (totalByCat[cat] || 0) + 1;
    if (wasCorrect) {
      correctByEra[era] = (correctByEra[era] || 0) + 1;
      correctByCat[cat] = (correctByCat[cat] || 0) + 1;
    }
  });

  const strengths = [], weaknesses = [];
  Object.keys(totalByEra).forEach(era => {
    if (totalByEra[era] < 2) return;
    const rate = (correctByEra[era] || 0) / totalByEra[era];
    const label = ERA_LABELS[era] || era;
    if (rate >= 0.75) strengths.push(`Отличное знание эпохи «${label}»`);
    else if (rate <= 0.35) weaknesses.push(`Слабо ориентируетесь в эпохе «${label}»`);
  });
  Object.keys(totalByCat).forEach(cat => {
    if (totalByCat[cat] < 2) return;
    const rate = (correctByCat[cat] || 0) / totalByCat[cat];
    const label = CATEGORY_LABELS[cat] || cat;
    if (rate >= 0.8) strengths.push(`Сильны в теме «${label}»`);
    else if (rate <= 0.3) weaknesses.push(`Трудно с темой «${label}»`);
  });

  if (strengths.length === 0 && weaknesses.length === 0) {
    block.classList.add('hidden');
    return;
  }
  block.classList.remove('hidden');
  strengths.forEach(s => {
    const div = document.createElement('div');
    div.className = 'analysis-item strong';
    div.textContent = '💪 ' + s;
    content.appendChild(div);
  });
  weaknesses.forEach(w => {
    const div = document.createElement('div');
    div.className = 'analysis-item weak';
    div.textContent = '📉 ' + w;
    content.appendChild(div);
  });
}

function renderResultTimeline() {
  const tl = $('#result-timeline');
  tl.innerHTML = '';
  [...placed].sort((a, b) => a.year - b.year).forEach(ev => {
    const marker = document.createElement('div');
    marker.className = 'marker' + (ev.isZero ? ' zero' : '');
    marker.innerHTML = `
      <div class="marker-dot"></div>
      <div class="marker-year">${formatYear(ev.year)}</div>
      <div class="marker-title">${ev.title}</div>
    `;
    tl.appendChild(marker);
  });
}

document.querySelectorAll('.diff-btn').forEach(btn => {
  btn.addEventListener('click', () => startGame(parseInt(btn.dataset.count)));
});
$('#btn-rules').addEventListener('click', () => $('#rules-modal').classList.remove('hidden'));
$('#btn-close-rules').addEventListener('click', () => $('#rules-modal').classList.add('hidden'));
$('#btn-skip').addEventListener('click', () => {
  if (!tutorialMode && currentIndex < gameEvents.length) onWrong(gameEvents[currentIndex]);
});
$('#btn-home').addEventListener('click', () => {
  hideTutorial();
  showScreen('start');
});
$('#btn-rematch').addEventListener('click', () => startGame(lastDifficulty));

loadEvents().then(() => console.log('Loaded', allEvents.length, 'events'))
  .catch(err => { console.error(err); alert('Ошибка загрузки событий'); });
