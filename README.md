Rabbit System
===============

## ToDo
### Schema

- Product

```js
name: {
    type: String,
    label: 'Name',
    unique: true,
    max: 250
},
branchPrice: {
    type: Object,
    label: "Branch Price",
    decimal: true
},
matanancePrice: {
    type: Object,
    label: "Matanance Price",
    decimal: true
},
feature: {
    type: String,
    label: 'Feature'
}
```

- Customer

```js
name: {
    type: String,
    label: 'Name',
    max: 250
},
gender: {
    type: String,
    label: "Gender"
},
address: {
    type: String,
    label: "Address"
},
telephone: {
    type: String,
    label: 'Company'
}
company: {
    type: String,
    label: 'Telephone'
}
```
