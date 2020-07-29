<template>
    <div class="about">
        <h1>Your random entity from store is {{storeResult}}</h1>
        <el-button type="primary" v-on:click="randomEntity">GoStore</el-button>
    </div>
</template>

<script>
import {mapActions, mapState} from 'vuex'

export default {
    computed: mapState({
        storeResult: state => state.entity.entries[0].API
    }),
    methods: {
        ...mapActions([
            'randomEntity'
        ])
    }
}
</script>
