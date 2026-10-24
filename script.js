// Данные D&D 5e на русском (расширенная версия)
const RACES = [
  { id: "human", name: "Человек", bonuses: { str:1, dex:1, con:1, int:1, wis:1, cha:1 }, speed: 30, size: "Средний", traits: "Универсальность: +1 ко всем характеристикам. Дополнительный навык и язык." },
  { id: "elf", name: "Эльф", bonuses: { dex:2 }, speed: 30, size: "Средний", traits: "Тёмное зрение 60 фт. Острое чутьё. Наследие фей. Транс." },
  { id: "dwarf", name: "Дварф", bonuses: { con:2 }, speed: 25, size: "Средний", traits: "Тёмное зрение 60 фт. Дварфская стойкость. Знание камня." },
  { id: "halfling", name: "Полурослик", bonuses: { dex:2 }, speed: 25, size: "Маленький", traits: "Везучий. Храбрый. Ловкость полурослика." },
  { id: "gnome", name: "Гном", bonuses: { int:2 }, speed: 25, size: "Маленький", traits: "Тёмное зрение 60 фт. Гномья хитрость." },
  { id: "halfelf", name: "Полуэльф", bonuses: { cha:2 }, speed: 30, size: "Средний", traits: "+1 к двум характеристикам на выбор. Тёмное зрение. Наследие фей." },
  { id: "halforc", name: "Полуорк", bonuses: { str:2, con:1 }, speed: 30, size: "Средний", traits: "Тёмное зрение. Безжалостная атака. Стойкость." },
  { id: "tiefling", name: "Тифлинг", bonuses: { cha:2, int:1 }, speed: 30, size: "Средний", traits: "Тёмное зрение. Сопротивление огню. Инфернальное наследие." },
  { id: "dragonborn", name: "Драконорождённый", bonuses: { str:2, cha:1 }, speed: 30, size: "Средний", traits: "Драконье наследие. Оружие дыхания." }
];

const CLASSES = [
  { id: "barbarian", name: "Варвар", hitDie: 12, primary: "Сила", saves: ["str", "con"], skills: 2, skillList: ["athletics","animal_handling","intimidation","nature","perception","survival"], features: "Ярость, Защита без доспехов", subclasses: ["Берсерк", "Тотемный воин"] },
  { id: "bard", name: "Бард", hitDie: 8, primary: "Харизма", saves: ["dex", "cha"], skills: 3, skillList: ["any"], features: "Вдохновение барда, Заклинания", subclasses: ["Коллегия знаний", "Коллегия доблести"], caster: true, spellAbility: "cha" },
  { id: "cleric", name: "Жрец", hitDie: 8, primary: "Мудрость", saves: ["wis", "cha"], skills: 2, skillList: ["history","insight","medicine","persuasion","religion"], features: "Божественный домен, Заклинания", subclasses: ["Домен жизни", "Домен войны"], caster: true, spellAbility: "wis" },
  { id: "druid", name: "Друид", hitDie: 8, primary: "Мудрость", saves: ["int", "wis"], skills: 2, skillList: ["arcana","animal_handling","insight","medicine","nature","perception","religion","survival"], features: "Друидический язык, Заклинания", subclasses: ["Круг земли", "Круг луны"], caster: true, spellAbility: "wis" },
  { id: "fighter", name: "Воин", hitDie: 10, primary: "Сила или Ловкость", saves: ["str", "con"], skills: 2, skillList: ["acrobatics","animal_handling","athletics","history","insight","intimidation","perception","survival"], features: "Боевой стиль, Второе дыхание", subclasses: ["Чемпион", "Воитель"] },
  { id: "monk", name: "Монах", hitDie: 8, primary: "Ловкость и Мудрость", saves: ["str", "dex"], skills: 2, skillList: ["acrobatics","athletics","history","insight","religion","stealth"], features: "Боевые искусства, Ци", subclasses: ["Путь открытой ладони", "Путь тени"] },
  { id: "paladin", name: "Паладин", hitDie: 10, primary: "Сила и Харизма", saves: ["wis", "cha"], skills: 2, skillList: ["athletics","insight","intimidation","medicine","persuasion","religion"], features: "Божественное чувство, Наложение рук", subclasses: ["Клятва преданности", "Клятва мести"], caster: true, spellAbility: "cha" },
  { id: "ranger", name: "Следопыт", hitDie: 10, primary: "Ловкость и Мудрость", saves: ["str", "dex"], skills: 3, skillList: ["animal_handling","athletics","insight","investigation","nature","perception","stealth","survival"], features: "Излюбленный враг, Исследователь природы", subclasses: ["Охотник", "Повелитель зверей"], caster: true, spellAbility: "wis" },
  { id: "rogue", name: "Плут", hitDie: 8, primary: "Ловкость", saves: ["dex", "int"], skills: 4, skillList: ["acrobatics","athletics","deception","insight","intimidation","investigation","perception","performance","persuasion","sleight_of_hand","stealth"], features: "Скрытая атака, Воровской жаргон", subclasses: ["Вор", "Убийца"] },
  { id: "sorcerer", name: "Чародей", hitDie: 6, primary: "Харизма", saves: ["con", "cha"], skills: 2, skillList: ["arcana","deception","insight","intimidation","persuasion","religion"], features: "Происхождение чародея, Заклинания", subclasses: ["Драконья кровь", "Дикая магия"], caster: true, spellAbility: "cha" },
  { id: "warlock", name: "Колдун", hitDie: 8, primary: "Харизма", saves: ["wis", "cha"], skills: 2, skillList: ["arcana","deception","history","intimidation","investigation","nature","religion"], features: "Покровитель, Заклинания", subclasses: ["Архифея", "Бестия"], caster: true, spellAbility: "cha" },
  { id: "wizard", name: "Волшебник", hitDie: 6, primary: "Интеллект", saves: ["int", "wis"], skills: 2, skillList: ["arcana","history","insight","investigation","medicine","religion"], features: "Восстановление заклинаний, Заклинания", subclasses: ["Школа воплощения", "Школа иллюзий"], caster: true, spellAbility: "int" }
];

const BACKGROUNDS = [
  { id: "acolyte", name: "Послушник", skills: ["insight", "religion"], feature: "Убежище веры" },
  { id: "criminal", name: "Преступник", skills: ["deception", "stealth"], feature: "Криминальные связи" },
  { id: "folk_hero", name: "Народный герой", skills: ["animal_handling", "survival"], feature: "Деревенское гостеприимство" },
  { id: "noble", name: "Дворянин", skills: ["history", "persuasion"], feature: "Положение в обществе" },
  { id: "outlander", name: "Чужеземец", skills: ["athletics", "survival"], feature: "Странник" },
  { id: "sage", name: "Мудрец", skills: ["arcana", "history"], feature: "Исследователь" },
  { id: "soldier", name: "Солдат", skills: ["athletics", "intimidation"], feature: "Военный чин" },
  { id: "charlatan", name: "Шарлатан", skills: ["deception", "sleight_of_hand"], feature: "Фальшивая личность" }
];

const SKILLS = {
  acrobatics: { name: "Акробатика", ability: "dex" },
  animal_handling: { name: "Уход за животными", ability: "wis" },
  arcana: { name: "Магия", ability: "int" },
  athletics: { name: "Атлетика", ability: "str" },
  deception: { name: "Обман", ability: "cha" },
  history: { name: "История", ability: "int" },
  insight: { name: "Проницательность", ability: "wis" },
  intimidation: { name: "Запугивание", ability: "cha" },
  investigation: { name: "Анализ", ability: "int" },
  medicine: { name: "Медицина", ability: "wis" },
  nature: { name: "Природа", ability: "int" },
  perception: { name: "Восприятие", ability: "wis" },
  performance: { name: "Выступление", ability: "cha" },
  persuasion: { name: "Убеждение", ability: "cha" },
  religion: { name: "Религия", ability: "int" },
  sleight_of_hand: { name: "Ловкость рук", ability: "dex" },
  stealth: { name: "Скрытность", ability: "dex" },
  survival: { name: "Выживание", ability: "wis" }
};

const EQUIPMENT_PACKS = {
  barbarian: "Топор, два ручных топора, набор исследователя, 4 метательных копья",
  bard: "Рапира, набор дипломата, лютня, кожаный доспех",
  cleric: "Булава, чешуйчатый доспех, щит, святой символ, набор священника",
  druid: "Щит, серп, кожаный доспех, набор исследователя",
  fighter: "Кольчуга, боевой молот, щит, набор исследователя",
  monk: "Короткий меч, набор исследователя, 10 дротиков",
  paladin: "Кольчуга, боевой молот, щит, святой символ, набор священника",
  ranger: "Кольчуга, два коротких меча, длинный лук, набор исследователя",
  rogue: "Рапира, короткий лук, кожаный доспех, набор вора",
  sorcerer: "Лёгкий арбалет, набор исследователя, два кинжала",
  warlock: "Лёгкий арбалет, кожаный доспех, набор учёного",
  wizard: "Посох, набор учёного, книга заклинаний"
};

const BASIC_SPELLS = {
  bard: ["Лечащее слово", "Очарование личности", "Насмешка"],
  cleric: ["Лечение ран", "Священное пламя", "Благословение"],
  druid: ["Добро", "Шипованная поросль", "Лечение ран"],
  paladin: ["Божественное благоволение", "Обнаружение зла и добра"],
  ranger: ["Охотничья метка", "Лечение ран"],
  sorcerer: ["Огненные ладони", "Магическая стрела", "Свет"],
  warlock: ["Эльдричский взрыв", "Очарование личности"],
  wizard: ["Магическая стрела", "Магическая рука", "Свет"]
};

const ABILITY_NAMES = {
  str: "Сила", dex: "Ловкость", con: "Телосложение",
  int: "Интеллект", wis: "Мудрость", cha: "Харизма"
};

const POINT_COSTS = { 8:0, 9:1, 10:2, 11:3, 12:4, 13:5, 14:7, 15:9 };

const state = {
  step: 1,
  race: null,
  class: null,
  subclass: null,
  abilities: { str:8, dex:8, con:8, int:8, wis:8, cha:8 },
  background: null,
  skills: new Set(),
  equipment: "pack",
  spells: new Set(),
  charName: "",
  playerName: "",
  level: 1,
  alignment: "",
  xp: 0
};

document.addEventListener("DOMContentLoaded", () => {
  renderRaces();
  renderClasses();
  renderAbilities();
  renderBackgrounds();
  renderSkills();
  updateNav();

  document.getElementById("nextBtn").onclick = nextStep;
  document.getElementById("prevBtn").onclick = prevStep;
  document.getElementById("exportBtn").onclick = exportChar;
  document.getElementById("printBtn").onclick = () => window.print();

  document.getElementById("charName").oninput = e => state.charName = e.target.value;
  document.getElementById("playerName").oninput = e => state.playerName = e.target.value;
  document.getElementById("level").oninput = e => { state.level = +e.target.value || 1; updateSummary(); };
  document.getElementById("alignment").onchange = e => state.alignment = e.target.value;
  document.getElementById("xp").oninput = e => state.xp = +e.target.value || 0;
  document.getElementById("background").onchange = e => {
    state.background = e.target.value;
    updateSkillSelection();
  };
});

function getProficiencyBonus() {
  return Math.ceil(state.level / 4) + 1;
}

function renderRaces() {
  const el = document.getElementById("raceList");
  el.innerHTML = RACES.map(r => `
    <div class="card" data-id="${r.id}">
      <h3>${r.name}</h3>
      <p>${Object.entries(r.bonuses).map(([k,v]) => `${ABILITY_NAMES[k]} +${v}`).join(", ")}</p>
    </div>
  `).join("");
  el.querySelectorAll(".card").forEach(c => c.onclick = () => selectRace(c.dataset.id));
}

function selectRace(id) {
  state.race = RACES.find(r => r.id === id);
  document.querySelectorAll("#raceList .card").forEach(c => c.classList.toggle("selected", c.dataset.id === id));
  const d = document.getElementById("raceDetails");
  d.innerHTML = `<strong>${state.race.name}</strong><br>Скорость: ${state.race.speed} фт · Размер: ${state.race.size}<br><br>${state.race.traits}`;
  renderAbilities();
}

function renderClasses() {
  const el = document.getElementById("classList");
  el.innerHTML = CLASSES.map(c => `
    <div class="card" data-id="${c.id}">
      <h3>${c.name}</h3>
      <p>КЗ: d${c.hitDie} · ${c.primary}</p>
    </div>
  `).join("");
  el.querySelectorAll(".card").forEach(c => c.onclick = () => selectClass(c.dataset.id));
}

function selectClass(id) {
  state.class = CLASSES.find(c => c.id === id);
  state.subclass = null;
  document.querySelectorAll("#classList .card").forEach(c => c.classList.toggle("selected", c.dataset.id === id));
  const d = document.getElementById("classDetails");
  d.innerHTML = `<strong>${state.class.name}</strong><br>Кость хитов: d${state.class.hitDie}<br>Основная характеристика: ${state.class.primary}<br>Спасброски: ${state.class.saves.map(s => ABILITY_NAMES[s]).join(", ")}<br>Навыков на выбор: ${state.class.skills}<br><br>${state.class.features}`;
  
  const subEl = document.getElementById("subclassSection");
  if (state.class.subclasses) {
    subEl.innerHTML = `<h3>Подкласс (уровень 1–3)</h3>` + state.class.subclasses.map(s => 
      `<label><input type="radio" name="subclass" value="${s}" onchange="state.subclass='${s}'"> ${s}</label>`
    ).join("<br>");
  } else subEl.innerHTML = "";
  updateSkillSelection();
  renderEquipment();
  renderSpells();
}

function getFinalAbility(key) {
  let base = state.abilities[key];
  if (state.race && state.race.bonuses[key]) base += state.race.bonuses[key];
  return Math.min(20, base);
}

function getModifier(score) {
  return Math.floor((score - 10) / 2);
}

function getPointsSpent() {
  return Object.values(state.abilities).reduce((sum, s) => sum + POINT_COSTS[s], 0);
}

function renderAbilities() {
  const el = document.getElementById("abilities");
  const spent = getPointsSpent();
  document.getElementById("pointsLeft").textContent = 27 - spent;

  el.innerHTML = Object.keys(ABILITY_NAMES).map(key => {
    const base = state.abilities[key];
    const final = getFinalAbility(key);
    const mod = getModifier(final);
    const canUp = base < 15 && (27 - spent) >= (POINT_COSTS[base+1] - POINT_COSTS[base]);
    const canDown = base > 8;
    return `
      <div class="ability">
        <h3>${ABILITY_NAMES[key]}</h3>
        <div class="score">${final}</div>
        <div class="mod">${mod >= 0 ? "+" : ""}${mod}</div>
        <div style="font-size:0.8rem;color:#b8a88a">база ${base}</div>
        <button onclick="changeAbility('${key}',1)" ${!canUp ? "disabled" : ""}>+</button>
        <button onclick="changeAbility('${key}',-1)" ${!canDown ? "disabled" : ""}>−</button>
      </div>
    `;
  }).join("");
}

function changeAbility(key, delta) {
  const newScore = state.abilities[key] + delta;
  if (newScore < 8 || newScore > 15) return;
  const newSpent = getPointsSpent() - POINT_COSTS[state.abilities[key]] + POINT_COSTS[newScore];
  if (newSpent > 27) return;
  state.abilities[key] = newScore;
  renderAbilities();
  updateSummary();
}

function renderBackgrounds() {
  const sel = document.getElementById("background");
  sel.innerHTML = `<option value="">— выбрать —</option>` + BACKGROUNDS.map(b => `<option value="${b.id}">${b.name}</option>`).join("");
}

function renderSkills() {
  const el = document.getElementById("skills");
  el.innerHTML = Object.entries(SKILLS).map(([id, s]) => `
    <label class="skill">
      <input type="checkbox" value="${id}" onchange="toggleSkill('${id}', this.checked)">
      ${s.name} (${ABILITY_NAMES[s.ability]})
    </label>
  `).join("");
}

function updateSkillSelection() {
  const hint = document.getElementById("skillHint");
  if (!state.class) {
    hint.textContent = "Сначала выберите класс.";
    return;
  }
  const bg = BACKGROUNDS.find(b => b.id === state.background);
  const bgSkills = bg ? bg.skills : [];
  const max = state.class.skills;
  hint.textContent = `Класс даёт ${max} навык(ов). Предыстория добавляет: ${bgSkills.map(s => SKILLS[s]?.name || s).join(", ") || "нет"}.`;
}

function toggleSkill(id, checked) {
  if (checked) state.skills.add(id);
  else state.skills.delete(id);
  updateSummary();
}

function renderEquipment() {
  const el = document.getElementById("equipmentOptions");
  if (!state.class) {
    el.innerHTML = "<p>Сначала выберите класс.</p>";
    return;
  }
  const pack = EQUIPMENT_PACKS[state.class.id] || "Стандартный набор";
  el.innerHTML = `
    <label><input type="radio" name="eq" value="pack" checked onchange="state.equipment='pack'"> Стартовый набор: ${pack}</label><br>
    <label><input type="radio" name="eq" value="gold" onchange="state.equipment='gold'"> Вместо набора — золото (на усмотрение Мастера)</label>
  `;
}

function renderSpells() {
  const el = document.getElementById("spellSection");
  if (!state.class || !state.class.caster) {
    el.innerHTML = "<p>Этот класс не использует заклинания (или использует их позже).</p>";
    return;
  }
  const list = BASIC_SPELLS[state.class.id] || [];
  el.innerHTML = `<p>Выберите заговоры / заклинания 1 круга (упрощённо):</p>` +
    list.map(sp => `<label><input type="checkbox" onchange="toggleSpell('${sp}', this.checked)"> ${sp}</label><br>`).join("");
}

function toggleSpell(name, checked) {
  if (checked) state.spells.add(name);
  else state.spells.delete(name);
}

function nextStep() {
  if (state.step < 8) {
    state.step++;
    showStep();
  }
}
function prevStep() {
  if (state.step > 1) {
    state.step--;
    showStep();
  }
}
function showStep() {
  document.querySelectorAll(".panel").forEach(p => p.classList.remove("active"));
  document.getElementById("step" + state.step).classList.add("active");
  document.querySelectorAll(".step").forEach(s => {
    const n = +s.dataset.step;
    s.classList.toggle("active", n === state.step);
    s.classList.toggle("done", n < state.step);
  });
  updateNav();
  if (state.step === 6) renderEquipment();
  if (state.step === 7) renderSpells();
  if (state.step === 8) updateSummary();
}
function updateNav() {
  document.getElementById("prevBtn").disabled = state.step === 1;
  document.getElementById("nextBtn").textContent = state.step === 8 ? "Готово" : "Далее →";
  document.getElementById("nextBtn").disabled = state.step === 8;
}

function updateSummary() {
  if (state.step !== 8) return;
  const el = document.getElementById("summary");
  const race = state.race ? state.race.name : "—";
  const cls = state.class ? state.class.name : "—";
  const sub = state.subclass || "—";
  const bg = BACKGROUNDS.find(b => b.id === state.background);
  const bgName = bg ? bg.name : "—";
  const prof = getProficiencyBonus();
  const dexMod = getModifier(getFinalAbility("dex"));
  const conMod = getModifier(getFinalAbility("con"));
  const ac = 10 + dexMod;
  const initiative = dexMod;
  const hp = state.class ? state.class.hitDie + conMod : "—";

  const abilities = Object.keys(ABILITY_NAMES).map(k => {
    const final = getFinalAbility(k);
    const mod = getModifier(final);
    return `${ABILITY_NAMES[k]}: ${final} (${mod >= 0 ? "+" : ""}${mod})`;
  }).join("\n");

  const saves = state.class ? state.class.saves.map(s => {
    const mod = getModifier(getFinalAbility(s));
    const total = mod + prof;
    return `${ABILITY_NAMES[s]}: ${total >= 0 ? "+" : ""}${total}`;
  }).join(", ") : "—";

  const skillLines = Object.entries(SKILLS).map(([id, s]) => {
    const mod = getModifier(getFinalAbility(s.ability));
    const total = mod + (state.skills.has(id) ? prof : 0);
    const mark = state.skills.has(id) ? "●" : "○";
    return `${mark} ${s.name}: ${total >= 0 ? "+" : ""}${total}`;
  }).join("\n");

  const eq = state.equipment === "pack" && state.class ? EQUIPMENT_PACKS[state.class.id] : "Золото (на усмотрение)";
  const spellList = [...state.spells].join(", ") || "нет";

  el.textContent = `=== ЛИСТ ПЕРСОНАЖА ===
Имя: ${state.charName || "—"}
Игрок: ${state.playerName || "—"}
Уровень: ${state.level} · Опыт: ${state.xp} · Бонус мастерства: +${prof}
Мировоззрение: ${state.alignment || "—"}

Раса: ${race}
Класс: ${cls}${sub !== "—" ? " (" + sub + ")" : ""}
Предыстория: ${bgName}

Характеристики:
${abilities}

КЗ: ${ac} (базовый 10 + Ловк.)
Инициатива: ${initiative >= 0 ? "+" : ""}${initiative}
Хиты (1 ур.): ${hp}
Спасброски: ${saves}

Навыки:
${skillLines}

Снаряжение: ${eq}
Заклинания: ${spellList}

(Создано конструктором D&D 5e)`;
}

function exportChar() {
  updateSummary();
  const text = document.getElementById("summary").textContent;
  navigator.clipboard.writeText(text).then(() => alert("Скопировано в буфер обмена!")).catch(() => alert("Не удалось скопировать. Выделите текст вручную."));
}

window.changeAbility = changeAbility;
window.toggleSkill = toggleSkill;
window.toggleSpell = toggleSpell;
window.state = state;
