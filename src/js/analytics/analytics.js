import '../../pages/analytics.css';
import Statistics from '../components/Statistics';
import {
    formateDay
} from '../utils/formateDay';
import {
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
} from '../constants/constants_analytics';

const analytics = new Statistics(localstor, totalWeeklyRes, searchWord, searchingWord, searchTitles, domDay_1, domDay_2, domDay_3, domDay_4, domDay_5, domDay_6, domDay_7, numOfTitles_1, numOfTitles_2, numOfTitles_3, numOfTitles_4, numOfTitles_5, numOfTitles_6, numOfTitles_7, domMounth, formateDay);

analytics.getInfo();