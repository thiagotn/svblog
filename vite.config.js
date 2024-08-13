import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	plugins: [sveltekit()],
	test: {
    globals: true,
		include: ['src/**/*.{test,spec}.{js,ts}', 'src/test/**/*.{js,ts}'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json-summary', 'json', 'html'],
      reportOnFailure: true,
    },
	},
});
