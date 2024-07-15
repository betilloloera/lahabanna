var url = 'http://localhost/LahabannaApi/'

export const HttpClientService = {
  async obtenerEmpleados() {
    return new Promise((resolve, reject) => {
      fetch(
        url+'/Empleados',
        {
          method: 'GET',          
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )
        .then((response) => {
          if (response.status === 200) {
            response.json().then(data => {
              resolve(data);
            });
          } else {
            reject('No se pudieron obtener los datos E');
          }
        })
        .catch((e) => reject(e));
    })
  },
  async ObtenerInformacionPagina() {
    return new Promise((resolve, reject) => {
      fetch(
        url+'/Informacion',
        {
          method: 'GET',          
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )
        .then((response) => {
          if (response.status === 200) {
            response.json().then(data => {
              resolve(data);
            });
          } else {
            reject('No se pudieron obtener los datos E');
          }
        })
        .catch((e) => reject(e));
    })
  },
};
export default { HttpClientService };