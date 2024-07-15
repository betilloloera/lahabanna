function define(name, value) {
  Object.defineProperty(exports, name, {
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

define("GETALL_EMP", `query GETALLEMP {
  empleados {
    empleadoedad
    empleadoid
    empleadoimg
    empleadotipoid
    empleadonom
    activo
  }
}`
);

define("GQL_QUERY_DRIVERS_DOCUMENT_EXPIRATION", `query drivers_document_expiration {
  rows: drivers(where: {person: {status: {code_name: {_eq: "active"}}}}, order_by: {person: {last_name: asc, first_name: asc}}) {
    driver_trip_type {
      name
    }
    person {
      folio
      full_name
      documents(where: {expiration_date: {_is_null: false}}, distinct_on: [document_id], order_by: {document_id: asc, created_at: desc, document: {name: asc}}) {
        issued_date
        expiration_date
        document {
          name
          required
        }
      }
    }
  }
}`);

define("GQL_QUERY_STAFF_DOCUMENT_EXPIRATION", `query staff_document_expiration {
  rows: people(where: {people_type: {code_name: {_neq: "DRIVER"}}, _and: {status: {code_name: {_eq: "active"}}}}) {
    folio
    full_name
    people_type {
      name
    }
    documents(where: {expiration_date: {_is_null: false}}, distinct_on: [document_id], order_by: {document_id: asc, created_at: desc, document: {name: asc}}) {
      issued_date
      expiration_date
      document {
        name
        required
      }
    }
  }
}
`);
