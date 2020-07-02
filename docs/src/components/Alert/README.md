# Alert

Button is an extension to standard input element with icons.

## Example

```javascript
<Alert />
```

## Properties

| Prop name | Type | Required | Description |
| --------- | ---------- | -------- | |
| type | enum | yes | The type of this Alert, changes it's color. One of: primary, secondary, success, info, warning, danger |
| children | React.Node |
| text | React.Node |
| className | string |
|isDismissible|boolean||Adds an 'X' to the left side of the Alert that dismisses the Alert
|onDismissClick|function||Handle the dismissing of the Alert yourself
