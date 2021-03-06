import { ControllerStreamOutFile } from '../../../backend/core/adapters/controller'
import { ControllerFileGeneric } from '../../../backend/core/adapters/controller/helpers'
import {
  CreateReadStreamUseCase,
  LoadImageStreamUseCase,
} from '../../../backend/core/domain/usecases/'

export const makeStreamOutImageComposer = (): ControllerFileGeneric => {
  const StreamUseCase = new CreateReadStreamUseCase()
  const UseCase = new LoadImageStreamUseCase(StreamUseCase)
  const Controller = new ControllerStreamOutFile(UseCase)
  return Controller
}
