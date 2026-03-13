import { computed, ref } from "vue";
import { debounce } from 'lodash';

const smallScreen = ref(false);
const smScreenSide = ref();

const xs = ref();
const sm = ref();
const md = ref();
const lg = ref();
const xl = ref();

const resizeEvent = debounce(() => {
    smallScreen.value = window.matchMedia('(max-width: 769px').matches
    smScreenSide.value = window.matchMedia('(max-width: 1024px').matches

    xs.value = window.matchMedia('(max-width: 639px)').matches
    sm.value = window.matchMedia('(min-width: 640px) and (max-width: 767px)').matches
    md.value = window.matchMedia('(min-width: 768px) and (max-width: 1023px)').matches
    lg.value = window.matchMedia('(min-width: 1024px) and (max-width: 1279px)').matches
    xl.value = window.matchMedia('(min-width: 1280px) and (max-width: 1535px)').matches
}, 500);

window.onresize = resizeEvent

resizeEvent();

const smScreen = computed(() => smScreenSide.value ? 'true' : 'false')
const filterDisplay = computed(() => smallScreen.value ? 'menu' : 'row')
const currentPageReportTemplate = computed(() => smallScreen.value ? 'From {first} to {last} of {totalRecords} ' : 'Displaying {first} to {last} of {totalRecords} records')

export function useResponsive() {
    return { smScreen, filterDisplay, currentPageReportTemplate, xs, sm, md, lg, xl }
}