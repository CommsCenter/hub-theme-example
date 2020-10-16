/**
 * Define components for all assets, and lazy load them () => import("...").
 */
const vendor = 'comms';
const components = {
    layout: {some: './layouts/some-layout.vue'},
    page: {some: './pages/some-page.vue'},
    component: {some: './components/some-component.vue'},
    header: {some: './headers/some-header.vue'},
    list: {some: './lists/some-list.vue'},
    item: {some: './items/some-item.vue'},
};

Object.keys(components).forEach((type) => {
    Object.keys(components[type]).forEach((component) => {
        Vue.component('hub-' + type + '-' + vendor + '-' + component);
    })
})