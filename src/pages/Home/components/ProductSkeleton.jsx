import React from 'react';
import PropTypes from 'prop-types';

import { Box, Grid } from '@mui/material';
import { Skeleton } from '@mui/material';

ProductSkeleton.propTypes = {
    length: PropTypes.number,
};

ProductSkeleton.defaultProps = {
    length: 8,
};

function ProductSkeleton({ length }) {
    return (
        <Box>
            <Grid container>
                {Array.from(new Array(length)).map((x, index) => (
                    <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
                        <Box padding={1}>
                            <Skeleton variant="rectangular" height={150} width="250px" />
                            <Skeleton />
                            <Skeleton width="60%" />
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}

export default ProductSkeleton;
