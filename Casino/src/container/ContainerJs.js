import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

 function ContainerJs() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lm">
        <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }} />
      </Container>
    </React.Fragment>
  );
}

export default ContainerJs;
