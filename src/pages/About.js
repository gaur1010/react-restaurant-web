import React from "react"
import {Box, Typography} from "@mui/material";



import Layout from "./../components/Layout/Layout";

const About =()=>{
    return (
    
        <Layout>
            <Box sx ={{
                my:15,
                textAlign:"center",
                "& h4":{ 
                fontweigth:"bold",
                my:2,
                fontSize:'1.3rem',
            },
            "& p":{
                textAlign:"justify",
            },}}>
                <Typography variant="h1"> Welcome to My Restaurant  </Typography>
                                    
              
                <p>
                In publishing and graphic design, Lorem ipsum (/ˌlɔː.rəm ˈɪp.səm/) is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. It is also used to temporarily replace text in a process called greeking, which allows designers to consider the form of a webpage or publication, without the meaning of the text influencing the design.
               

                </p>
            </Box>
        </Layout>
    
    );
};

export default About;