import { Table, TableCell, TableRow, TableContainer, Paper, TableHead, TableBody } from "@mui/material"

const UserTable = props => {
    // Assuming you have a 'rows' prop or state
    const { rows } = props;

    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        rows.length > 0 ? rows.map(row => ( 
                            <TableRow key={row.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                <TableCell component="th" scope="row">{row.id}</TableCell>
                                <TableCell>{row.name}</TableCell>
                                <TableCell>{row.email}</TableCell>
                                <TableCell>
                                    {/* Actions go here */}
                                </TableCell>
                            </TableRow>
                        )) : null
                    }
                 </TableBody>
            </Table>
        </TableContainer>
    );
}

export default UserTable;