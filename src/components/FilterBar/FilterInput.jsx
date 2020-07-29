import React from 'react';
import moment from 'moment';

import PropTypes from 'prop-types';
import { notification, Select, InputNumber, DatePicker } from 'antd';

const { Option } = Select;

const FilterInput = ({ type, filterFields, onChange, id, name, values, validation }) => {
    function openNotification(notificationType, fieldName, value) {
        notification[notificationType]({
            message: 'Valor não aceito',
            description: `${value} não é aceito no campo ${fieldName}.`,
            duration: 4,
        });
    }
    function onChangeHandler(value) {
        if (value < validation.min || value > validation.max) {
            openNotification('error', name, value);
        } else {
            onChange({ ...filterFields, [id]: value });
        }
    }

    function onChangeHandlerForDateString(_value, dateString = '') {
        const dateTimeStamp = dateString.replace(' ', 'T');
        onChange({ ...filterFields, [id]: dateTimeStamp });
    }

    switch (type) {
        case 'select':
            return (
                <Select
                    showSearch
                    placeholder={name}
                    optionFilterProp="children"
                    onChange={onChangeHandler}
                    filterOption={(input, option) =>
                        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                    }>
                    {values.map((option) => (
                        <Option key={option.value} value={option.value}>
                            {option.name}
                        </Option>
                    ))}
                </Select>
            );
        case 'number':
            return (
                <InputNumber
                    placeholder={name}
                    min={validation.min || 0}
                    max={validation.max || undefined}
                    onChange={onChangeHandler}
                />
            );
        case 'datetime':
            return (
                <DatePicker
                    onChange={onChangeHandlerForDateString}
                    format="YYYY-MM-DD HH:mm:ss"
                    showTime={{
                        hideDisabledOptions: true,
                        defaultValue: moment('00:00:00', 'HH:mm:ss'),
                    }}
                />
            );

        default:
            return <> </>;
    }
};

FilterInput.propTypes = {
    type: PropTypes.string.isRequired,
    filterFields: PropTypes.objectOf(PropTypes.any).isRequired,
    onChange: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    values: PropTypes.arrayOf(
        PropTypes.shape({
            value: PropTypes.string,
            name: PropTypes.string,
        })
    ),
    validation: PropTypes.objectOf(PropTypes.any),
};

FilterInput.defaultProps = {
    values: [],
    validation: {},
};

export default FilterInput;
