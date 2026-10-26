import * as migration_20261026_092104_initial from './20261026_092104_initial';

export const migrations = [
  {
    up: migration_20261026_092104_initial.up,
    down: migration_20261026_092104_initial.down,
    name: '20261026_092104_initial'
  },
];
