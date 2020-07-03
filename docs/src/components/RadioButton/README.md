# Radio

Provide contextual feedback messages for typical user actions with the handful of available and flexible alert messages.

## Example

Wraps a form field. Adds a label, display errors and help texts.

```javascript

<RadioButton name="radio-a" checked={selectedValue === 'A'} onChange={handleChange} value="A">
    Select A
</RadioButton>

<RadioButton name="radio-b" checked={selectedValue === 'B'} onChange={handleChange} value="B">
    Select B
</RadioButton>

```

### Properties

| Property   | Type     | Required | Default value | Description                                                  |
| :--------- | :------- | :------- | :------------ | :----------------------------------------------------------- |
| `name`     | string   | yes      | radio         | name for the radio button                                    |
| `checked`  | boolean  | no       | false         | Boolean flag that determine the state of the button          |
| `disabled` | boolean  | no       | false         | Boolean flag to disable radio button                         |
| `value`    | string   | yes      |               | The value to be used for the respective button when selected |
| `onChange` | function | yes      | () => {}      | Function to call when radio button is clicked.               |
