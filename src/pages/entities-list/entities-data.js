import React from "react";

export const entities = [
  {
    name: "Entidad 1",
    methods: [
      {
        name: "get",
        value: true,
      },
      {
        name: "post",
        value: false,
      },
      {
        name: "put",
        value: true,
      },
      {
        name: "delete",
        value: false,
      },
    ],
    attributes: [
      {
        name: "id",
        data_type: "int",
        size: "11"
      },
      {
        name: "nombre",
        data_type: "varchar",
        size: "50"
      },
      {
        name: "precio",
        data_type: "float",
        size: "5"
      },
      {
        name: "stock",
        data_type: "smallint",
        size: "4"
      },
    ]
  },
  {
    name: "Entidad 2",
    methods: [
      {
        name: "get",
        value: false,
      },
      {
        name: "post",
        value: true,
      },
      {
        name: "put",
        value: false,
      },
      {
        name: "delete",
        value: true,
      },
    ],
    attributes: [
      {
        name: "id",
        data_type: "int",
        size: "11"
      },
      {
        name: "nombre",
        data_type: "varchar",
        size: "50"
      },
      {
        name: "precio",
        data_type: "float",
        size: "5"
      },
      {
        name: "stock",
        data_type: "smallint",
        size: "4"
      },
    ]
  },
  {
    name: "Entidad 3",
    methods: [
      {
        name: "get",
        value: false,
      },
      {
        name: "post",
        value: false,
      },
      {
        name: "put",
        value: false,
      },
      {
        name: "delete",
        value: false,
      },
    ],
    attributes: [
      {
        name: "id",
        data_type: "int",
        size: "11"
      },
      {
        name: "nombre",
        data_type: "varchar",
        size: "50"
      },
      {
        name: "precio",
        data_type: "float",
        size: "5"
      },
      {
        name: "stock",
        data_type: "smallint",
        size: "4"
      },
    ]
  },
]