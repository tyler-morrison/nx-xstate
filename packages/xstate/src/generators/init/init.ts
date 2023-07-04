import {
  addProjectConfiguration,
  convertNxGenerator,
  formatFiles,
  generateFiles,
  GeneratorCallback,
  runTasksInSerial,
  Tree,
} from '@nx/devkit';
import * as path from 'path';
import { InitSchema } from './schema';

export async function xstateInitGenerator(tree: Tree, options: InitSchema) {
  const tasks: GeneratorCallback[] = [];

  return runTasksInSerial(...tasks);
}

export default xstateInitGenerator;
export const xstateInitSchematic = convertNxGenerator(xstateInitGenerator)