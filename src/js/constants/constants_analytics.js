const totalWeeklyRes = document.querySelector('.main-text__weekly');
const searchingWord = document.querySelector('.content-analytics__span');
const searchTitles = document.querySelector('.main-text__titles');

const domMounth = document.querySelector('.schedule__subtitle_month');

const domDay_1 = document.querySelector('.schedule__day_1');
const domDay_2 = document.querySelector('.schedule__day_2');
const domDay_3 = document.querySelector('.schedule__day_3');
const domDay_4 = document.querySelector('.schedule__day_4');
const domDay_5 = document.querySelector('.schedule__day_5');
const domDay_6 = document.querySelector('.schedule__day_6');
const domDay_7 = document.querySelector('.schedule__day_7');

const numOfTitles_1 = document.querySelector('.schedule__percents_day1');
const numOfTitles_2 = document.querySelector('.schedule__percents_day2');
const numOfTitles_3 = document.querySelector('.schedule__percents_day3');
const numOfTitles_4 = document.querySelector('.schedule__percents_day4');
const numOfTitles_5 = document.querySelector('.schedule__percents_day5');
const numOfTitles_6 = document.querySelector('.schedule__percents_day6');
const numOfTitles_7 = document.querySelector('.schedule__percents_day7');

let localstor = JSON.parse(localStorage.getItem('news'));
let searchWord = JSON.parse(localStorage.getItem('searchWord')).toLowerCase();

export {
    totalWeeklyRes,
    searchingWord,
    searchTitles,
    domMounth,
    domDay_1,
    domDay_2,
    domDay_3,
    domDay_4,
    domDay_5,
    domDay_6,
    domDay_7,
    numOfTitles_1,
    numOfTitles_2,
    numOfTitles_3,
    numOfTitles_4,
    numOfTitles_5,
    numOfTitles_6,
    numOfTitles_7,
    localstor,
    searchWord
};