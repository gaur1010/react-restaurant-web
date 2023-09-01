import React from "react"

import Layout from "../components/Layout/Layout"
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableRow, Typography } from "@mui/material";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import MailIcon from '@mui/icons-material/Mail';


const Contact = () =>{
    return (
        <Layout>
            <Box sx={{my:10,ml:10,"& h4":{fontWeight:"bold",mb:2}}}>
             <Typography varieant = "h4">Contact</Typography>
             <p>
             Lorem ipsum is typically a corrupted version of De finibus bonorum et malorum, a 1st-century BC text by the Roman statesman and philosopher Cicero, with words altered, added, and removed to make it nonsensical and improper Latin. The first two words themselves are a truncation of 'dolorem ipsum' ('pain itself').
             </p>

            </Box>
            <Box>
                <TableContainer  component={Paper}>
                    <Table aria-label="contact table">
                        <TableRow>
                            <TableCell sxr = {{bgcolor:"black",color:"white"}}
                            align="center">Contact Details</TableCell>
                        </TableRow>
                   
                    <TableBody>
                        <TableCell>
                            <SupportAgentIcon sx={{color:'red',pt:1}}/>32421451(tollfreee);
                        </TableCell>
                        <TableCell>
                            <MailIcon sx = {{color:"skyblue",pt:1}}/>help@rest.com(tollfree)
                        </TableCell>

                    </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </Layout>
    );
};


export default Contact;