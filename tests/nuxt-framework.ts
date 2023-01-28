import { runInRepo } from '../utils'
import { RunOptions } from '../types'

export async function test(options: RunOptions) {
	await runInRepo({
		...options,
		repo: 'nuxt/nuxt',
		build: 'build',
		test: ['test:fixtures', 'test:types', 'test:unit'],
	})
}
