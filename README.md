# Klutch &middot; [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
Klutch is a lightweight, responsive layout system for React. It's simple by design and only uses 3 components: **Row**, **Column**, and **Cell**. You can combine these components to create clean, full-width layouts and not have to worry about styling.

---

[Installation](#installation) &nbsp; | &nbsp; [Quickstart](#quickstart) &nbsp; | &nbsp; [Components](#components) &nbsp; | &nbsp; [License](#license)

---


<br>


### Installation
```
npm install klutch -s
```

<br>

### Quickstart
```js
import React from 'react';
import { Row, Column, Cell } from 'klutch';

const Layout = () => {
  return (
    <Row>
      <Column columnWidth="1/2">
        <Cell style={{ backgroundColor: '#FF9AA2' }} />
      </Column>
      <Column columnWidth="1/2">
        <Cell style={{ backgroundColor: '#FFB7B2' }} />
      </Column>
    </Row>
  );
};

export default Layout;
```

**Renders**
![Two equal columns](https://github.com/kevinnayar/klutch/blob/master/images/columns-1_2-1_2.png)

<br>

**Columns of different widths**
```html
<Row>
  <Column columnWidth="1/8">
    <Cell style={{ backgroundColor: '#FFDAC1' }} />
  </Column>
  <Column columnWidth="1/8">
    <Cell style={{ backgroundColor: '#E2F0CB' }} />
  </Column>
  <Column columnWidth="1/4">
    <Cell style={{ backgroundColor: '#B5EAD7' }} />
  </Column>
  <Column columnWidth="1/2">
    <Cell style={{ backgroundColor: '#C7CEEA' }} />
  </Column>
</Row>
```

**Renders:**
![A row with 4 columns: 1/8, 1/8, 1/4, and 1/2](https://github.com/kevinnayar/klutch/blob/master/images/columns-1_8-1_8-1_4-1_2.png)

<br>

**Columns divisible by 3**
```html
<Row>
  <Column columnWidth="1/3">
    <Cell style={{ backgroundColor: '#FF9AA2' }} />
  </Column>
  <Column columnWidth="2/3">
    <Cell style={{ backgroundColor: '#FFB7B2' }} />
  </Column>
</Row>
```

**Renders:**
![A row with 2 columns: 1/3 and 2/3](https://github.com/kevinnayar/klutch/blob/master/images/columns-1_3-2_3.png)

<br>

**Columns divisible by 5**
```html
<Row>
  <Column columnWidth="1/5">
    <Cell style={{ backgroundColor: '#FFDAC1' }} />
  </Column>
  <Column columnWidth="2/5">
    <Cell style={{ backgroundColor: '#E2F0CB' }} />
  </Column>
  <Column columnWidth="2/5">
    <Cell style={{ backgroundColor: '#B5EAD7' }} />
  </Column>
</Row>
```

**Renders:**
![A row with 3 columns: 1/5, 2/5, and 2/5](https://github.com/kevinnayar/klutch/blob/master/images/columns-1_5-2_5-2_5.png)

<br>

**Putting it all together**
```html
<div style={{ border: '2px solid #999999' }}>

  <Row gutter="20px" removeBottomGutter>
    <Column columnWidth="1">
      <Cell style={{ backgroundColor: '#FF9AA2' }} />
    </Column>
  </Row>

  <Row gutter="20px" removeBottomGutter>
    <Column columnWidth="1/2">
      <Cell style={{ backgroundColor: '#FFB7B2' }} />
    </Column>
    <Column columnWidth="1/2">
      <Cell style={{ backgroundColor: '#FFDAC1' }} />
    </Column>
  </Row>

  <Row gutter="20px" removeBottomGutter>
    <Column columnWidth="1/8">
      <Cell style={{ backgroundColor: '#E2F0CB' }} />
    </Column>
    <Column columnWidth="1/8">
      <Cell style={{ backgroundColor: '#B5EAD7' }} />
    </Column>
    <Column columnWidth="1/4">
      <Cell style={{ backgroundColor: '#C7CEEA' }} />
    </Column>
    <Column columnWidth="1/2">
      <Cell style={{ backgroundColor: '#FF9AA2' }} />
    </Column>
  </Row>

  <Row gutter="20px" removeBottomGutter>
    <Column columnWidth="1/3">
      <Cell style={{ backgroundColor: '#FFB7B2' }} />
    </Column>
    <Column columnWidth="2/3">
      <Cell style={{ backgroundColor: '#FFDAC1' }} />
    </Column>
  </Row>

  <Row gutter="20px">
    <Column columnWidth="1/5">
      <Cell style={{ backgroundColor: '#E2F0CB' }} />
    </Column>
    <Column columnWidth="3/5">
      <Cell style={{ backgroundColor: '#B5EAD7' }} />
    </Column>
    <Column columnWidth="1/5">
      <Cell style={{ backgroundColor: '#C7CEEA' }} />
    </Column>
  </Row>

</div>
```

**Renders:**
![Rows with various columns and gutters](https://github.com/kevinnayar/klutch/blob/master/images/columns-various.png)

<br>


### Components
```
<Row />
```

As the name suggests, a row component allows you to create rows of content. A row represents a full-width horizontal space with sections called columns.

#### Row props
|Property|Type|Example Values|Description|
| --------- | --- | ----------- | ----------- |
|`gutter`|`string`|`20px`, `5%`| Accepts any CSS size value to set the gutter size around columns. If not provided, defaults to `0`.|
|`removeBottomGutter`|`boolean`|`true`, `false`|Removes the gutter from the bottom of the row. Useful if you want to stack rows on top of each other and avoid double gutters in-between.|
|`children`|`node`|`<Column/>`|Required.|

<br>

```
<Column />
```

Columns break up a row into sections. For instance, to split a row into two equal sections, you can drop in two column components each with `columnWidth` set to `1/2`.

The sum of all column widths within a single row must be equal to one.

#### Column props

|Property|Type|Example Values|Description|
| --------- | --- | ----------- | ----------- |
|`columnWidth`|`string`|`1/2`, `1/4`, `1/8`, `1/3`, `2/3`, `1/5`, `2/5`, `3/5`, `4/5`| Sets the width of the column.|
|`containsChildComponents`|`boolean`|`true`, `false`|Allows for nested child columns.|
|`children`|`node`|`<Cell/>` or any React component/HTML element.|Required.|

<br>

```
<Cell />
```

Cell is an **optional** component that can be nested within a column. It's only purpose is to provide a full-width container within the column that can be custom styled. You can pass in CSS block via inline styles or assign it custom `classNames` and then style the element via CSS. You can also choose to omit this component and drop in a component of your choosing.

#### Cell props

|Property|Type|Example Values|Description|
| --------- | --- | ----------- | ----------- |
|`classNames`|`string`|`"klutch-cell"`, `"foo bar"`|A string of class names so that the cell can be styled via CSS.|
|`style`|`object`|`{lineHeight: '1'}`| Inline CSS block to style the cell.|
|`children`|`node`|Any React component/HTML element.|Optional.|

### License
This package is released under the [MIT License](https://en.wikipedia.org/wiki/MIT_License).
