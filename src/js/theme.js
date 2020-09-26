const DemoComponent = () => import("../components/demo-component.vue");
const AdvancedComponent = () => import("../components/advanced-component.vue");

$dispatcher.$emit('hub:register-components', {
    'comms-test-demo-component': DemoComponent,
    'comms-test-advanced-component': AdvancedComponent
});