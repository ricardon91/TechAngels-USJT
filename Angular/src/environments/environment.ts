// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  MAPA_TILE_LAYER: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  BASE_NOMINATIM_URL: 'nominatim.openstreetmap.org',
  DEFAULT_VIEW_BOX: 'viewbox=-25.0000%2C70.0000%2C50.0000%2C40.0000',
  API_KEY: '41bd5d8a8433449c72ac1b3abf02f0ca',
  VOLUNTARIO_URL_BASE: 'http://localhost:3000/api/voluntarios',
  VOLUNTARIO_MAPA_URL_BASE: 'http://localhost:3000/api/voluntarios-mapa',
  UBS_MAPA_URL_BASE: 'http://localhost:4000/api/ubs',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
