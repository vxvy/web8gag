import { Select, Cascader } from "antd";
import 'antd/dist/antd.css';
const { Option } = Select;

const Formulario = () => {

    let a = "o"
    const options = 
    // [
    //     a:"a",
    //     b:"a",
    //     c:"a",
    //     d:"a"
    // ]
    {
        a:"a",
        b:"a",
        c:"a",
        d:"a"
    }

    const onChange = () => {
        alert('asdfghj')
    }

    return (
        <>
            <Select allowClear="true">
                <Option value="lucy">lucy</Option>
                <Option value="lucy">lucy</Option>
                <Option value="lucy">lucy</Option>
                <Option value="lucy">lucy</Option>
            </Select>
            {/* <Cascader options={options} onChange={onChange} /> */}
        </>
    );
}

export default Formulario