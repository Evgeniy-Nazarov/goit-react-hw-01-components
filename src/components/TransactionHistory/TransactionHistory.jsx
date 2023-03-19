import { TableBody, TableBodyItem, TableHead, TableHeadItem, TableHeadRow, TableRow, TableStyle } from "./TransactionHistory.stayled";
import PropTypes from 'prop-types';

export const TransactionHistory = ({ transactions }) => {
    console.log(transactions);
    return (
        <TableStyle>
            
<TableHead>
    <TableHeadRow>
    <TableHeadItem>Type</TableHeadItem>
    <TableHeadItem>Amount</TableHeadItem>
    <TableHeadItem>Currency</TableHeadItem>
    </TableHeadRow>
</TableHead>
{transactions.map(({ id, type, amount, currency}) =>
<TableBody key={ id}>
        <TableRow>
            <TableBodyItem>{ type}</TableBodyItem>
            <TableBodyItem>{ amount}</TableBodyItem>
            <TableBodyItem>{ currency}</TableBodyItem>
    </TableRow>
</TableBody>
            )}
</TableStyle>
    );
};
    
TransactionHistory.propTypes = {
    transactions: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
        })
    )
}