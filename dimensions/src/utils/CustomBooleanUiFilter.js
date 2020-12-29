import * as React from 'react';

class CustomBooleanUiFilter extends React.Component {
    onChange = (event) => {
        const value = event.target.value === 'null' ? null : event.target.value === 'true';
        const { firstFilterProps } = this.props;

        firstFilterProps.onChange({
            value,
            operator: 'eq',
            syntheticEvent: event.syntheticEvent
        });
    }

    render() {
        const { firstFilterProps } = this.props;
        const value = firstFilterProps.value;

        return (
            <div>
                <input
                    id="bool-null"
                    name="boolean"
                    type="radio"
                    value="null"
                    checked={value === null}
                    onChange={this.onChange}
                />
                <label htmlFor="bool-null">&nbsp;not set</label>
                <br />
                <input
                    id="bool-true"
                    name="boolean"
                    type="radio"
                    value="true"
                    checked={value === true}
                    onChange={this.onChange}
                />
                <label htmlFor="bool-true">&nbsp;true</label>
                <br />
                <input
                    id="bool-false"
                    name="boolean"
                    type="radio"
                    value="false"
                    checked={value === false}
                    onChange={this.onChange}
                />
                <label htmlFor="bool-false">&nbsp;false</label>
            </div>
        );
    }
}

export default CustomBooleanUiFilter;