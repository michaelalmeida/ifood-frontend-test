import React, { useState } from 'react';
import moment from 'moment';

import { Select, InputNumber, DatePicker } from 'antd';

const { Option } = Select;

const FilterInput = ({ type, id, name, values, validation }) => {
    function onChange(value) {
        console.log(`selected ${value}`);
    }

    function onChangeForDateString(value, dateString = '') {
        console.log(value, dateString);
    }
    function onSearch(val) {
        console.log('search:', val);
    }

    switch (type) {
        case 'select':
            return (
                <Select
                    showSearch
                    style={{ width: 200 }}
                    placeholder="Selecione"
                    optionFilterProp="children"
                    onChange={onChange}
                    onSearch={onSearch}
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
                    min={validation.min || 0}
                    max={validation.max || undefined}
                    defaultValue={3}
                    onChange={onChange}
                />
            );
        case 'datetime':
            return (
                <DatePicker
                    onChange={onChangeForDateString}
                    format="YYYY-MM-DD HH:mm:ss"
                    showTime={{
                        hideDisabledOptions: true,
                        defaultValue: moment('00:00:00', 'HH:mm:ss'),
                    }}
                />
            );

        default:
            return <>Nenhum dado</>;
    }
};

export default FilterInput;
