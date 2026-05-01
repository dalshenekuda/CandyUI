import { createApp } from 'vue';
import { Button as ActionButton } from './primitives/Button';
import './styles/style.css';

const app = createApp({
  components: {
    ActionButton,
  },
  template: `
    <div style="padding: 20px;">
      <ActionButton 
        colorStyle="dark" 
        :transparent="false"
        @click="handleClick"
      >
        Click Me
      </ActionButton>
    </div>
  `,
  methods: {
    handleClick() {
      alert('Button clicked!');
    },
  },
});

app.mount('#app');
