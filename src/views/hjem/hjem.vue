<script setup>
import '../../style.css'
import '../../assets/fonts/fonts.css';

import NesteArrangement from '../../components/home-components/NesteArrangement.vue';
import Arrangementer from '../../components/home-components/Arrangementer.vue';

</script>

<template>
    <NesteArrangement />
    <Arrangementer />
</template>

<script>
export default {
  name: 'HjemView',
}
</script>