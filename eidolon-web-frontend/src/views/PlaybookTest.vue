<template>
    <div class="about">
        <ul>
            <li v-for="playbook in Playbooks">
                {{ playbook.Title }}
                <ul>
                    <li>
                        {{ playbook.PowerPrompt }}
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">

import { Playbooks } from '@/predefined/Playbooks';

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