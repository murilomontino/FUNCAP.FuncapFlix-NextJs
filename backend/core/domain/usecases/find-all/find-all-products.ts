import { db } from '@mapa-cultural/database'

import { left, PromiseEither } from '@/shared/either'
import { IGetterBooks } from '@/types/getters'

import { UseCase } from '../ports/use-case'

export class FindAllProducts implements UseCase<unknown, IGetterBooks[]> {
	async execute(): PromiseEither<IGetterBooks[], Error> {
		const modelsProducts = await db.ModelInfoProducts.findAll({
			where: {
				active: true,
			},
			attributes: ['id', 'title', 'about', 'thumbnail', 'category'],
		})

		return left(modelsProducts as any)
	}
}
