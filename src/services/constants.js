var constObj = {}

function define(name, value) {
  Object.defineProperty(constObj, name, {
    value: value,
    enumerable: true
  });
}

/*
  REPORTS TYPE
*/
define("DRIVERS_DOCUMENT_EXPIRATION", 1);
define("STAFF_DOCUMENT_EXPIRATION", 2);

/*
  GRAPHQL
*/

define("GETALL_EMP", `query sucursales {
  empleados(where: {activo: {_eq: 1}}) {
    activo
    empleadoedad
    empleadoid
    empleadoimg
    empleadonom
    empleadotipoid
  }
}
`
);

define("GET_CFG", `query configuracion {
  hbconfiguracion {
    rutaservidor
    descripcion
    configuracionid
  }
}
`);

define("GET_SUC", `query sucursales {
  sucursales(where: {activo: {_eq: 1}}) {
    sucursaltel
    sucursalnom
    sucursalid
    activo
    sucursaldir
  }
}
`);

export default
{
  command: constObj
}