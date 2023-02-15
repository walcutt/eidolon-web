<template>
    <div class="about">
        <ul>
            <li v-for="playbook in Playbooks">
                {{ playbook.Title }}
                <ul>
                    <li>
                        <JSXEmbed :vNode="playbook.PowerPrompt" />
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">

import { Playbooks } from '@/predefined/Playbooks';
import JSXEmbed from '@/components/JsxEmbed.vue';

</script>
  
<style>
  @media (min-width: 1024px) {
    .about {
      min-height: 100vh;
      display: flex;
      align-items: center;
    }
  }
</style>