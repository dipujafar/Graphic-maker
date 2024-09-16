import { Table } from "antd";

// @ts-expect-error: Ignoring TypeScript error due to inferred 'any' type for 'values' which is handled in the form submit logic
const DataTable = ({columns, data, pageSize}) => {
    return (
        <Table columns={columns} dataSource={data}  pagination={{pageSize: pageSize}}></Table>
    );
};

export default DataTable;