<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <br>
                <button class="btn btn-primary" @click="selectedCompnent = 'appBlue'">Load Blue Template</button>
                <button class="btn btn-success" @click="selectedCompnent = 'appGreen'">Load Green Template</button>
                <button class="btn btn-danger" @click="selectedCompnent = 'appRed'">Load Red Template</button>
                <hr>

                <p>Selected komponent: {{ selectedCompnent }}</p>
                <component :is="selectedCompnent">
                    <p>this is a conntent</p>
                </component>
                <!-- <app-blue>Blue Template</app-blue>
                <app-green>Green Template</app-green>
                <app-red>Red Template</app-red> -->
            </div>
        </div>
    </div>
</template>

<script>
    import Blue from './components/Blue.vue';
    import Green from './components/Green.vue';
    import Red from './components/Red.vue';

    export default {
        data: function() {
            return {
                selectedCompnent: "appBlue"
            }
        },
        components: {
            appBlue: Blue,
            appGreen: Green,
            appRed: Red
        }
    }
</script>

<style>
</style>
