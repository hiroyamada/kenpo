import { Schema, arrayOf } from 'normalizr';

export const changeSchema = new Schema('change');
export const changesSchema = arrayOf(changeSchema);
