import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		answer: 23
	}
});

export default app;
