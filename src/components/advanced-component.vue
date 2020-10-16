<template>
    <div class="comms-test-demo-component">
        This is advanced component that uses external node_modules?
        {{ isBoolean(true) }}
        {{ isBoolean(false) }}
        {{ isBoolean(null) }}
        {{ isBoolean() }}
        {{ isBoolean(1) }}
        {{ isBoolean(0) }}
    </div>
</template>
<script>
import {isBoolean} from "is-boolean";

export default {
    mixins: [pckgComponent],
    methods: {
        isBoolean: function (val) {
            return isBoolean(val);
        }
    }
}
</script>