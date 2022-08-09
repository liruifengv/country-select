# BaseInput
---
BaseInput 基础输入框组件

### 基本用法

```jsx
<BaseInput
  placeholder="Search a country"
  onChange={handleChange}
/>
```

### 允许清空
```jsx
<BaseInput
  placeholder="Search a country"
  allowClear
  onChange={handleChange}
/>

```

### 自定义前置图标
```jsx
<BaseInput
  placeholder="Search a country"
  prefix={<SearchOutline />}
  onChange={handleChange}
/>
```

###  Attributes
| 参数        | 说明           | 类型  | 可选值 | 默认值 |
| ------------- |:-------------:| :-----|:-----|:-----|
| placeholder   | placeholder |   string | ——— | ——— |
| prefix   | 前缀图标 |   ReactNode | ——— | ——— |
| allowClear   | 可以点击清除图标删除内容 |   Boolean | ——— | ——— |
| onChange   | change事件 |   func | ——— | ——— |
